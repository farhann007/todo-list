// check a tods
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});
// clicking x and deleting a certain list item

$("ul").on("click","span ",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation;
});

// writing tasks to the todo list and clearing input area
$("input[type='text']").keypress(function(event){
    if(event.which ===13){
      var text=  $(this).val();
        $(this).val("  ");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + text + "</li>");
    }
});
$(".fas, .fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});