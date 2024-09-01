$(document).ready(function() {
    
    const swiper = new Swiper('.swiper', {
      slidesPerView: 6, 
      spaceBetween: 15, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    // Manejo de clics en el menú
    $(".menu > ul > li").click(function(e) {
      // Eliminar activo de los elementos ya activos
      $(this).siblings().removeClass("active");
      // Agregar activo al elemento clicado
      $(this).toggleClass("active");
      // Si tiene sub menú, mostrarlo
      $(this).find("ul").slideToggle();
      // Cerrar otros sub menús si alguno está abierto
      $(this).siblings().find("ul").slideUp();
      // Eliminar la clase activa de los elementos del sub menú
      $(this).siblings().find("ul").find("li").removeClass("active");
    });
  
    // Manejo de clic en el botón del menú
    $(".menu-btn").click(function() {
      $(".sidebar").toggleClass("active");
    });
  });