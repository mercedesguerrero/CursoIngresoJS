function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
console.log("mes seleccionado: "+mesDelAño);
switch (mesDelAño) {
	default:
        alert("Este mes tiene 30 días");
        break;
    case "Febrero":
    	alert("Este mes tiene 28 días");
    	break;
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
    	alert("Este mes tiene 31 días");
	
	
    }



}//FIN DE LA FUNCIÓN