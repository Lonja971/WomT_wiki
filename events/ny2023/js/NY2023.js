


//const snow = document.querySelector('qwea');
//const windowY = window.pageYOffset;
//console.log(windowY);
//const namee = windowY - 50;
//snow.style.marginTop= namee + 'px';





const but = document.querySelector('.button-a');
const field = document.querySelector('.field');
const lut = document.querySelector('.lut');
const casee = document.querySelector('.case__img');

const butq = document.querySelector('.button-a2');
const butqq = document.querySelector('.button2');
const fieldq = document.querySelector('.field2');
const lutq = document.querySelector('.lut2');
const caseeq = document.querySelector('.case__img2');

const butw = document.querySelector('.button-a3');
const butww = document.querySelector('.button3');
const fieldw = document.querySelector('.field3');
const lutw = document.querySelector('.lut3');
const caseew = document.querySelector('.case__img3');

const buta = document.querySelector('.button-a4');
const butaa = document.querySelector('.button4');
const fielda = document.querySelector('.field4');
const luta = document.querySelector('.lut4');
const caseea = document.querySelector('.case__img4');

const buts = document.querySelector('.button-a5');
const butss = document.querySelector('.button5');
const fields = document.querySelector('.field5');
const luts = document.querySelector('.lut5');
const casees = document.querySelector('.case__img5');

const butz = document.querySelector('.button-a6');
const butzz = document.querySelector('.button6');
const fieldz = document.querySelector('.field6');
const lutz = document.querySelector('.lut6');
const caseez = document.querySelector('.case__img6');

//-------------Main-case---------------------------

but.onclick = function () {
	casee.classList.add('case-op');
	event.preventDefault();
	let pro = 100;
	let numT = Math.random() * pro;
	let num = Math.floor(numT);
	if (num <= 35){
		field.innerHTML = `Звичайний кейс`;
		field.style.color = '#0e3263';
		lut.setAttribute('src', 'css/img/Кейси/casewr.png');
	}else if (num > 35 && num <= 65){
		field.innerHTML = `Особовий кейс`;
		field.style.color = '#296620';
		lut.setAttribute('src', 'css/img/Кейси/casewg.png');
	}else if (num > 65 && num <= 85){
		field.innerHTML = `Рідкісний кейс`;
		field.style.color = '#296620';
		lut.setAttribute('src', 'css/img/Кейси/casegg.png');
	}else if (num > 85 && num < 95){
		field.innerHTML = `Міфічний кейс`;
		field.style.color = '#a89309';
		lut.setAttribute('src', 'css/img/Кейси/casewy.png');
	}else if (num >= 95 ){
		field.innerHTML = `Легендарний кейс`;
		field.style.color = '#bd3a45';
		lut.setAttribute('src', 'css/img/Кейси/caseyr.png');
	}else{
		field.innerHTML = `ERROR`;
	}
	lut.style.opacity="1";
	lut.classList.add('animation1');
	function greet() {
		casee.classList.remove('case-op');
		lut.classList.remove('animation1');
	};
	setTimeout (greet, 2000);
};



//---------------1-case---------------------





butq.onclick = function () {
	lutq.style.width="170px";
	caseeq.classList.add('img1-op');
	event.preventDefault();
	butqq.classList.add('but1-op');
	let proq = 15;
	let numTq = Math.random() * proq;
	let numq = Math.floor(numTq);
	if (numq <= 3){
		fieldq.innerHTML = `100 Золота`;
		lutq.setAttribute('src', 'css/img/Нагороди/gold.png');
	} else if(numq > 3 && numq <= 6) {
		fieldq.innerHTML = `3 Танка`;
		lutq.style.width="200px";
		lutq.setAttribute('src', 'css/img/Нагороди/Tank.png');
	} else if(numq > 6 && numq <= 9) {
		fieldq.innerHTML = `2 Танка`;
		lutq.style.width="200px";
		lutq.setAttribute('src', 'css/img/Нагороди/Tank.png');
	} else if(numq > 9 && numq <= 12) {
		fieldq.innerHTML = `1500 Срібла`;
		lutq.setAttribute('src', 'css/img/Нагороди/Silver.png');
	} else if(numq > 12 && numq <= 15) {
		fieldq.innerHTML = `1000 Срібла`;
		lutq.setAttribute('src', 'css/img/Нагороди/Silver.png');
	}else{
		field.innerHTML = `ERROR`;
	}
	lutq.style.opacity="1";
	lutq.classList.add('animation2');
	function greett() {
		caseeq.classList.remove('img1-op');
		butqq.classList.remove('but1-op');
		lutq.classList.remove('animation2');
	};
	setTimeout (greett, 2000);
};


