
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
	var perimetro;

	base=document.getElementById('ValorUno').value;

	perimetro=(parseInt(base))*4;

	alert("El perímetro del cuadrado es: "+perimetro);
}

function Ejercicio_2 () 
{
	//Presionar iniciar
	var importe;
	var resultado;

	importe=prompt("Ingrese importe");
	resultado=('ValorUno').value;

	var MostrarAumento = parseInt(importe)+parseInt(importe)*0.21;

	document.getElementById('ValorUno').value=MostrarAumento;
}

function Ejercicio_3 ()
{
	//Primero ingresar largo y ancho y luego presionar Iniciar
	var largo;
	var ancho;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	var perimetro = (parseInt(largo))*2+parseInt(parseInt(ancho))*2;
	var rectangulo = (perimetro)*3 //son 3 vueltas de alambre

	alert("La cantidad de alambre es: "+rectangulo);
}

function Ejercicio_4 ()
{
	//Presionar iniciar
	var numero1;
	var numero2;
	var multip;
	var resta;
	var suma;

	numero1=prompt("Ingrese número");
	numero2=prompt("Ingrese número");

	if (numero1==numero2)
	{
		multip=numero1*numero2;
		document.write("<br>Resultado de los números multiplicados: "+multip);
	}

	if (numero1>numero2)
	{
		resta=parseInt(numero1)-parseInt(numero2);
		document.write("<br>Resultado de restar los números: "+resta);
	}

	if (numero1<numero2)
	{
		suma=parseInt(numero1)+parseInt(numero2);
		document.write("<br>Resultado de sumar los números: "+suma);
	}

}

function Ejercicio_5 ()
{
	//Presionar botón iniciar
	var dia;

	dia=prompt("Ingrese día de la semana");

	switch (dia)
	{
		case "Sábado": 
		case "Domingo":
			alert("Es fin de semana!!! :)");
			break;
		case "Lunes":
		case "Martes":
		case "Miércoles":
		case "Jueves":
		case "Viernes":
			alert("A trabajar!!!");

	}

}

function Ejercicio_6 ()
{
	//Pulsar botón iniciar
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
}

function Ejercicio_7 ()
{
	//Pulsar botón iniciar
	var notaIngresada;
	var sexo;

	var acumulador=0;
	var minimo;
	var contadorVarones=0;

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

	if(sexo=="m" && notaIngresada>5)
	{
		contadorVarones++;
	}

	}//FIN DEL for

	alert("El promedio de las notas totales es: "+acumulador/contador);
	alert("La nota más baja es: "+minimo);
	alert("Cantidad de varones que su nota haya sido mayor o igual a 6: "+contadorVarones);

}

function Ejercicio_8 ()
{
	//Pulsar botón iniciar
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

