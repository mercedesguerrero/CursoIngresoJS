
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


}

