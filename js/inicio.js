hora();
fecha();


function hora()
/*formato   hora:min:segundos*/

{
    var f=new Date();
 
    document.querySelector("#ph").innerHTML="Hora: "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds();
    setTimeout("hora()",1000);
}


function fecha()
/* formato dia/mes/año*/
{
    var f=new Date();

    document.querySelector("#pf").innerHTML="Fecha: "+f.getDate()+"/"+(f.getMonth()+1)+"/"+f.getFullYear();

}