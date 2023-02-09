let profilephoto = document.getElementsByClassName('profilephoto')[0];
let cardname = document.getElementsByClassName('cardname')[0];
let card1 = document.getElementsByClassName('card')[0];
let card2 = document.getElementsByClassName('card')[1];
let card3 = document.getElementsByClassName('card')[2];
let card4 = document.getElementsByClassName('card')[3];
let myBody = document.getElementsByClassName('cuerpo')[0];
let bodySection = document.getElementsByClassName('bodySection')[0];


let ancho = window.innerWidth;
let alto = window.innerHeight;

/*function pruebaAnchoAlto(){	console.log(ancho + "fuera de funcion");	console.log(alto + "fuera de funcion");	ancho = window.innerWidth;	alto = window.innerHeight;}	window.addEventListener("resize", pruebaAnchoAlto);*/

profilephoto.style.top = "40%";
cardname.style.top = "30%";
card1.style.display = "none";
card2.style.display = "none";
card3.style.display = "none";
card4.style.display = "none";

/* ------------------EJECUCION------------------------------------------------------------------------------------------*/

function ejecutar(){
	//setTimeout(pepas,0);
	pepas();
}

/* ------------------INTERVALOS-------------------------------------------------------*/

function intervalos(fun){
	setInterval(fun, 1000);
}

/* ------------------TRANSLACION------------------------------------------------------*/
let x = 0;
function translacion(cosa, posicionx, posiciony){
		cosa.style.transition = "all 0.5s";
		cosa.style.transform = `translate(${posicionx[x]}px , ${posiciony[x]}px)`;

	if(x<37){

		x = x + 1;

	}else{
		x=0
	}


}

/* ----------------------------POSICION X MEDIA DE UN ELEMENTO-------------------------------- */
function mitad (anchoElement){
	mitadIzquierda = (window.innerWidth / 2) - (anchoElement / 2);
	return mitadIzquierda;
}
/* ------------------UBICAR EN LA MITAD CUANDO HAY RESIZE-----------------------------*/

window.addEventListener("resize", mitadCosas);

function objectsDimention(cosa){
	cosa.style.marginLeft = `${mitad(cosa.clientWidth)}px`;
}
function mitadCosas(){
	objectsDimention(profilephoto);
	objectsDimention(cardname);
}

objectsDimention(profilephoto);
objectsDimention(cardname);

bodySection.style.width = `${window.innerWidth}px`;

/* ------------------COORDENADAS ALEATORIAS---------------------------------------------*/

function coordenadasAleatorias(){
	let coordenadas1 = [];
	for(i=0; i<37; i++){
		let randomValue = Math.random();
		let valor = 0;
		if(randomValue<0.5){
			valor = valor + 1.5;
		}else{
			valor = valor - 0.7;
		}
		coordenadas1.push(valor);
		//console.log(coordenadas1);
	}
	return coordenadas1;
}

//let coordenadas1 = coordenadasAleatorias();
//let lascoordenadas1 = [1,2,3,4,5,6,7,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-11,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0];
let lascoordenadas1 = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];

let coordenadas1 = lascoordenadas1.map(function(valor){return valor*1});
//let coordenadas2 = coordenadasAleatorias();
let lascoordenadas2 = [1,2,3,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,2,1,2,3,4,5];//37
let coordenadas2 = lascoordenadas2.map(function(valor){return valor*1});
let coordenadas3 = coordenadasAleatorias();
//let coordenadas3 = [];
let coordenadas4 = coordenadasAleatorias();
//let coordenadas4 = [];

/* ------------------NUMERO ALEATORIO------------------------------------------------ */

function aleatorio(mini, maxi){
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return resultado;
}
/* ------------------COLOR ALEATORIO-------------------------------------------------- */
let letras = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
function colorAleatorio(){
	let N1 = letras[aleatorio(0,15)];
	let N2 = letras[aleatorio(0,15)];
	let N3 = letras[aleatorio(0,15)];
	let N4 = letras[aleatorio(0,15)];
	let N5 = letras[aleatorio(0,15)];
	let N6 = letras[aleatorio(0,15)];
	let N7 = letras[aleatorio(0,6)];
	let N8 = letras[aleatorio(0,6)];
	let color = `#${N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8}`;

	return color;
}

/* ------------------PROPIEDADES BURBUJAS---------------------------------------------- */

function pepitaTopFunction(){
	let miArrayTop = [];
	for(i=0; i<20; i++){
		miArrayTop.push(Math.random());
	}
	return miArrayTop;
}
let pepitaTop = pepitaTopFunction();


function pepitaLeftFunction(){
	let miArrayLeft = [];
	for(i=0; i<20; i++){
		miArrayLeft.push(Math.random());
	}
	return miArrayLeft;
}
let pepitaLeft = pepitaLeftFunction();


