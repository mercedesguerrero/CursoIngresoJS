function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

document.getElementById('Sexo').value=sexo;

while(sexo!="f" && sexo!="m")//va el error
	{
	sexo = prompt("Re-ingrese el sexo");
	}
	alert("Bienvenido");
}//FIN DE LA FUNCIÓN