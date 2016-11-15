/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	var suma = parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);

	alert("La suma es: "+suma);

}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	var promedio = (parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres))/3;

	alert("El promedio es: "+promedio);
	
}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	var PrecioFinal = parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres)+parseInt(parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres))*0.21;

	alert("El precio final es: "+PrecioFinal);
}