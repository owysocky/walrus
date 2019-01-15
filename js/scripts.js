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
    $("#sealion img").slideUp(1000);
  });

  $("#show-sealion").click(function(){
    $("#sealion img").slideDown(1000);
  });

  $("#hide-sealion, #show-sealion").click(function(){
    $("#hide-sealion").toggle();
    $("#show-sealion").toggle();
  });

  $("#hide-seal, #show-seal").click(function(){
    $("#hide-seal").toggle();
    $("#show-seal").toggle();
    $("#seal img").slideToggle(1000);
  });

});
