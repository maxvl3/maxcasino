var spinKnop = document.querySelector("#spinknop");

var portemonneeBedrag = 0;
var portemonnee = document.querySelector("#portemonnee");

var aantalSpinsElement = document.querySelector("#aantalspins");
var aantalSpins = 5;
var extra5Element = document.querySelector("#extra5");
var extra10Element = document.querySelector("#extra10");

var helaasElement = document.querySelector("#helaas");

var cashoutKnop = document.querySelector("#cashout");
var cashoutgif = document.querySelector("#cashoutgif");

var jackpot = document.getElementById("jackpot");
var prijs2x = document.getElementById("prijs2x");
var prijs3x = document.getElementById("prijs3x");

var controleMelding = document.querySelector("#controlemelding");
var controleAchtergrond = document.querySelector("#controleachtergrond");
var doorgaanKnop = document.querySelector("#doorgaanknop");
var tejongElement = document.querySelector("#tejong");


function spin() {
    var getal1 = Math.floor((Math.random() * 10) + 1);
    document.getElementById("getal1").innerHTML = getal1;

    var getal2 = Math.floor((Math.random() * 10) + 1);
    document.getElementById("getal2").innerHTML = getal2;

    var getal3 = Math.floor((Math.random() * 10) + 1);
    document.getElementById("getal3").innerHTML = getal3;


    if (getal1 == 7 && getal2 == 7 && getal3 == 7){
        portemonneeBedrag = portemonneeBedrag + 30;
        portemonnee.textContent = portemonneeBedrag;
        jackpot.play();
    }
    else if (getal1 == getal2 && getal2 == getal3){
        portemonneeBedrag = portemonneeBedrag + 15;
        portemonnee.textContent = portemonneeBedrag;
        prijs3x.play();
    }
    else if (getal1 == getal2){
        portemonneeBedrag = portemonneeBedrag + 5;
        portemonnee.textContent = portemonneeBedrag;
        prijs2x.play();
    }
    else if (getal2 == getal3){
        portemonneeBedrag = portemonneeBedrag + 5;
        portemonnee.textContent = portemonneeBedrag;
        prijs2x.play();
    }
    else if (getal1 == getal3){
        portemonneeBedrag = portemonneeBedrag + 5;
        portemonnee.textContent = portemonneeBedrag;
        prijs2x.play();
    }

    aantalSpins = aantalSpins - 1;
    aantalSpinsElement.textContent = aantalSpins;

    if (aantalSpins == 0 && portemonneeBedrag > 0){
        spinKnop.style.display = "none";
        helaasElement.textContent = "Helaas, je hebt geen spins meer, koop nieuwe of kies voor een cash out";
    }
    else if (aantalSpins == 0){
        spinKnop.style.display = "none";
        helaasElement.textContent = "Helaas, je hebt geen spins meer, refresh en probeer het opnieuw";
    }
    else {
        spinKnop.style.display = "initial";
        helaasElement.textContent = "";
    }
}

function extra5Spins(){
    if (portemonneeBedrag >= 5){
    portemonneeBedrag = portemonneeBedrag - 5;
    portemonnee.textContent = portemonneeBedrag;
    aantalSpins = aantalSpins + 5;
    aantalSpinsElement.textContent = aantalSpins;
    }

    spinKnop.style.display = "initial";
    helaasElement.textContent = "";
}

function extra10Spins(){
    if (portemonneeBedrag >= 10){
    portemonneeBedrag = portemonneeBedrag - 10;
    portemonnee.textContent = portemonneeBedrag;
    aantalSpins = aantalSpins + 10;
    aantalSpinsElement.textContent = aantalSpins;
    }

    spinKnop.style.display = "initial";
    helaasElement.textContent = "";
}

function uitbetaling(){
    if(portemonneeBedrag >= 0.1){
        cashoutgif.style.display = "initial";
    }
}

function leeftijdControle(){
    var leeftijdElement = document.querySelector("#leeftijd").value;

    if (leeftijdElement >= 18){
        controleMelding.style.display = "none";
        controleAchtergrond.style.display = "none";
    }
    if (leeftijdElement < 18){
        tejongElement.textContent = "Helaas, je bent te jong om gokspellen te spelen";
    }
}

function groeten(){
    var tijd = new Date().getHours(); // Bron: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_if

    var groet = ["Goede morgen", "Goede middag", "Goede avond", "Goede nacht"];

    if (tijd >= 6){
        document.getElementById("groeten").innerHTML = groet[0];
    }
    if (tijd >= 12){
        document.getElementById("groeten").innerHTML = groet[1];
    }
    if (tijd >= 18){
        document.getElementById("groeten").innerHTML = groet[2];
    }
    if (tijd >= 24){
        document.getElementById("groeten").innerHTML = groet[3];
    }

    var naamElement = document.querySelector("#naam").value;

    document.getElementById("naamform").innerHTML = naamElement;
}

spinKnop.addEventListener("click", spin);
extra5Element.addEventListener("click", extra5Spins);
extra10Element.addEventListener("click", extra10Spins);
cashoutKnop.addEventListener("click", uitbetaling);
doorgaanKnop.addEventListener("click", leeftijdControle);
doorgaanKnop.addEventListener("click", groeten);