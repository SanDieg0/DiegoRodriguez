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

/* -------------------------------------------------------------*/

window.addEventListener("resize", objectsDimention);
window.addEventListener("resize", pepas);

function objectsDimention(){
	profilephoto.style.marginLeft = `${mitad(profilephoto.clientWidth)}px`;
	bodySection.style.width = `${window.innerWidth}px`;
}



/* ----------------------------------------------------------*/


function coordenadasAleatorias(){
	let coordenadas1 = [];
	for(i=0; i<=2000; i++){
		let randomValue = Math.random();
		let valor = 0;
		if(randomValue<0.5){
			valor = valor + 0.3;
		}else{
			valor = valor - 0.3;
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


let x = 0;
let y;
let z;

function transicion(){
	y = setInterval(posicion, 90);
}

function posicion(){
	profilephoto.style.transform = `translate(${coordenadas1[x]}px , ${coordenadas2[x]}px)`;
	


	//cardname.style.transform = `translate(${coordenadas3[x]}px , ${coordenadas4[x]}px)`;
	card1.style.transform = `translate(${coordenadas2[x]}px , ${coordenadas1[x]}px)`;
	card2.style.transform = `translate(${coordenadas3[x]}px , ${coordenadas2[x]}px)`;
	card3.style.transform = `translate(${coordenadas2[x]}px , ${coordenadas3[x]}px)`;
	card4.style.transform = `translate(${coordenadas4[x]}px , ${coordenadas1[x]}px)`;

	//console.log(x);
	
	if(x<=2000){
		x = x + 1;
		return x;
	}else{
		x=0
	}
}



/* ------------------------------------------------------------------------------------ */

function aleatorio(mini, maxi){
    let resultado;
    resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return resultado;
}

function pepitaTopFunction(){
	let miArrayTop = [];
	for(i=0; i<10; i++){
		miArrayTop.push(Math.random());
	}
	return miArrayTop;
}

let pepitaTop = pepitaTopFunction();


function pepitaLeftFunction(){
	let miArrayLeft = [];
	for(i=0; i<10; i++){
		miArrayLeft.push(Math.random());
	}
	return miArrayLeft;
}

let pepitaLeft = pepitaLeftFunction();
console.log(pepitaLeft)
function pepas (){
    for(i=0; i<10; i++){
	
        let pepita = document.createElement("div");
        bodySection.appendChild(pepita);
        
        //pepita.style.position = "absolute";
        pepita.style.backgroundColor = "#d9d9d9";
        pepita.style.width = aleatorio(90,90)+"px";
        pepita.style.height = aleatorio(90,90)+"px";
        pepita.style.borderRadius = "50%";
        pepita.style.top = `${pepitaTop[i]*alto}px`;
        pepita.style.left = `${pepitaLeft[i]*ancho}px`;

	pepita.style.position = "fixed";

	transicion2();

	function transicion2(){
		z = setInterval(posicion2, 90);
	}

	function posicion2(){
		pepita.style.transform = `translate(${coordenadas4[x]}px , ${coordenadas1[x]}px)`;

		if(x<=2000){
			x = x + 1;
			return x;
		}else{
			x=0
		}
	}
    }
console.log(ancho);
console.log(alto);
}

/* ------------------------------------------------------------------------------------------- */
let mainSection = document.getElementsByClassName('mainSection')[0];
let anchoMain = myBody.clientWidth;
let altoMain = myBody.clientHeight;
let alto2 = alto * 2;
mainSection.style.height = `${alto2}px`;

/* ------------------------------------------------------------------------------------------- */
function mitad (anchoElement){
	mitadIzquierda = (window.innerWidth / 2) - (anchoElement / 2);
	return mitadIzquierda;
}



/*
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function updateSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);

*/
