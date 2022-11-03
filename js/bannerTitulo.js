cambiocolor();
function cambiocolor()

/* formato rgb(a, b, c) */
{
    let a=Math.floor(Math.random()*256); /* 25 */
    let b=Math.floor(Math.random()*256); /* 17 */
    let c=Math.floor(Math.random()*256); /* 90 */

    document.getElementById("h1cabTitle").style.color="rgb("+a+","+b+","+c+")";/*rgb(25,17,90)*/
    setTimeout("cambiocolor()",800);
}
function cambio()
  {
      document.querySelector("#h1cab").style.opacity="0";
      document.querySelector("#h1cab").style.transition="all 2s";
      setTimeout("carrusel()",2000);
  }

var  i=0
function carrusel()
 {
     i++;
     if(i>4) i=1;
     document.querySelector("#h1cab").setAttribute("src","../IMAGENES/BANNER"+i+".jpeg");

     document.querySelector("#h1cab").style.opacity="1"
     document.querySelector("#h1cab").style.transition="all 1s";
     setTimeout("cambio()",1500);
 }
 document.body.setAttribute("onload","carrusel()","cambio");




