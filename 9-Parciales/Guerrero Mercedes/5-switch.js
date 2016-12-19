//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mes;

	mes=prompt("Ingrese mes del año"); //Inicial con mayúscula

	switch(mes)
	{
		default:
			alert("Extraño Enero y Febrero!!!");
			break;
		case "Enero":
			alert("Veranitoo!!!");
			break;
		case "Febrero":
			alert("Veranitoo!!!");
	}
	
}

