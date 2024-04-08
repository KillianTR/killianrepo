// Generic
const mostrarIconoBtn = document.getElementById("mostrarIconoBtn");
const iconoDiv = document.getElementById("iconoDiv");
const mostrarIconoDetrasBtn = document.getElementById("mostrarIconoDetrasBtn");
const iconos = ["💧", "🔥", "💥", "❄️", "⚡️", "🌟", "⚽", "🍀", "📈", "🏀", "🐦", "🐬", "🏃‍♂️", "🏈", "🐢", "🐾", "🦄", "🍕", "🍓", "🦀"];

// Push
document.addEventListener("DOMContentLoaded", function() {

    function mostrarIcono(icono) {
      const nuevoIcono = document.createElement("span");
      nuevoIcono.className = "icono";
      nuevoIcono.textContent = icono;
      iconoDiv.appendChild(nuevoIcono);
    }
  
    function obtenerIconoAleatorio() {
      const indice = Math.floor(Math.random() * iconos.length);
      return iconos[indice];
    }
  
    mostrarIconoBtn.addEventListener("click", function() {
      const iconoAleatorio = obtenerIconoAleatorio();
      mostrarIcono(iconoAleatorio);
    });
  });

// Unshift
document.addEventListener("DOMContentLoaded", function() {

  function mostrarIcono(icono) {
    const nuevoIcono = document.createElement("span");
    nuevoIcono.className = "icono";
    nuevoIcono.textContent = icono;
    // Inserta el nuevo icono al principio del contenedor
    iconoDiv.insertBefore(nuevoIcono, iconoDiv.firstChild);
  }

  function obtenerIconoAleatorio() {
    const indice = Math.floor(Math.random() * iconos.length);
    return iconos[indice];
  }

  mostrarIconoDetrasBtn.addEventListener("click", function() {
    const iconoAleatorio = obtenerIconoAleatorio();
    mostrarIcono(iconoAleatorio);
  });
});

// Insert At
function insertarIcono() {
  const numeroSelect = document.getElementById("numeroSelect");
  const selectedIndex = parseInt(numeroSelect.value) - 1; // Convertimos a entero y restamos 1 para obtener el índice correcto

  const iconos = document.getElementById("iconoDiv").children;

  // Creamos un nuevo icono
  const nuevoIcono = document.createElement("span");
  nuevoIcono.className = "icono";
  const iconoAleatorio = obtenerIconoAleatorio();
  nuevoIcono.textContent = iconoAleatorio;

  // Insertamos el nuevo icono en la posición especificada
  if (selectedIndex >= 0 && selectedIndex < iconos.length) {
    const iconoExistente = iconos[selectedIndex];
    iconoExistente.parentNode.insertBefore(nuevoIcono, iconoExistente);
  } else {
    console.log("Índice fuera de rango.");
  }
}

function obtenerIconoAleatorio() {
  const iconos = ["💧", "🔥", "💥", "❄️", "⚡️", "🌟", "⚽", "🍀", "📈", "🏀", "🐦", "🐬", "🏃‍♂️", "🏈", "🐢", "🐾", "🦄", "🍕", "🍓", "🦀"];
  const indice = Math.floor(Math.random() * iconos.length);
  return iconos[indice];
}

// Pop
function popItem() {
  const iconosEnDiv = iconoDiv.querySelectorAll(".icono");
  if (iconosEnDiv.length > 0) {
      const ultimoIcono = iconosEnDiv[iconosEnDiv.length - 1];
      iconoDiv.removeChild(ultimoIcono);
  } else {
      console.log("No hay iconos para eliminar.");
  }
}

// Shift
function shiftItem() {
  const iconosEnDiv = iconoDiv.querySelectorAll(".icono");
  if (iconosEnDiv.length > 0) {
      const primerIcono = iconosEnDiv[0];
      iconoDiv.removeChild(primerIcono);
  } else {
      console.log("No hay iconos para eliminar.");
  }
}

// Remove At
function removeItemAt() {
  const numeroSelect = document.getElementById("numeroSelect");
  const selectedIndex = parseInt(numeroSelect.value) - 1; // Convertimos a entero y restamos 1 para obtener el índice correcto

  const iconos = document.getElementById("iconoDiv").children;

  // Eliminamos el icono en la posición especificada
  if (selectedIndex >= 0 && selectedIndex < iconos.length) {
      const iconoAEliminar = iconos[selectedIndex];
      iconoAEliminar.parentNode.removeChild(iconoAEliminar);
  } else {
      console.log("Índice fuera de rango.");
  }
}