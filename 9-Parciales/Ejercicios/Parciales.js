/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function inicial () 
{
	var Nro;
	Nro=parseInt(prompt("ingrese Nro de ejercicio a probar: "));
	switch(Nro)
	{
		case 1:
			Ejercicio_1();
			break;
		case 2:
			Ejercicio_2();
			break;
		default:
			alert("Te olvidaste de cargar ese ejercicio en el switch")
	}	
}

function Ejercicio_1 () 
{
	var base;
	var perimetro;

	base=document.getElementById('PrecioUno').value;

	perimetro=(parseInt(base))*4;

	alert("El perímetro del cuadrado es: "+perimetro);
}

function Ejercicio_2 () 
{
	alert("ejer 2");
}