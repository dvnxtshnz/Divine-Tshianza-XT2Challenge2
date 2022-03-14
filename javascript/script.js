var datum = new Date();
var uren = datum.getHours();

// achtegrondkleur per dagdeel
function toonAchtegrondkleur() {
	var achtegrondkleur = document.getElementById("container");

	if (uren >= 0 && uren < 6) {
		achtegrondkleur.classList.add("nachtKleur");
	}

	else if (uren >= 6 && uren < 12) {
		achtegrondkleur.classList.add("ochtendKleur");
	}

	else if  (uren >= 12 && uren < 18) {
		achtegrondkleur.classList.add("middagKleur");
	}

	else if (uren >= 18 && uren < 24) {
		achtegrondkleur.classList.add("avondKleur");
	}

	setInterval(toonAchtegrondkleur, 1000);
}

// begroeting per dagdeel
function toonBegroeting() {
	if (uren >= 0 && uren < 6) {
		document.getElementById("begroeting").innerHTML = "Good night!";
	}

	else if (uren >= 6 && uren < 12) {
		document.getElementById("begroeting").innerHTML = "Good morning!";
	}

	else if  (uren >= 12 && uren < 18) {
		document.getElementById("begroeting").innerHTML = "Good afternoon!";
	}

	else if (uren >= 18 && uren < 24) {
		document.getElementById("begroeting").innerHTML = "Good evening!";
	}

	setInterval(toonBegroeting, 1000);
}

// datum
function toonDatum() {
	var weekDagen = new Array(
		"Zondag", 
		"Maandag", 
		"Dinsdag", 
		"Woensdag", 
		"Donderdag", 
		"Vrijdag", 
		"Zaterdag"
	);
	var dagNummer = datum.getDate();
	var maanden = new Array(
		"januari", 
		"februari", 
		"maart", 
		"april", 
		"mei", 
		"juni", 
		"juli", 
		"augustus", 
		"september", 
		"oktober", 
		"november", 
		"december"
		);

	function fourdigits(number) { // jaartal
		return (number < 1000) ? number + 1900 : number;
	}
	
	huidigeDatum = weekDagen[datum.getDay()] + ' ' + dagNummer + ' ' + maanden[datum.getMonth()] + ' ' + (fourdigits(datum.getYear()));

	document.getElementById("datum").innerHTML = huidigeDatum;

	setInterval(toonDatum, 1000);
}

// digitale klok
function toonDigitaleKlok(){
    var datum = new Date();
    var uren = datum.getHours();
    var minuten = datum.getMinutes();
    var seconden = datum.getSeconds(); 

    uren = uren < 10 ? "0" + uren : uren;
    minuten = minuten < 10 ? "0" + minuten : minuten;
    seconden = seconden < 10 ? "0" + seconden : seconden;
    
    document.getElementById("klok").innerHTML = uren + ":" + minuten + ":" + seconden;
    
    setInterval(toonDigitaleKlok, 1000);
}

// tekstkleur en logokleur per dagdeel
function toonTekstKleur() {
	var logoKleur = document.getElementById("logo");
	var begroetingKleur = document.getElementById("begroeting");

	if (uren >= 0 && uren < 6) {
		logoKleur.classList.add("logoWit");
		begroetingKleur.classList.add("tekstWit");
	}

	else if (uren >= 6 && uren < 24) {
		logoKleur.classList.add("logoDonker");
		begroetingKleur.classList.add("tekstDonker");
	}

	setInterval(toonTekstKleur, 1000);
}

// achtergrondafbeelding per dagdeel
function toonAchtergrondAfbeelding() {
	var achtergrondAfbeeldingTop = document.getElementById("dagdeelAfbeeldingTop");
	var achtergrondAfbeeldingBottom = document.getElementById("dagdeelAfbeeldingBottom");

	if (uren >= 0 && uren < 6) {
		achtergrondAfbeeldingTop.classList.add("nachtAfbeeldingTop");
		achtergrondAfbeeldingBottom.classList.add("nachtAfbeeldingBottom");
	}

	else if (uren >= 6 && uren < 12) {
		achtergrondAfbeeldingTop.classList.add("ochtendAfbeeldingTop");
		achtergrondAfbeeldingBottom.classList.add("ochtendAfbeeldingBottom");
	}

	else if (uren >= 12 && uren < 18) {
		achtergrondAfbeeldingTop.classList.add("middagAfbeeldingTop");
		achtergrondAfbeeldingBottom.classList.add("middagAfbeeldingBottom");
	}

	else if (uren >= 18 && uren < 24) {
		achtergrondAfbeeldingTop.classList.add("avondAfbeeldingTop");
		achtergrondAfbeeldingBottom.classList.add("avondAfbeeldingBottom");
	}

	setInterval(toonAchtergrondAfbeelding, 1000);
}

window.onload = function() {
	toonAchtegrondkleur();
	toonBegroeting();
	toonDatum();
	toonDigitaleKlok();
	toonTekstKleur();
	toonAchtergrondAfbeelding();
}