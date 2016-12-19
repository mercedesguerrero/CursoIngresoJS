//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;

	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;

	var perimetro = (parseInt(largo))*2+parseInt(parseInt(ancho))*2;
	var rectangulo = (perimetro)*6 //son 6 vueltas de alambre

	alert("La cantidad de alambre es: "+rectangulo);
	
}

