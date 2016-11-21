function Mostrar()
{
//tomo la edad  
	var laEdad;
	var estadoCivil;


	laEdad= document.getElementById('edad').value;
	estadoCivil= document.getElementById('estadoCivil').value;

	if(laEdad>17 && estadoCivil=="Soltero")
	{
		alert("Es soltero y no es menor");

	}//if(laEdad>18)
	


}//FIN DE LA FUNCIÓN