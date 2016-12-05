function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var minimo;
	var maximo;
	var respuesta='si';
	var numeroIngresado;


	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese número");
		numeroIngresado= parseInt(numeroIngresado);

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
	
		contador++;
		respuesta= prompt("Ingrese no para salir");
	}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN