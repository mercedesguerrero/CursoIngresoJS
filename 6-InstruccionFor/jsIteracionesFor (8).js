function Mostrar()
{
	var numero;
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




}//FIN DE LA FUNCIÓN