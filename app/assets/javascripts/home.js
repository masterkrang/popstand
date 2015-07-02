$(document).ready(function() {
  console.log("doc ready")
  homeReady()
});

$(document).on('page:load', function() {
  console.log("page:load")
  homeReady()
});


function homeReady() {

  // $("#submit").click(function(e) {
  //   e.preventDefault();
  //   $.ajax({
  //       type: "POST",
  //       url: '/inquiries',
  //       data: data,
  //       success: function(res) {
  //         console.log("message sent successfully");
  //
  //         // show the success message
  //
  //         // clear fields
  //         $("form input").val("");
  //       },
  //       dataType: "json"
  //     });
  // });

}
