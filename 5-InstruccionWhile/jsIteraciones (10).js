function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivo=0;
	var negativo=0;
	var numeroIngresado;
	
	var respuesta="si";

	document.write("<h1>Bienvenidos</h1>");

	while(respuesta!="no")
	{
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado= parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			negativo= numeroIngresado++numeroIngresado;
			document.write("La suma de los números negativos ingresados es: "+negativo+"<br>");
		}
	
	}

	document.write("<p>Terminó</p>");


}//FIN DE LA FUNCIÓN