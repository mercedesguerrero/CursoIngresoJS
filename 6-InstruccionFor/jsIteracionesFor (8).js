function Mostrar()
{
	var notaIngresada;
	var sexo;

	var acumulador=0;
	var minimo;

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

	}//FIN DEL for

	alert("El promedio de las notas totales es: "+acumulador/contador);
	alert("La nota más baja es: "+minimo);

}//FIN DE LA FUNCIÓN