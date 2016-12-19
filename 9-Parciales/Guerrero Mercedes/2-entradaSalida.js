//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var resultado;

	importe=prompt("Ingrese importe");
	resultado=('importe').value;

	var MostrarAumento = parseInt(importe)+parseInt(importe)*0.21;

	document.getElementById('importe').value=MostrarAumento;
	
}

