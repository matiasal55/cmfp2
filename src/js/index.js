const boton = document.getElementById("boton-responsive");
const ver_menu = document.getElementsByClassName("menu")[0];
const boton_cursos = document.getElementById("cursos");
const ver_cursos = document.getElementsByClassName("cursos")[0];

const mostrar = (elemento, mostrar) => {
  elemento.addEventListener("click", () => {
    if (mostrar.classList.contains("responsive"))
      mostrar.classList.remove("responsive");
    else mostrar.classList.add("responsive");
  });
};

mostrar(boton, ver_menu);
mostrar(boton_cursos, ver_cursos);
