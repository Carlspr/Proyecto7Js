
document.addEventListener("DOMContentLoaded", function() {
  let aside = document.querySelector("aside");
  aside.style.display = "none";

});


function mostrarBienvenida() {
  document.getElementById("contenido").innerHTML = "";
  let Contenedor = document.createElement("p")
  Contenedor.id = "MensajeId"
  // Mostrar Saludo
  let mensaje = document.createElement("p");
  mensaje.textContent = "¡Bienvenido al Mundo Web!";
  Contenedor.appendChild(mensaje);

  // Agregar botón de cierre
  let cerrarSaludo = document.createElement("img");
  cerrarSaludo.src = "./img/X.png";
  cerrarSaludo.id = "Xicon"
  cerrarSaludo.onclick = function() {
    document.getElementById("contenido").innerHTML = "";
  };
  Contenedor.appendChild(cerrarSaludo);
  document.getElementById("contenido").appendChild(Contenedor);
}

function mostrarFormulario() {
  // Limpiar contenido actual
  document.getElementById("contenido").innerHTML = "";

  // Crear formulario
  let formulario = document.createElement("form");
  formulario.id = "formContainer"

  // Crear campos del formulario
  let campo1 = document.createElement("input");
  campo1.type = "text";
  campo1.placeholder = "Nombre:";
  formulario.appendChild(campo1);

  let campo2 = document.createElement("input");
  campo2.type = "text";
  campo2.placeholder = "Apellido:";
  formulario.appendChild(campo2);

  let campo3 = document.createElement("input");
  campo3.type = "text";
  campo3.placeholder = "Correo:";
  formulario.appendChild(campo3);

  let boton = document.createElement("button")
  boton.textContent = "Guardar"
  formulario.appendChild(boton);


  // Agregar formulario al contenido
  document.getElementById("contenido").appendChild(formulario);

  let Saludo = document.getElementById("Saludar");
  let SaludoStyles = window.getComputedStyle(Saludo);

  if (SaludoStyles.display === "block") { 
    Saludo.style.display = "none";
  }
}

function toggleInicio() {
  document.getElementById("contenido").innerHTML = "";
  let Saludo = document.getElementById("Saludar");
  if (Saludo.style.display === "none") {
    Saludo.style.display = "block";
  } else { 
    Saludo.style.display = "none";
  }
}


function toggleAside() {
  let aside = document.querySelector("aside");
  if (aside.style.display === "none") {
    aside.style.display = "block";
  } else { 
    aside.style.display = "none";
  }
}