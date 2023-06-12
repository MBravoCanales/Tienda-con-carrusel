$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 3, // Número de elementos a mostrar en el carrusel
      loop: true, // Repetir el carrusel en bucle
      nav: true, // Mostrar las flechas de navegación
      dots: false, // Ocultar los puntos indicadores
      autoplay: true, // Reproducir automáticamente el carrusel
      autoplayTimeout: 10000, // Tiempo de espera entre desplazamientos (en milisegundos)
      responsive:{
        0:{
          items: 1 // Número de elementos a mostrar en pantallas pequeñas
        },
        768:{
          items: 2 // Número de elementos a mostrar en pantallas medianas
        },
        992:{
          items: 3 // Número de elementos a mostrar en pantallas grandes
        }
      }
    });
  });
  