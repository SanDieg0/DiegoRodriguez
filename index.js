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

/* -----------------EJECUCION-------------------------*/

function ejecutar(){
	setTimeout(intervalFoto, 5000);
	setTimeout(pepas,5000);
}

/* -----------------UBICAR EN LA MITAD CUANDO HAY RESIZE-------------------------*/

window.addEventListener("resize", objectsDimention);

function objectsDimention(){
	profilephoto.style.marginLeft = `${mitad(profilephoto.clientWidth)}px`;
	//bodySection.style.width = `${window.innerWidth}px`;
	cardname.style.marginLeft = `${mitad(cardname.clientWidth)}px`;
}

	profilephoto.style.marginLeft = `${mitad(profilephoto.clientWidth)}px`;
	bodySection.style.width = `${window.innerWidth}px`;
	cardname.style.marginLeft = `${mitad(cardname.clientWidth)}px`;

/* ----------------COORDENADAS ALEATORIAS------------------------*/

function coordenadasAleatorias(){
	let coordenadas1 = [];
	for(i=0; i<=2000; i++){
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

let coordenadas1 = coordenadasAleatorias();
let coordenadas2 = coordenadasAleatorias();
let coordenadas3 = coordenadasAleatorias();
let coordenadas4 = coordenadasAleatorias();

/* ---------------------NUMERO ALEATORIO--------------------------- */

function aleatorio(mini, maxi){
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return resultado;
}
/* ---------------------COLOR ALEATORIO--------------------------- */
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
	console.log(color);
	return color;
}

/* ---------------------PROPIEDADES BURBUJAS--------------------------- */

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


function pepas (){
		let coordenadax = "coordenadas"+ aleatorio(1,4);
		let coordenaday = "coordenadas"+ aleatorio(1,4);
	for(i=0; i<20; i++){
		let pepita = document.createElement("div");
		bodySection.appendChild(pepita);

		//pepita.style.position = "absolute";
		pepita.style.backgroundColor = `${colorAleatorio()}`;
		pepita.style.boxShadow = `3px 3px 10px 3px #00000022`;
		pepita.style.width = aleatorio(90,90)+"px";
		pepita.style.height = aleatorio(90,90)+"px";
		pepita.style.borderRadius = "50%";
		pepita.style.top = `${pepitaTop[i]*alto}px`;
		pepita.style.left = `${pepitaLeft[i]*ancho}px`;

		pepita.style.position = "fixed";

		pepita.style.transition = "all 0.5s";

		intervalPepas();

		function intervalPepas(){

			z = setInterval(posicionPepas, 150);
		}

		function posicionPepas(){
			pepita.style.transform = `translate(${coordenadas4[x]}px , ${coordenadas1[x]}px)`;
			//pepita.style.transform = translateY(`${coordenadas4[x]}px`);
			if(x<=2000){
				x = x + 1;
				return x;
			}else{
				x=0
			}
		}
	}
}


/* ----------------MOVIMIENTO CUADROS------------------------*/

let x = 0;
let y;
let z;

function intervalFoto(){
	y = setInterval(posicionFoto, 150);
}

function posicionFoto(){

	//console.log(x);
	
	if(x<=2000){
		//x = x + 1;

		profilephoto.style.transition = "all 0.5s";
		profilephoto.style.transform = `translate(${coordenadas1[x]}px , ${coordenadas2[x]}px)`;

		//cardname.style.transform = `translate(${coordenadas3[x]}px , ${coordenadas4[x]}px)`;
		card1.style.transform = `translate(${coordenadas2[x]}px , ${coordenadas1[x]}px)`;
		card2.style.transform = `translate(${coordenadas3[x]}px , ${coordenadas2[x]}px)`;
		card3.style.transform = `translate(${coordenadas2[x]}px , ${coordenadas3[x]}px)`;
		card4.style.transform = `translate(${coordenadas4[x]}px , ${coordenadas1[x]}px)`;

	}else{
		x=0
	}
}

/* ------------------------------------------------------------------------------------------- */
let mainSection = document.getElementsByClassName('mainSection')[0];
let anchoMain = myBody.clientWidth;
let altoMain = myBody.clientHeight;
let alto2 = alto * 2;
mainSection.style.height = `${alto2}px`;

/* ----------------------------POSICION X MEDIA DE UN ELEMENTO-------------------------------- */
function mitad (anchoElement){
	mitadIzquierda = (window.innerWidth / 2) - (anchoElement / 2);
	return mitadIzquierda;
}


/*----------------------------------------------------------------------------------------------*/