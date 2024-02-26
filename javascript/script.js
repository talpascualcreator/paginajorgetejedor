$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false
    });
  });
 /*contactos*/
 function toggleDetails(id) {
  var details = document.getElementById(id);
  details.classList.toggle("show-details");
}

 