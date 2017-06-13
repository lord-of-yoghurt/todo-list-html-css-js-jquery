// mark todos complete by clicking
$("ul").on("click", "li", function() { // select parent element, apply click to each child
  $(this).toggleClass("complete");
});

// click trash icon to delete a task
$("ul").on("click", "span", function(e) {
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
    checkTodos();
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

// click the + icon to show input form
$(".fa-plus").click(function() {
  showInputField();
});

const checkTodos = () => {
  // if the input field is not showing
  // AND
  // if there are no todos,
  // show the input field
  if ($("ul").children().length === 0 && $("input[type='text']").css("display") === "none") {
    showInputField();
  }
}

const showInputField = () => {
  $("input[type='text']").fadeToggle();
  $("input[type='text']").focus();
}
