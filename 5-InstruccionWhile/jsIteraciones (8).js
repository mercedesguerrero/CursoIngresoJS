function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numeroIngresado;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado= prompt("Ingrese número")

		contador++;
		numeroIngresado= parseInt(numeroIngresado);

		if(numeroIngresado<0)
			{
				negativo= negativo*numeroIngresado;
			}
		else
			{
				positivo= positivo+numeroIngresado;
			}
			respuesta=prompt("Ingrese si para continuar");

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN