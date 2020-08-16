const path = require("path");

module.exports = {
  entry: {
    index: "./src/js/index.js",
    secciones: "./src/js/secciones.js",
    contacto: "./src/js/contacto.js",
  },
  output: {
    path: path.join(__dirname, "./dev/js"),
    filename: "[name].js",
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }],
  },
  mode: "development",
};
