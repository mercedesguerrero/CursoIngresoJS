
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
		case 3:
			Ejercicio_3();
			break;
		case 4:
			Ejercicio_4();
			break;
		case 5:
			Ejercicio_5();
			break;
		case 6:
			Ejercicio_6();
			break;
		case 7:
			Ejercicio_7();
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
	var base;
	var superficie;

	base=document.getElementById('ValorUno').value;

	superficie=(parseInt(base))*(parseInt(base));

	alert("La superficie del cuadrado es: "+superficie);
}

function Ejercicio_2 () 
{
	//Presionar iniciar
	var importe;
	var resultado;

	importe=prompt("Ingrese importe");
	resultado=('ValorUno').value;

	var MostrarAumento = parseInt(importe)+parseInt(importe)*0.25;

	document.getElementById('ValorUno').value=MostrarAumento;
}

function Ejercicio_3 ()
{
	//Ingresar los precios y luego presionar Iniciar
	var precioUno;
	var precioDos;
	var precioTres;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	var suma=parseInt(precioUno)+parseInt(precioDos)+parseInt(precioTres);
	var promedio=suma/3;

	alert("La suma de los precios da: "+suma);
	alert("El promedio de los precios da: "+promedio);

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

function Ejercicio_5 ()
{
	var mes;

	mes=prompt("Ingrese mes del año");

	switch(mes)
	{
		default:
			alert("No es Enero ni Diciembre");
			break;
		case "Diciembre":
			alert("Se vienen las fiestas!!!");
			break;
		case "Enero":
			alert("Comienza el año!!!");
	}
}

function Ejercicio_6 ()
{
	var peso;
	var minimo;
	var maximo;

	for(contador=0;contador<8;contador++)
	{
		peso=prompt("Ingrese peso del contenedor en kilos");
		peso=parseInt(peso);

		while(peso<0)
		{
			peso=prompt("Re-ingrese peso del contenedor en kilos");
			peso=parseInt(peso);
		}

		if(contador==0)
		{
			maximo= peso;
			minimo= peso;
		}

		else
		{
			if(peso>maximo)
			{
				maximo= peso;
			}
			if(peso<minimo)
			{
				minimo=peso;
			}
		}
	}//Fin del for

	console.log("El contenedor más pesado fue: "+maximo);
	console.log("El contenedor menos pesado fue: "+minimo);
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