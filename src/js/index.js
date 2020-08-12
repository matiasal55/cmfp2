const boton = document.getElementById("boton-responsive");
const ver_menu = document.getElementsByClassName("menu")[0];
const boton_cursos = document.getElementsByClassName("cursos-titulo")[0];
const ver_cursos = document.getElementsByClassName("cursos")[0];
const header = document.getElementsByClassName("header")[0];

const mostrar = (elemento, mostrar) => {
  elemento.addEventListener("click", () => {
    if (mostrar.classList.contains("responsive"))
      mostrar.classList.remove("responsive");
    else mostrar.classList.add("responsive");
  });
};

mostrar(boton, ver_menu);
mostrar(boton_cursos, ver_cursos);

window.onscroll = () => {
  const scrollMax = 300;
  if (window.pageYOffset >= scrollMax) {
    header.classList.add("scroll");
    ver_menu.classList.add("scroll");
    ver_cursos.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
    ver_cursos.classList.remove("scroll");
  }
};
