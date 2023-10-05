
// al pasar con el ratón por encima de cualquier imagen del header, se devuleve la misma imagen pero con color
 $(".header-photo").on("mouseover", function() {
      var idSelectedImage = $(this).attr("id");
      $(this).attr("src", "./Assets/Images/" + idSelectedImage + "-original.png");     })

// al quitar el ratón se vuelve a la imagen anterior
$(".header-photo").on("mouseout", function() {
  var idSelectedImage = $(this).attr("id");
  $(this).attr("src", "./Assets/Images/" + idSelectedImage + ".png");
 })

