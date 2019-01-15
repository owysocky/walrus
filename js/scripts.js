$(document).ready(function(){

  $("#walrus-showing .clickable, #walrus-hidden .clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $("#baby-showing .clickable, #baby-hidden .clickable").click(function(){
    $("#baby-showing").toggle();
    $("#baby-hidden").toggle();
  });

});
