function Mostrar()
{
//tomo la edad  
	var laEdad;
	laEdad= document.getElementById('edad').value;
	if(laEdad>17)
	{
		alert("Usted es adulto");

	}//if(laEdad>17)

	//if(laEdad<13)
	//{
		//alert("Usted es un niño");

	//}
	//if(laEdad>12 && laEdad<18)
	//{
		//alert("Usted es adolescente");

	//}

	//opción mejor para no consultar tantas veces al procesador:
	else
	{
		if(laEdad<13)
		{
			alert("Usted es un niño");

		}//if(laEdad<13)
		else
		{
			alert("Usted es adolescente");

		}



	}



}//FIN DE LA FUNCIÓN