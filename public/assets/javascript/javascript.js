$(".create").on("click", function (event) {
  event.preventDefault();
  var newBurger;

  $.ajax("/create/burger", {
    type: "POST",
    data: newBurger
  }).then(function(){
    location.reload();
  })
});



$(".eat").on("click", function(event) {
  var id = $(this).data("id");

$.ajax("/devour/burger/:id" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("devoured", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });