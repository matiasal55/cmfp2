// Ver como empaquetar sin usar Webpack
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

////////////////////////////////////////////
// Validación de formulario

const formulario = document.getElementById("form");
const campos = [...document.getElementsByClassName("campos")];
const mensaje = document.getElementById("mensaje");
campos.push(mensaje);
let estado = [];

formulario.reset();

const borrarMensaje = (error) => {
  error.innerHTML = "";
  estado.push(true);
};

const validarCampo = (campo, error) => {
  const regexNombre = /^[\w\s]{5,20}/gi;
  const regexEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const regexMensaje = /^[\w\s]{5,20}/gi;
  const regexTelefono = /[0-9]{8,15}/g;
  switch (campo.name) {
    case "nombre":
    case "apellido":
    case "asunto":
      {
        if (!regexNombre.test(campo.value)) {
          error.innerHTML = `<p>El ${campo.name} debe tener entre 5 y 10 caracteres</p>`;
          estado.push(false);
        } else {
          borrarMensaje(error);
        }
      }
      break;
    case "email":
      {
        if (!regexEmail.test(campo.value)) {
          error.innerHTML = `<p>El ${campo.name} no es correcto</p>`;
          estado.push(false);
        } else {
          borrarMensaje(error);
        }
      }
      break;
    case "teléfono":
      {
        if (!regexTelefono.test(campo.value)) {
          error.innerHTML = `<p>El ${campo.name} debe tener entre 8 y 15 números</p>`;
          estado.push(false);
        } else {
          borrarMensaje(error);
        }
      }
      break;
    case "mensaje": {
      if (!regexTelefono.test(campo.value)) {
        error.innerHTML = `<p>El ${campo.name} debe tener como mínimo 20 caracteres</p>`;
        estado.push(false);
      } else {
        borrarMensaje(error);
      }
    }
  }
};

const validarMensaje = () => {
  const ingresados = document.getElementById("ingresados");
  const maximo = 500;
  const alerta = document.getElementById("alerta");
  let contador = 0;

  document.getElementById("maximo").innerHTML = `${maximo} `;

  mensaje.addEventListener("keydown", (e) => {
    if (e.keyCode == 8 && contador >= 0) contador--;
    else if (e.keyCode >= 32 && e.keyCode <= 254) contador++;
    if (contador >= 0) ingresados.innerHTML = contador;

    if (contador > maximo) {
      e.preventDefault();
      alerta.id = "alerta-maxima";
      ingresados.innerHTML = maximo;
    } else alerta.id = "alerta";
  });
};

validarMensaje();

formulario.addEventListener("submit", (e) => {
  // e.preventDefault();
  campos.forEach((campo, index) => {
    const error = document.getElementsByClassName("error")[index];
    if (campo.value == "") {
      error.innerHTML = `<p>Por favor ingrese su ${campo.name}</p>`;
      estado.push(false);
    } else validarCampo(campo, error);

    campo.addEventListener("keypress", () => {
      error.innerHTML = "";
    });
  });

  console.log(estado);

  if (estado.includes(false)) {
    console.log("Formulario incompleto");
    estado = [];
    e.preventDefault();
  } else {
    alert("Gracias");
  }
});
