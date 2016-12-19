//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var base;
	var perimetro;

	base=document.getElementById('lado').value;

	perimetro=(parseInt(base))*3;

	alert("El perímetro del triángulo es: "+perimetro);
	
}

