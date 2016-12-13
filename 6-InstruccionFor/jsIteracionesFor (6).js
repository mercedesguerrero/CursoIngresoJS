function Mostrar()
{
	/*
	var limite;
	var contadorPares=0;
	limite=prompt("Ingrese límite");
	limite=parseInt(limite);
	for(var indice=1;indice<limite ;indice++)
	{
		if(indice%2==0)
		{
			contadorPares++;
		}
	}

	document.write(contadorPares);
	*/

	var numero;

	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contador10=0;

	var total;
	var porcentaje;

	var contadorPares=0;
	var contadorImpares=0;

	var totalPares=0;
	var totalImpares=0;

	var encontrado=0;
	var tirada;

	for(contador=0;contador<10000;contador++)
	{

	numero=Math.floor((Math.random() * 10) + 1);

	//console.log("Número random: "+numero);
	

	switch (numero) {
		case 1:
			contador1 ++;
			break;
		case 2:
			contador2 ++;
			break;
		case 3:
			contador3 ++;
			break;
		case 4:
			contador4 ++;
			break;
		case 5:
			total=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
			porcentaje= contador5/total*100
			if (porcentaje< 7) 
			{
				contador5 ++;
			}
			else
			{
				contador--;
				continue; //es parecido al break, vuelve a evaluar la condición previa
			}
			break;
		case 6:
			contador6 ++;
			break;
		case 7:
			contador7 ++;
			break;
		case 8:
			contador8 ++;
			break;
		case 9:
			contador9 ++;
			break;
		case 10:
			contador10 ++;
			break;
		}

	if(numero%2==0)
	{
		contadorPares++;
		totalPares=totalPares+numero;
	}
	else
	{
		contadorImpares++;
		totalImpares=totalImpares+numero;
	}

	if(encontrado==0)
	{
		if(contador1>0&& contador2>0&& contador3>0&& contador4>0&& contador5>0&& contador6>0&& contador7>0&& contador8>0&& contador9>0&& contador10>0)
		{
			encontrado=1;
			tirada= contador;
		}
	}
	}//fin del for

	total=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;
	console.log("El total es: "+ total);
	console.log("% de pares: "+contadorPares/total*100);
	console.log("% de impares: "+contadorImpares/total*100);
	console.log("Suma de todos los pares: "+totalPares);
	console.log("Suma de todos los impares: "+totalImpares);
	console.log("Salieron todos los números en la tirada: "+tirada);
	console.log("En número 1 salió: "+contador1+ "veces."+ (contador1/total*100)+ "%");
	console.log("En número 2 salió: "+contador2+ "veces."+ (contador2/total*100)+ "%");
	console.log("En número 3 salió: "+contador3+ "veces."+ (contador3/total*100)+ "%");
	console.log("En número 4 salió: "+contador4+ "veces."+ (contador4/total*100)+ "%");
	console.log("En número 5 salió: "+contador5+ "veces."+ (contador5/total*100)+ "%");
	console.log("En número 6 salió: "+contador6+ "veces."+ (contador6/total*100)+ "%");
	console.log("En número 7 salió: "+contador7+ "veces."+ (contador7/total*100)+ "%");
	console.log("En número 8 salió: "+contador8+ "veces."+ (contador8/total*100)+ "%");
	console.log("En número 9 salió: "+contador9+ "veces."+ (contador9/total*100)+ "%");
	console.log("En número 10 salió: "+contador10+ "veces."+ (contador10/total*100)+ "%");


}//FIN DE LA FUNCIÓN