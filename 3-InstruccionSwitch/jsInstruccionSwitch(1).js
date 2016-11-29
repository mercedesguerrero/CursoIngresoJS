function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

console.log("mes seleccionado: "+mesDelAño);
switch (mesDelAño) {
    case "Enero":
        alert ("que comiences bien el año!!!");
        break;
	case "Marzo":
        alert ("a clases!!!");
        break;
    case "Julio":
        alert ("se vienen las vacaciones!!!");
        break;
   	case "Diciembre":
        alert ("Felices fiestas!!!");
        break;

    }


}//FIN DE LA FUNCIÓN