//---------------2-case---------------------



butw.onclick = function () {
	lutw.style.width="170px";
	caseew.classList.add('img2-op');
	event.preventDefault();
	butww.classList.add('but2-op');
	let prow = 22;
	let numTw = Math.random() * prow;
	let numw = Math.floor(numTw);
	if (numw <= 3){
		fieldw.innerHTML = `2000 Срібла`;
		lutw.setAttribute('src', 'css/img/Нагороди/Silver.png');
	} else if(numw > 3 && numw <= 6) {
		fieldw.innerHTML = `5 Танков`;
		lutw.style.width="200px";
		lutw.setAttribute('src', 'css/img/Нагороди/Tank.png');
	} else if(numw > 6 && numw <= 9) {
		fieldw.innerHTML = `100 Золота`;
		lutw.setAttribute('src', 'css/img/Нагороди/Gold.png');
	} else if(numw > 9 && numw <= 11) {
		fieldw.innerHTML = `200 Золота`;
		lutw.setAttribute('src', 'css/img/Нагороди/Gold.png');
	} else if(numw > 11 && numw <= 13) {
		fieldw.innerHTML = `Скін "Мандарин"`;
		lutw.style.width="125px";
		lutw.setAttribute('src', 'css/img/Нагороди/Mandarin.jpg');
	} else if(numw > 13 && numw <= 16) {
		let prowq = 3;
		let numTwq = Math.random() * prowq;
		let numwq = Math.floor(numTwq);
		if(numwq == 0){
			fieldw.innerHTML = `Обважування "Сніговик"`;
			lutw.style.width="100px";
			lutw.setAttribute('src', 'css/img/Деколі/Snowman.png');
		} else if (numwq == 1){
			fieldw.innerHTML = `Обважування<br>"Злий-Сніговик"`;
			lutw.style.width="100px";
			lutw.setAttribute('src', 'css/img/Деколі/Red_Snowman.png');
		} else if (numwq == 2){
			fieldw.innerHTML = `Обважування "Ялинка"`;
			lutw.style.width="150px";
			lutw.setAttribute('src', 'css/img/Деколі/tree.png');
		}else{
			field.innerHTML = `ERROR`;
		};
	} else if(numw > 16 && numw <= 19) {
		fieldw.innerHTML = `1 День<br>Преміум Аккаунта`;
		lutw.style.width="150px";
		lutw.setAttribute('src', 'css/img/Нагороди/Akk.png');
	} else{
		fieldw.innerHTML = `2000 Срібла`;
		lutw.setAttribute('src', 'css/img/Нагороди/Silver.png');
	}
	lutw.style.opacity="1";
	lutw.classList.add('animation2');
	function greett() {
		caseew.classList.remove('img2-op');
		butww.classList.remove('but2-op');
		lutw.classList.remove('animation2');
	};
	setTimeout (greett, 2000);
};


//---------------3-case---------------------



buta.onclick = function () {
	luta.style.width="170px";
	caseea.classList.add('img3-op');
	event.preventDefault();
	butaa.classList.add('but3-op');
	let proa = 15;
	let numTa = Math.random() * proa;
	let numa = Math.floor(numTa);
	if (numa <= 3){
		fielda.innerHTML = `1 День<br>Преміум Аккаунта`;
		luta.style.width="150px";
		luta.setAttribute('src', 'css/img/Нагороди/Akk.png');
	} else if (numa > 3 && numa<=5){
		fielda.innerHTML = `5000 Срібла`;
		luta.setAttribute('src', 'css/img/Нагороди/Silver.png');
	} else if (numa > 5 && numa<=8){
		fielda.innerHTML = `3000 Срібла`;
		luta.setAttribute('src', 'css/img/Нагороди/Silver.png');
	} else if (numa > 8 && numa<=10){
		fielda.innerHTML = `500 Золота`;
		luta.setAttribute('src', 'css/img/Нагороди/Gold.png');
	} else if (numa > 10 && numa<=13){
		fielda.innerHTML = `300 Золота`;
		luta.setAttribute('src', 'css/img/Нагороди/Gold.png');
	} else {
		fielda.innerHTML = `1 Креслення`;
		luta.style.width="150px";
		luta.setAttribute('src', 'css/img/Нагороди/Drawing.png');
	}
	luta.style.opacity="1";
	luta.classList.add('animation2');
	function greett() {
		caseea.classList.remove('img3-op');
		butaa.classList.remove('but3-op');
		luta.classList.remove('animation2');
	};
	setTimeout (greett, 2000);
};


