// INDEX SECCIÓN PRIMERA

//para el fade in de los elementos de la sección
$(document).ready(function() {
  $(".header-photo").hide();
  $(".header-photo").fadeIn(3000);
  $(".div-text").hide();
  $(".div-text").fadeIn(3000);
})

// al pasar con el ratón por encima de cualquier imagen del header, se devuleve la misma imagen pero con color
$(".header-photo").on("mouseover", function() {
      var idSelectedImage = $(this).attr("id");
      $(this).attr("src", "./Assets/Images/" + idSelectedImage + "-original.png");     })

// al quitar el ratón se vuelve a la imagen anterior
$(".header-photo").on("mouseout", function() {
  var idSelectedImage = $(this).attr("id");
  $(this).attr("src", "./Assets/Images/" + idSelectedImage + ".png");
 })

// INDEX SECCIÓN SEGUNDA

//para el fade in de los elementos de la sección
$(".my-photo").hide();
$(document).scroll(function() {
  $(".my-photo").fadeIn(3000);
});



// INDEX SECCIÓN TERCERA

//para el fade in de los elementos de la sección
$(".titulo-seccion").hide();
$(".iconos-seccion").hide();
$(document).scroll(function() {
  $(".titulo-seccion").fadeIn(3000);
  $(".iconos-seccion").fadeIn(4000);
});

 // al pasar con el ratón por encima de los iconos de la sección "mis trabajos", se devuleve la misma imagen pero con color rosa
 $(".iconos").on("mouseover", function() {
  var idSelectedImage = $(this).attr("id");
  $(this).attr("src", "Assets/Images/Iconos peluqeria/" + idSelectedImage + "-rosa.png");     })

// al quitar el ratón se vuelve a la imagen anterior
$(".iconos").on("mouseout", function() {
  var idSelectedImage = $(this).attr("id");
  $(this).attr("src", "Assets/Images/Iconos peluqeria/" + idSelectedImage + "-verde.png");     })




