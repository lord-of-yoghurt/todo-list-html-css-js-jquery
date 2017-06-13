// mark todos complete by clicking
$("ul").on("click", "li", function() { // select parent element, apply click to each child
  $(this).toggleClass("complete");
});

// click X to delete a task
$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
  e.stopPropagation();
});

// hit Enter while in the input to add task
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    // grab user input
    let task = $(this).val();
    // create new li and append to ul
    $("ul.list").append(`<li><span><i class="fa fa-trash"></i></span> ${task}</li>`);
    $(this).val("");
  }
});
