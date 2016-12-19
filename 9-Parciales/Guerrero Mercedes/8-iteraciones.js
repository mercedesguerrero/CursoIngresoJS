//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroIngresado;
	var respuesta;
	var acumulador=0;
	var contadorPares=0;
	var minimo;
	var maximo;

	for(contador=0; ;contador++)
	{
		numeroIngresado=prompt("Ingrese número positivo");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+parseInt(numeroIngresado);

		while (numeroIngresado<0)
		{
			numeroIngresado=prompt("Re-ingrese número positivo");
			numeroIngresado=parseInt(numeroIngresado);
		}
		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}

		if(contador==0)
		{
			maximo= numeroIngresado;
			minimo= numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo= numeroIngresado;
			}
			if(numeroIngresado<minimo)
			{
				minimo=numeroIngresado;
			}
		}
		respuesta=prompt("Presione Aceptar para continuar o ingrese N para finalizar");
		if(respuesta=="N")
		{
			break;
		}
		contador++;
	

	}//Fin del for

	document.write("<br>Cantidad de números pares: "+contadorPares);
	document.write("<br>Promedio de todos los números ingresados: "+acumulador/contador);
	document.write("<br>Suma de todos los números ingresados: "+acumulador);
	document.write("<br>Número máximo ingresado: "+maximo);
	document.write("<br>Número mínimo ingresado: "+minimo);
	
}