//---------------4-case---------------------


buts.onclick = function () {
	luts.style.width="170px";
	casees.classList.add('img4-op');
	event.preventDefault();
	butss.classList.add('but4-op');
	let pros = 5;
	let numTs = Math.random() * pros;
	let nums = Math.floor(numTs);
	if (nums == 1) {
		fields.innerHTML = `1 Креслення`;
		luts.style.width="150px";
		luts.setAttribute('src', 'css/img/Нагороди/Drawing.png');
	} else if (nums == 0) {
		fields.innerHTML = `2 Дня<br>Преміум Аккаунта`;
		luts.style.width="150px";
		luts.setAttribute('src', 'css/img/Нагороди/Akk.png');
	} else if (nums == 2) {
		fields.innerHTML = `Скін E-75 TS<br>"Новорічний тягач"`;
		luts.style.width="250px";
		luts.setAttribute('src', 'css/img/Танки/E100-skin.png');
	} else if (nums == 3){
		fields.innerHTML = `Скін<br>Новорічний<br>Minotauro`;
		luts.style.width="250px";
		luts.setAttribute('src', 'css/img/Танки/Minotauro-skin.png');
	} else if (nums == 4){
		fields.innerHTML = `1000 Золота`;
		luts.setAttribute('src', 'css/img/Нагороди/Gold.png');
	}else{
		fields.innerHTML = `ERROR`;
	}
	luts.style.opacity="1";
	luts.classList.add('animation2');
	function greett() {
		casees.classList.remove('img4-op');
		butss.classList.remove('but4-op');
		luts.classList.remove('animation2');
	};
	setTimeout (greett, 2000);
};


//---------------5-case---------------------


butz.onclick = function () {
	lutz.style.width="170px";
	caseez.classList.add('img5-op');
	event.preventDefault();
	butzz.classList.add('but5-op');
	let proz = 4;
	let numTz = Math.random() * proz;
	let numz = Math.floor(numTz);
	if (numz == 0) {
		fieldz.innerHTML = `2 Креслення`;
		lutz.style.width="150px";
		lutz.setAttribute('src', 'css/img/Нагороди/Drawing.png');
	} else if (numz == 1){
		fieldz.innerHTML = `Minotauro`;
		lutz.style.width="250px";
		lutz.setAttribute('src', 'css/img/Танки/Minotauro.png');
	} else if (numz == 2){
		fieldz.innerHTML = `E-75 TS`;
		lutz.style.width="250px";
		lutz.setAttribute('src', 'css/img/Танки/E100.png');
	} else if (numz == 3) {
		fieldz.innerHTML = `2000 Золота`;
		lutz.setAttribute('src', 'css/img/Нагороди/Gold.png');
	} else {
		fieldz.innerHTML = `ERROR`;
	}
	lutz.style.opacity="1";
	lutz.classList.add('animation2');
	function greett() {
		caseez.classList.remove('img5-op');
		butzz.classList.remove('but5-op');
		lutz.classList.remove('animation2');
	};
	setTimeout (greett, 2000);
};


//---------------Kreslenna----------------------

const drawbo = document.querySelector('.db1');
const drawbt = document.querySelector('.db2');
const drawbd = document.querySelector('.db3');
const  dko= document.querySelector('.dk1');
const dkt = document.querySelector('.dk2');
const dkd = document.querySelector('.dk3');


drawbo.onclick = function () {
	event.preventDefault();
	dko.innerHTML = `*придбано`;
};
drawbt.onclick = function () {
	event.preventDefault();
	dkt.innerHTML = `*придбано`;
};
drawbd.onclick = function () {
	event.preventDefault();
	dkd.innerHTML = `*придбано`;
};