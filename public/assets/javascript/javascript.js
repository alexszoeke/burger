$(".eat").on("click", function(event) {
  var id = $(this).data("id");

$.ajax("/devour/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("devoured", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });