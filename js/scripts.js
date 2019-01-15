$(document).ready(function(){

  $("#walrus-showing .clickable, #walrus-hidden .clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
  $("#baby-showing .clickable, #baby-hidden .clickable").click(function(){
    $("#baby-showing").toggle();
    $("#baby-hidden").toggle();
  });

  $("#hide-sealion").click(function(){
    $("#sealion img").fadeOut(1000);
    $("#hide-sealion").toggle();
    $("#show-sealion").toggle();
  });

  $("#show-sealion").click(function(){
    $("#sealion img").fadeIn(1000);
    $("#hide-sealion").toggle();
    $("#show-sealion").toggle();
  });

});
