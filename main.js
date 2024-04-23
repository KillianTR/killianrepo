function cambiarImagen(elemento) {
    const imagenActual = elemento.src;
    let nuevaImagen;

    // Verifica qué imagen está actualmente mostrada
    if (imagenActual.endsWith("boff.jpg")) {
        nuevaImagen = "./images/bon.jpg";
    } else {
        nuevaImagen = "./images/boff.jpg";
    }

    // Cambia la imagen del botón
    elemento.src = nuevaImagen;

    var bombilla = document.querySelector('.bombilla');

    if (bombilla.src.endsWith("off.png")) {
        bombilla.src = "./images/on.png";
    } else {
        bombilla.src = "./images/off.png";
    }

    if (imagenActual.endsWith("boff.jpg")) {
        nuevaImagen = "./images/bon.jpg";
    } else {
        nuevaImagen = "./images/boff.jpg";
    }

    elemento.src = nuevaImagen;
}

// Esperar a que el documento esté completamente cargado
$(document).ready(function() {
    // Variable para controlar el estado de la bombilla
    var bombillaEncendida = false;

    // Función para cambiar la imagen al hacer clic en el botón
    $('.boton').click(function() {
        // Comprobar el estado actual de la bombilla
        if (bombillaEncendida) {
            // Cambiar la imagen de la bombilla a off.jpg si está encendida
            $('.bombilla').attr('src', './images/off.png');
        } else {
            // Cambiar la imagen de la bombilla a on.jpg si está apagada
            $('.bombilla').attr('src', './images/on.png');
        }

        // Invertir el estado de la bombilla
        bombillaEncendida = !bombillaEncendida;

        // Mostrar la imagen de la bombilla
        $('.bombilla').show();
    });
});

$(document).ready(function() {
    // Evento de cambio en el deslizador de luz
    $('#light-slider1').on('input', function() {
        var lightLevel = $(this).val(); // Obtener el nivel de luz seleccionado
        $('#light-level').text("Light Level: " + lightLevel); // Actualizar el texto del h2

        // Actualizar la intensidad de la imagen solo si la bombilla está encendida
        if ($('.bombilla').attr('src') === './images/on.png') {
            $('.bombilla').css('opacity', lightLevel / 7);
        }
    });

        // Si la bombilla está encendida, mostrar el deslizador de luz
        if (bombillaEncendida) {
            $('#light-slider1').show();
        } else {
            $('#light-slider1').hide();
        }
    });

// Función para ajustar el tamaño de la imagen de la bombilla según el valor del control deslizante
function adjustLightSize() {
    var slider = document.getElementById("light-slider2");
    var bombilla = document.getElementById("bombilla");
    var level = slider.value; // Obtener el valor seleccionado
    
    // Ajustar el tamaño de la imagen de la bombilla según el nivel seleccionado
    bombilla.style.width = (400 + level * 50) + "px";
    bombilla.style.height = (500 + level * 50) + "px";
}

// Llamar a la función cuando se cambie el valor del control deslizante
document.getElementById("light-slider2").addEventListener("input", adjustLightSize);

// Rotar la bombilla
function rotarImagen(nivel) {
    var gradosPorNivel = 360 / 7;
    var grados = nivel * gradosPorNivel;
    var bombilla = document.getElementById('bombilla');
    bombilla.style.transform = 'rotate(' + grados + 'deg)';
  }