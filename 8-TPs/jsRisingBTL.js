/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var SueldoBruto;
 	var legajo;

 	edad=prompt("Ingrese edad entre 18 y 90");

 	while(edad>90 || edad<18)
 	{
 		edad=prompt("Re-ingrese edad entre 18 y 90");
 		edad=parseInt(edad);
 	}
 	//la edad está correcta
 	document.getElementById('Edad').value=edad;

 	sexo=prompt("Ingrese f ó m");

 	while(sexo!="f" && sexo!="m")
 	{
 		sexo=prompt("Reingrese f ó m");
 	}
 	//el sexo está correcto
 	document.getElementById('Sexo').value=sexo;

 	estadoCivil=prompt("Ingrese estado civil, 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo");

 	while(estadoCivil!="1" && estadoCivil!="2" && estadoCivil!="3" && estadoCivil!="4")
 	// si ponemos (estadoCivil<1 || estadoCivil>4) hay que poner abajo del prompt:
 	// estadoCivil=parseInt(EstadoCivil);
 	{
 		estadoCivil=prompt("Re-ingrese estado civil, 1-para soltero, 2-para casado, 3-para divorciado y 4-para viudo");
 	}
 	//el estado civil está correcto
 		switch(estadoCivil)
 			{
 				case "1":
 					document.getElementById('EstadoCivil').value="Soltero";
 				break;
 				case "2":
 					document.getElementById('EstadoCivil').value="Casado";
 				break;
 				case "3":
 					document.getElementById('EstadoCivil').value="Divorciado";
 				break;
 				case "4":
 					document.getElementById('EstadoCivil').value="Viudo";
 				break;
 			}
 		//* Otra manera:
 		// switch(estadoCivil)
 		// case "1":
 		//	estadoCivil="soltero";
 		// break;

 	SueldoBruto=prompt("Ingrese sueldo bruto");
 	SueldoBruto=parseInt(SueldoBruto);

 	while(SueldoBruto<8000)
 	{
 		SueldoBruto=prompt("Re-ingrese sueldo bruto");
 		SueldoBruto=parseInt(SueldoBruto);
 	}
 	document.getElementById('Sueldo').value=SueldoBruto;

 	legajo=prompt("Ingrese legajo, numérico de 4 cifras, sin ceros a la izquierda")

 	while(legajo<10000 && legajo>999)
 	{
 		legajo=
 	}





}
