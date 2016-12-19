
function Iniciar () 
{
	var Nro;
	Nro=parseInt(prompt("Ingrese Nro de ejercicio a probar: "));
	switch(Nro)
	{
		case 1:
			Ejercicio_1();
			break;
		case 2:
			Ejercicio_2();
			break;
		case 4:
			Ejercicio_4();
			break;
		case 8:
			Ejercicio_8();
			break;
		default:
			alert("Te olvidaste de cargar ese ejercicio en el switch")
	}	
}
function Ejercicio_1 () //Ingresar la base primero y después presionar iniciar
{
	alert("Ej 1");
}

function Ejercicio_2 () 
{
	alert("Ej 2");
}

function Ejercicio_4 ()
{
	//Presionar iniciar
	var numero1;
	var numero2;
	var resultado;

	numero1=prompt("Ingrese número");
	numero2=prompt("Ingrese número");

	resultado=parseInt(numero1)+parseInt(numero2);

	if(resultado>0)
	{
		document.write("<br>La suma de los números da un número positivo");
	}

	if(resultado<0)
	{
		document.write("<br>La suma de los números da un número negativo");
	}
	if(resultado==0)
	{
		document.write("<br>La suma de los números da cero");
	}
}

function Ejercicio_8 ()
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
		respuesta=prompt("Ingrese 1 para continuar 0 para finalizar");
		if(respuesta==0)
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