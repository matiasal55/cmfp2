const ver_menu = document.getElementsByClassName("menu")[0];
const ver_cursos = document.getElementsByClassName("cursos")[0];
const header = document.getElementsByClassName("header")[0];
const scrollMaxMenu = 300;
const footer = document.getElementsByClassName("footer")[0];
const scrollFooter = screen.height * 0.8;

// Fade a medida que scrollea, solo index
export const scrollSection = (section, scroll) => {
  if (window.pageYOffset >= scroll) section.classList.add("mostrar");
  else section.classList.remove("mostrar");
};

// Efecto menú fondo oscuro, letras blancas
export const scrollMenu = () => {
  if (window.pageYOffset >= scrollMaxMenu) {
    header.classList.add("scroll");
    ver_menu.classList.add("scroll");
    ver_cursos.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
    ver_cursos.classList.remove("scroll");
  }

  // Incluye fade Footer
  scrollSection(footer, scrollFooter);
};

// Fadein de contenidos, excepto index
export const contenidos = (section, tiempo) => {
  setTimeout(() => {
    section.classList.add("mostrar");
  }, tiempo);
};
