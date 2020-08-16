const gulp = require("gulp"); //Gulp
const babel = require("gulp-babel"); //Babel
const terser = require("gulp-terser"); // Minifica JS
const postcss = require("gulp-postcss");
const cssnano = require("cssnano"); //Minifica CSS y limpia el mismo
const autoprefixer = require("autoprefixer"); //Agrega los prefijos para los navegadores necesarios
const pug = require("gulp-pug"); // Pug
const production = false; // Bandera para minificar HTML
const sass = require("gulp-sass"); // Sass
const cacheBust = require("gulp-cache-bust"); // Asigna una key para que el sitio tenga las ultimas versiones de los archivos
const imagemin = require("gulp-imagemin"); // Optimiza imagenes
const browserSync = require("browser-sync"); // Servidor local
const stream = browserSync.stream; // Servidor local - reload
const reload = browserSync.reload; // Servidor local - reload
const plumber = require("gulp-plumber"); // Maneja errores. En caso de algun error avisa y sigue ejecutando
const cssPlugins = [cssnano(), autoprefixer()];
const webpack = require("webpack-stream");

// gulp.task("babel", () => {
//   return gulp
//     .src("./src/js/*.js")
//     .pipe(plumber())
//     .pipe(babel())
//     .pipe(terser())
//     .pipe(gulp.dest("./dev/js"))
//     .pipe(stream());
// });

gulp.task("webpack", () => {
  return gulp
    .src("./src/js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./dev/js"))
    .pipe(stream());
});

gulp.task("pug", () => {
  return gulp
    .src("./src/pug/pages/**/*.pug")
    .pipe(plumber())
    .pipe(
      pug({
        pretty: production ? false : true,
      })
    )
    .pipe(
      cacheBust({
        type: "timestamp",
      })
    )
    .pipe(gulp.dest("./dev"))
    .pipe(stream());
});

gulp.task("sass", () => {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest("./dev/css"))
    .pipe(stream());
});

gulp.task("imgmin", () => {
  return gulp
    .src("./src/img/*")
    .pipe(plumber())
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
      ])
    )
    .pipe(gulp.dest("./dev/img"));
});

gulp.task("default", () => {
  browserSync({
    server: "./dev",
  });
  gulp.watch("./src/pug/**/*.pug", gulp.series("pug")).on("change", reload);
  gulp.watch("./src/scss/**/*.scss", gulp.series("sass")).on("change", reload);
  gulp.watch("./src/js/**/*.js", gulp.series("webpack")).on("change", reload);
});
