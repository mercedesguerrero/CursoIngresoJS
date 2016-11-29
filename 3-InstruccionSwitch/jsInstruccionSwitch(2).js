function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

console.log("mes seleccionado: "+mesDelAño);
switch (mesDelAño) {
	default:
        		alert("Ya pasamos el frio, ahora calor!!!");
        		break;
    case "Enero":
    case "Febrero":    
   	case "Marzo":
   	case "Abril":
   	case "Mayo":
   	case "Junio":
        alert ("Falta para el invierno");
        break;

   	case "Julio":
   	case "Agosto":
   		alert("Abrigate que hace frío!")

   		//el último no necesita break
   	}



}//FIN DE LA FUNCIÓN