let pepasSize = [60, 90, 120];
function pepasSizeFunction(){
	let pepasSizeAleatorio = pepasSize[aleatorio(0,2)];
	return pepasSizeAleatorio;
}

function pepas (){
		let coordenadax = "coordenadas"+ aleatorio(1,4);
		let coordenaday = "coordenadas"+ aleatorio(1,4);
	for(i=0; i<20; i++){
		let pepita = document.createElement("div");
		let pepasSizeValue = pepasSizeFunction();

		bodySection.appendChild(pepita);

		//pepita.style.position = "absolute";
		pepita.style.backgroundColor = `${colorAleatorio()}`;
		pepita.style.boxShadow = `3px 3px 10px 3px #00000022`;
		pepita.style.width = pepasSizeValue+"px";
		pepita.style.height = pepasSizeValue+"px";
		pepita.style.borderRadius = "50%";
		pepita.style.top = `${pepitaTop[i]*alto}px`;
		pepita.style.left = `${pepitaLeft[i]*ancho}px`;
	
		pepita.className = "pepita";

		pepita.style.position = "fixed";

		function translacionPepas(){
			translacion(pepita, coordenadas1, coordenadas1);
		}
					//intervalos(translacionPepas);
		//translacionPepas();
		//let translacionPepas = translacion(pepita, coordenadas1, coordenadas1);
		//setInterval(translacionPepas, 1000);
	}

}
let pepita1 = document.getElementsByClassName('pepita')[0];
let pepita2 = document.getElementsByClassName('pepita')[1];
let pepita3 = document.getElementsByClassName('pepita')[2];
let pepita4 = document.getElementsByClassName('pepita')[3];
let pepita5 = document.getElementsByClassName('pepita')[4];
let pepita6 = document.getElementsByClassName('pepita')[5];
let pepita7 = document.getElementsByClassName('pepita')[6];
let pepita8 = document.getElementsByClassName('pepita')[7];
let pepita9 = document.getElementsByClassName('pepita')[8];
let pepita10 = document.getElementsByClassName('pepita')[9];
let pepita11 = document.getElementsByClassName('pepita')[10];
let pepita12 = document.getElementsByClassName('pepita')[11];
let pepita13 = document.getElementsByClassName('pepita')[12];
let pepita14 = document.getElementsByClassName('pepita')[13];
let pepita15 = document.getElementsByClassName('pepita')[14];
let pepita16 = document.getElementsByClassName('pepita')[15];
let pepita17 = document.getElementsByClassName('pepita')[16];
let pepita18 = document.getElementsByClassName('pepita')[17];
let pepita19 = document.getElementsByClassName('pepita')[18];
let pepita20 = document.getElementsByClassName('pepita')[19];
intervalos(posicionPepita);
function posicionPepita(){
	translacion(pepita20, coordenadas1, coordenadas1);
translacion(pepita1, coordenadas1, coordenadas1);
translacion(pepita2, coordenadas1, coordenadas1);
translacion(pepita3, coordenadas1, coordenadas1);
translacion(pepita4, coordenadas1, coordenadas1);
translacion(pepita5, coordenadas1, coordenadas1);
translacion(pepita6, coordenadas1, coordenadas1);
translacion(pepita7, coordenadas1, coordenadas1);
translacion(pepita8, coordenadas1, coordenadas1);
translacion(pepita9, coordenadas1, coordenadas1);
translacion(pepita10, coordenadas1, coordenadas1);
translacion(pepita11, coordenadas1, coordenadas1);
translacion(pepita12, coordenadas1, coordenadas1);
translacion(pepita13, coordenadas1, coordenadas1);
translacion(pepita14, coordenadas1, coordenadas1);
translacion(pepita15, coordenadas1, coordenadas1);
translacion(pepita16, coordenadas1, coordenadas1);
translacion(pepita17, coordenadas1, coordenadas1);
translacion(pepita18, coordenadas1, coordenadas1);
translacion(pepita19, coordenadas1, coordenadas1);

}


/* ------------------MOVIMIENTO CUADROS----------------------------------------------------*/

intervalos(posicionFoto);
function posicionFoto(){
	translacion(profilephoto, coordenadas1, coordenadas1);

	/*translacion(cardname, coordenadas3, coordenadas4);
	translacion(card1, coordenadas2, coordenadas1);
	translacion(card2, coordenadas3, coordenadas2);
	translacion(card3, coordenadas2, coordenadas3);
	translacion(card4, coordenadas4, coordenadas1);*/
}

/* ------------------------------------------------------------------------------------------- */
let mainSection = document.getElementsByClassName('mainSection')[0];
let anchoMain = myBody.clientWidth;
let altoMain = myBody.clientHeight;
let alto2 = alto * 2;
mainSection.style.height = `${alto2}px`;

/*----------------------------------------------------------------------------------------------*/