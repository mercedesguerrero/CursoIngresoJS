//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multip;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese número");
	numeroDos=prompt("Ingrese número");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		multip=numeroUno*numeroDos;
		document.write("<br>Resultado de los números multiplicados: "+multip);
	}

	if(numeroUno>numeroDos)
	{
		resta=parseInt(numeroUno)-parseInt(numeroDos);
		document.write("<br>Resultado de restar los números: "+resta);
	}

	if(numeroUno<numeroDos)
	{
		suma=parseInt(numeroUno)+parseInt(numeroDos);
		document.write("<br>Resultado de sumar los números: "+suma);
	}

}

