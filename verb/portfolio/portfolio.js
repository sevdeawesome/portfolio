
/*
Describing what we do herro



*/

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });

  $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });

  $("#flip3").click(function(){
    $("#panel3").slideToggle("slow");
  });


  $("#flip4").click(function(){
    $("#panel4").slideToggle("slow");
  });
  $("#flip5").click(function(){
    $("#panel5").slideToggle("slow");
  });
  $("#flip6").click(function(){
    $("#panel6").slideToggle("slow");
  });
  $("#flip7").click(function(){
    $("#panel7").slideToggle("slow");
  });
});



var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

for(var i = 0; i < (screen.width / 40); i++)
{
  document.write("<span class=\"matrix\" style=\"");
  document.write("animation-duration: " + (Math.random() + 3) + "s;");
  document.write("font-size: " + (Math.random() * 20 + 20 )+ "px;");
  document.write("animation-delay: " + Math.random() * 5 + "s;");
  document.write("left: " + (Math.random() * 150  - 50) + "%;");

  document.write( " \">asdasdasdsaadszdasdasdasdjkasjbhasdadsa</span>");
}





/*

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}






*/
