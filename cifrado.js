
function pedirPalabra(){
	prompt("introducir palabra");
}


var palabra = parseStr(pedirPalabra());
document.getElementById("titulo").innerHTML = palabra;
