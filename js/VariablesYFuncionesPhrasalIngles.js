var unasPalabras = [];
var cantidadPalabras = 0;
var palabra;
var elnumeroRandom;
var elnumeroRandomOtros;
var seleccionadoNativo = 0; //0 nativo ; 1 Nuevo
var cantidadRadioButton = 5;
	
$(function () {
	Load();
});	

function Load()
{
	SeteoVariablesGlobales();
	document.getElementById("rbtn1").checked = 1;
	PracticarUnoNuevo();
}
function SeteoVariablesGlobales()
{
	//document.getElementById("lblResultado").style.visibility = "hidden";
	//$("#lblEstado").text("0/1");
palabra = { PalabraNativa:"	Go on	"	, PalabraTraducida:	"	Continuar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Carry out	"	, PalabraTraducida:	"	Llevar a cabo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Set up	"	, PalabraTraducida:	"	Preparar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Pick up	"	, PalabraTraducida:	"	Recoger	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go back	"	, PalabraTraducida:	"	Volver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come back	"	, PalabraTraducida:	"	Volver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go out	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Point out	"	, PalabraTraducida:	"	Señalar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Find out	"	, PalabraTraducida:	"	Averiguar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come up	"	, PalabraTraducida:	"	Inventar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Make up	"	, PalabraTraducida:	"	Maquillar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take over	"	, PalabraTraducida:	"	Retomar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come out	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come in	"	, PalabraTraducida:	"	Entrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Work out	"	, PalabraTraducida:	"	Trabajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Set out	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take up	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get back	"	, PalabraTraducida:	"	Volver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Sit down	"	, PalabraTraducida:	"	Sentarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn out	"	, PalabraTraducida:	"	Girar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take on	"	, PalabraTraducida:	"	Seguir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Give up	"	, PalabraTraducida:	"	Renunciar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get up	"	, PalabraTraducida:	"	Levantarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Look up	"	, PalabraTraducida:	"	Mirar hacia arriba	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Carry on	"	, PalabraTraducida:	"	Continuar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go up	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get out	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take out	"	, PalabraTraducida:	"	Sacar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Put down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Put up	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn up	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get on	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Bring up	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Bring in	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Look back	"	, PalabraTraducida:	"	Mirar atrás	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Look down	"	, PalabraTraducida:	"	Mirar hacia abajo	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Bring back	"	, PalabraTraducida:	"	Retroceder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Break down	"	, PalabraTraducida:	"	Derribar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take off	"	, PalabraTraducida:	"	Despegar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go off	"	, PalabraTraducida:	"	Despegar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Bring about	"	, PalabraTraducida:	"	Acercar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go in	"	, PalabraTraducida:	"	Entrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Set off	"	, PalabraTraducida:	"	Poner en marcha	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Put out	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Look out	"	, PalabraTraducida:	"	Mirar hacia fuera	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take back	"	, PalabraTraducida:	"	Retomar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Hold up	"	, PalabraTraducida:	"	Levantar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Hold out	"	, PalabraTraducida:	"	Aguantar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Put on	"	, PalabraTraducida:	"	Ponerse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Bring out	"	, PalabraTraducida:	"	Sacar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Move on	"	, PalabraTraducida:	"	Seguir adelante	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn back	"	, PalabraTraducida:	"	Retroceder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Put back	"	, PalabraTraducida:	"	Retroceder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go round	"	, PalabraTraducida:	"	Dar la vuelta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Break up	"	, PalabraTraducida:	"	Romper	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come along	"	, PalabraTraducida:	"	Volver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Sit up	"	, PalabraTraducida:	"	Sentarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn round	"	, PalabraTraducida:	"	Dar la vuelta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get in	"	, PalabraTraducida:	"	Entra	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come round	"	, PalabraTraducida:	"	Da la vuelta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Make out	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get off	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Bring down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come over	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Break out	"	, PalabraTraducida:	"	Romper	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go over	"	, PalabraTraducida:	"	Pasar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn over	"	, PalabraTraducida:	"	Dar la vuelta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go through	"	, PalabraTraducida:	"	Atravesar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Hold on	"	, PalabraTraducida:	"	Aguantar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Pick out	"	, PalabraTraducida:	"	Recoger	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Sit back	"	, PalabraTraducida:	"	Volver a sentarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Hold back	"	, PalabraTraducida:	"	Retener	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Put in	"	, PalabraTraducida:	"	Meter	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Move in	"	, PalabraTraducida:	"	Entrar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Look around	"	, PalabraTraducida:	"	Mirar alrededor	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Put off	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come about	"	, PalabraTraducida:	"	Venir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Go along	"	, PalabraTraducida:	"	Seguir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Look round	"	, PalabraTraducida:	"	Mirar alrededor	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Set about	"	, PalabraTraducida:	"	Poner en marcha	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn off	"	, PalabraTraducida:	"	Desviarse	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Give in	"	, PalabraTraducida:	"	Ceder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Move out	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come through	"	, PalabraTraducida:	"	Pasar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Move back	"	, PalabraTraducida:	"	Retroceder	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Break off	"	, PalabraTraducida:	"	Romper	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get through	"	, PalabraTraducida:	"	Atravesar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Give out	"	, PalabraTraducida:	"	Abandonar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Come off	"	, PalabraTraducida:	"	Salir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Take in	"	, PalabraTraducida:	"	Recoger	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Give back	"	, PalabraTraducida:	"	Devolver	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Set down	"	, PalabraTraducida:	"	Bajar	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Move up	"	, PalabraTraducida:	"	Subir	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Turn around	"	, PalabraTraducida:	"	Dar la vuelta	"	}; unasPalabras.push(palabra);
palabra = { PalabraNativa:"	Get in	"	, PalabraTraducida:	"	Entrar	"	}; unasPalabras.push(palabra);

			
	cantidadPalabras = unasPalabras.length;
}
