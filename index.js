
// al pasar con el ratón por encima de cualquier imagen del header, se devuleve la misma imagen pero con color
 $(".header-photo").on("mouseover", function() {
      var idSelectedImage = $(this).attr("id");
      $(this).attr("src", "./Assets/Images/" + idSelectedImage + "-original.png");     })

// al quitar el ratón se vuelve a la imagen anterior
$(".header-photo").on("mouseout", function() {
  var idSelectedImage = $(this).attr("id");
  $(this).attr("src", "./Assets/Images/" + idSelectedImage + ".png");
 })


 // al pasar con el ratón por encima de los iconos de la sección "mis trabajos", se devuleve la misma imagen pero con color rosa
 $(".iconos").on("mouseover", function() {
  var idSelectedImage = $(this).attr("id");
  $(this).attr("src", "Assets/Images/Iconos peluqeria/" + idSelectedImage + "-rosa.png");     })

// al quitar el ratón se vuelve a la imagen anterior
$(".iconos").on("mouseout", function() {
  var idSelectedImage = $(this).attr("id");
  $(this).attr("src", "Assets/Images/Iconos peluqeria/" + idSelectedImage + "-verde.png");     })

