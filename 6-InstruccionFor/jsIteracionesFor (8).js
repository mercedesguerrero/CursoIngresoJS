function Mostrar()
{
	/*var numero;
	var contadorDivisores=0;
	numero=prompt("Ingrese número");
	numero=parseInt(numero);
	for(var indice=2;indice<numero ;indice++)
	{
		if(numero%indice==0)
		{
			contadorDivisores++;
		}
	}

	if(contadorDivisores==0)
	{
	document.write("<br>El número es primo");
	}
	else
	{
	document.write("<br>El número no es primo");
	}
	*/

	//EJERCICIO 6 DEL PARCIAL!

	/*
	var numeroIngresado;

	var minimo;
	var maximo;

	for(contador=0;contador<24;contador++)
	{

		numeroIngresado=prompt("Ingrese número");
		numeroIngresado=parseInt(numeroIngresado);
	
		while(numeroIngresado<0)	
		{
			numeroIngresado=prompt("Re-Ingrese número");
			numeroIngresado=parseInt(numeroIngresado);
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

	}//fin del for

	console.log("Mayor importe de venta: "+ maximo);
	console.log("Menor importe de venta: "+ minimo);
	*/

	var notaIngresada;
	var sexo;

	var acumulador=0;
	var minimo;

	for(contador=0;contador<5;contador++)
	{
		notaIngresada=prompt("Ingrese nota");
		notaIngresada=parseInt(notaIngresada);

		while(notaIngresada<0 && notaIngresada>10)
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

	}//FIN DEL for

	alert("El promedio de las notas totales es: "+acumulador/contador);
	alert("La nota más baja es: "+minimo);

}//FIN DE LA FUNCIÓN