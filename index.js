let profilephoto = document.getElementsByClassName('profilephoto')[0];
let cardname = document.getElementsByClassName('cardname')[0];
let card1 = document.getElementsByClassName('card')[0];
let card2 = document.getElementsByClassName('card')[1];
let card3 = document.getElementsByClassName('card')[2];
let card4 = document.getElementsByClassName('card')[3];

function coordenadasAleatorias(){
	let coordenadas1 = [];
	for(i=0; i<=2000; i++){
		let randomValue = Math.random();
		let valor = 0;
		if(randomValue<0.5){
			valor = valor + 0.5;
		}else{
			valor = valor - 0.5;
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

function transicion(){
	y = setInterval(posicion, 90);
}

function posicion(){
	profilephoto.style.transform = `translate(${coordenadas1[x]}px , ${coordenadas2[x]}px)`;
	cardname.style.transform = `translate(${coordenadas3[x]}px , ${coordenadas4[x]}px)`;
	card1.style.transform = `translate(${coordenadas2[x]}px , ${coordenadas1[x]}px)`;
	card2.style.transform = `translate(${coordenadas3[x]}px , ${coordenadas2[x]}px)`;
	card3.style.transform = `translate(${coordenadas2[x]}px , ${coordenadas3[x]}px)`;
	card4.style.transform = `translate(${coordenadas4[x]}px , ${coordenadas1[x]}px)`;

	console.log(x);
	
	if(x<=2000){
		x = x + 1;
		return x;
	}else{
		x=0
	}
}




