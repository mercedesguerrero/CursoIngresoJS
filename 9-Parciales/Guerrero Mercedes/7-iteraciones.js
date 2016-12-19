//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var notaIngresada;
	var sexo;

	var acumulador=0;
	var minimo;
	var contadorVarones=0;

	for(contador=0;contador<6;contador++) //son 6 alumnos
	{
		notaIngresada=prompt("Ingrese nota");
		notaIngresada=parseInt(notaIngresada);

		while(notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada= prompt("Re-ingrese nota");
		}

		sexo=prompt("Ingrese f ó m");

		while(sexo!="f" && sexo!="m")
		{
			sexo= prompt("Re-ingrese sexo");
		}

		acumulador= notaIngresada+acumulador;

	if(contador==0)
		{
			minimo= notaIngresada;
		}
		
	else
		{
			if(notaIngresada<minimo)
			{
			minimo=notaIngresada;
			}
		}

	if(sexo=="m" && notaIngresada>5)
	{
		contadorVarones++;
	}

	}//FIN DEL for

	alert("El promedio de las notas totales es: "+acumulador/contador);
	alert("La nota más baja es: "+minimo);
	alert("Cantidad de varones que su nota haya sido mayor o igual a 6: "+contadorVarones);
	
}

