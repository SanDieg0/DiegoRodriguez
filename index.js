let profilephoto = document.getElementsByClassName('profilephoto')[0];
let cardname = document.getElementsByClassName('cardname')[0];
let card1 = document.getElementsByClassName('card')[0];
let card2 = document.getElementsByClassName('card')[1];
let card3 = document.getElementsByClassName('card')[2];
let card4 = document.getElementsByClassName('card')[3];

let coordenadasx = [0,1.1,2.7,4.5,6.9,9.3,11.1,12.4,13.1,13.5,13.9,14.0,14.1,14.0,13.8,13.5,12.9,12.3,11.6,10.1,8.1,6.8,5.0,3.4,1.5,-3,-1.0,-23,-45,-64,-87,-106,-120,-130,-134,-137,-139,-141,-142,-139,-136,-130,-120,-102,-80,-59,-40,-20,-9]
let coordenadasy = [0,1.1,2.6,3.8,4.7,4.9,4.4,3.6,2.8,2.2,1.2,8,0,8,1.6,2.2,2.9,3.7,4.2,4.9,4.8,4.7,4.0,3.1,1.5,-3,-1.0,-2.0,-3.7,-4.5,-4.9,-4.6,-3.9,-3.0,-2.4,-1.8,-1.3,-5,0,1.3,2.0,3.0,4.7,4.9,4.4,3.5,1.9,9]
let coordenadasx1 = [0,1.1,2.7,4.5,6.9,9.3,11.1,12.4,13.1,13.5,13.9,14.0,14.1,14.0,13.8,13.5,12.9,12.3,11.6,10.1,8.1,6.8,5.0,3.4,1.5,-3,-1.0,-23,-45,-64,-87,-106,-120,-130,-134,-137,-139,-141,-142,-139,-136,-130,-120,-102,-80,-59,-40,-20,-9]
let coordenadasy1 = [0,11,26,38,47,49,44,36,28,22,12,8,0,8,16,22,29,37,42,49,48,47,40,31,15,-3,-10,-20,-37,-45,-49,-46,-39,-30,-24,-18,-13,-5,0,13,20,30,47,49,44,35,19,9]


let x = 0;
let y;
function transicion(){

		y = setInterval(posicion, 70);

}

function posicion(){
	profilephoto.style.transform = `translate(${coordenadasx[x]}px , ${coordenadasy[x]}px)`;
	cardname.style.transform = `translate(${coordenadasy[x]}px , ${coordenadasy[x]}px)`;
	card1.style.transform = `translate(${coordenadasy1[x]}px , ${coordenadasx1[x]}px)`;
	card2.style.transform = `translate(${coordenadasx1[x]}px , ${coordenadasy1[x]}px)`;
	card3.style.transform = `translate(${coordenadasx1[x]}px , ${coordenadasx1[x]}px)`;
	card4.style.transform = `translate(${coordenadasy1[x]}px , ${coordenadasy1[x]}px)`;

	console.log(x);
	
	if(x<=48){
		x = x + 1;
		return x;
	}else{x=0}
	
}