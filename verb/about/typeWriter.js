var i = 0;
var txt = 'Uhh heres a picture of me..';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

  }

}
function loadPic()
{
    $("#img").fadeIn("slow");
}
function loadtext()
{
    $("#text").fadeIn("slow");
}
setTimeout(typeWriter, 300);
setTimeout(loadPic, 3000);
setTimeout(loadtext, 4000);
