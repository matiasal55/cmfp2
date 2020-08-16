export const menuResponsive = () => {
  const boton = document.getElementById("boton-responsive");
  const ver_menu = document.getElementsByClassName("menu")[0];
  const boton_cursos = document.getElementsByClassName("cursos-titulo")[0];
  const ver_cursos = document.getElementsByClassName("cursos")[0];
  const header = document.getElementsByClassName("header")[0];

  const mostrar = (elemento, mostrar, clase) => {
    elemento.addEventListener("click", () => {
      if (mostrar.classList.contains(clase)) mostrar.classList.remove(clase);
      else mostrar.classList.add(clase);
      // mostrar.classList.toogle(clase);
    });
  };

  mostrar(boton, ver_menu, "responsive");
  mostrar(boton_cursos, ver_cursos, "responsive");
  mostrar(boton_cursos, header, "expandido");
};
