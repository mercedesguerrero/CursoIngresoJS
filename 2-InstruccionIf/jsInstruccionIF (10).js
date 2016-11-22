function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota=Math.floor((Math.random() * 10) + 1);

	miRandom= document.getElementById('FormIngreso').value;


	if(nota>8)
	{
		alert("Excelente, la nota es: "+nota);

	}//if(miRandom>8)

	if(nota<4)
	{
		alert("Vamos, la próxima se puede, la nota es: "+nota);

	}//if(miRandom<4)

	else
	{

		alert("Aprobó, la nota es: "+nota);

	}


}//FIN DE LA FUNCIÓN