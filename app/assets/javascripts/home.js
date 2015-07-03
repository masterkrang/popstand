$(document).ready(function() {
  console.log("doc ready")
  homeReady()
});

$(document).on('page:load', function() {
  console.log("page:load")
  homeReady()
});


function homeReady() {

  $("#cta").click(function() {
    $("html, body").animate({ scrollTop: $('#form_container').offset().top }, 1000);
    $("#inquiry_name").focus();
  })

  $(".image_container").click(function(e){
      var link = $(this).data("href")
      window.location = link;
  });

}
