//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;

	var minimo;
	var maximo;

	for(contador=0;contador<7;contador++)
	{

		importe=prompt("Ingrese número");
		importe=parseInt(importe);
	
		while(importe<0)	
		{
			importe=prompt("Re-Ingrese número");
			importe=parseInt(importe);
		}
		if(contador==0)
		{
			maximo= importe;
			minimo= importe;
		}

		else
		{
			if(importe>maximo)
			{
				maximo= importe;
			}
			if(importe<minimo)
			{
				minimo=importe;
			}
		}

	}//fin del for

	console.log("Mayor importe de venta: "+ maximo);
	console.log("Menor importe de venta: "+ minimo);
	
}

