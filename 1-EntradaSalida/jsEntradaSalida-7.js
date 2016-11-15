/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	var suma = parseInt(numeroUno)+parseInt(numeroDos);

	alert("La suma es: "+suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	var resta = (numeroUno)-(numeroDos);

	alert("La resta es: "+resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	var multiplicar = (numeroUno)*(numeroDos);

	alert("La multiplicación es: "+multiplicar);
}

function dividir()
{
	var numeroUno;
	var numeroDos;

	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;

	var dividir = (numeroUno)/(numeroDos);

	alert("La división es: "+dividir);
}

