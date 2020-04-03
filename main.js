function openTab(evt, pageName){
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName("tabcontent")
	for(i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for(i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}
/*
----Beginign of MainPage section of the javascript----
*/
//Initialize all global variables that are relevent to the game
var totalBPS = 0;
var bloons = 0;
var bloonstext = document.getElementById("bloons");
var formatbloons = numberformat.format(bloons);
var clickStr = 1;
var clickCost = 10;
var refreshRateVar = 100;
var dartPrice = 50;
var dartTotal = 0;
var dartBPS = 1;
var tackPrice = 250;
var tackTotal = 0;
var tackBPS = 5;
var sniperPrice = 1000;
var sniperTotal = 0;
var sniperBPS = 20;
var boomerangPrice = 10000;
var boomerangTotal = 0;
var boomerangBPS = 150;
var bombPrice = 100000;
var bombTotal = 0;
var bombBPS = 1000;
var gluePrice = 1000000;
var glueTotal = 0;
var glueBPS = 8000;
var icePrice = 15000000;
var iceTotal = 0;
var iceBPS = 80000;
var ninjaPrice = 250000000;
var ninjaTotal = 0;
var ninjaBPS = 1000000;
var wizardPrice = 5000000000;
var wizardTotal = 0;
var wizardBPS = 25000000;
var buccaneerPrice = 100000000000;
var buccaneerTotal = 0;
var buccaneerBPS = 400000000;
var dartpowerUpgrade = false;
var dartpower2Upgrade = false;
var tripledartsUpgrade = false;
var spikeopultUpgrade = false;
var crossbowUpgrade = false;
var tackpowerUpgrade = false;
var tackpower2Upgrade = false

function addBloons() { //function for clicking
	bloons = bloons + clickStr;
	//console.log(getCookie("bloons"))l;
	document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
	document.getElementById("bloons").innerHTML = numberformat.format(bloons);
}

function buyDart() { //function for buying more Dart Monkeys
	if(bloons >= dartPrice) {
		bloons = bloons - dartPrice;
		dartTotal = dartTotal + 1;
		dartPrice = Math.ceil(50 * 1.1**dartTotal);
		document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
		document.getElementById("dartAmmount").innerHTML = 'You have ' + dartTotal + ' Dart Monkeys';
		document.getElementById("dartProduce").innerHTML = numberformat.format(dartPrice);
	}
}

function buyTack() { //Function for buying more Tack Shooters
	if(bloons >= tackPrice) {
		bloons = bloons - tackPrice;
		tackTotal = tackTotal + 1;
		tackPrice = Math.ceil(250 * 1.30**tackTotal);
		document.getElementById("tackShooter").innerHTML = 'Buy a Tack Shooter for ' + tackPrice + ' Bloons';
		document.getElementById("tackAmmount").innerHTML = 'You have ' + tackTotal + ' Tack Shooters';
		document.getElementById("tackProduce").innerHTML = numberformat.format(tackPrice);
	}
}

function buySniper() {
	if(bloons >= sniperPrice) {
		bloons = bloons - sniperPrice;
		sniperTotal = sniperTotal + 1;
		sniperPrice = Math.ceil(1000 * 1.27**sniperTotal);
		document.getElementById("sniperMonkey").innerHTML = 'Buy a Sniper Monkey for ' + sniperPrice + ' Bloons';
		document.getElementById("sniperAmmount").innerHTML = 'You have ' + sniperTotal + ' Sniper Monkeys';
		document.getElementById("sniperProduce").innerHTML = numberformat.format(sniperPrice);
	}
}

function buyBoomerang() {
	if(bloons >= boomerangPrice) {
		bloons = bloons - boomerangPrice;
		boomerangTotal = boomerangTotal + 1;
		boomerangPrice = Math.ceil(10000 * 1.25**boomerangTotal);
		document.getElementById("boomerangMonkey").innerHTML = 'Buy a Boomerang Thrower for ' + boomerangPrice + ' Bloons';
		document.getElementById("boomerangAmmount").innerHTML = 'You have ' + boomerangTotal + ' Boomerang Throwers';
		document.getElementById("boomerangProduce").innerHTML = numberformat.format(boomerangPrice);
	}
}

function buyBomb() {
	if(bloons >= bombPrice) {
		bloons = bloons - bombPrice;
		bombTotal = bombTotal + 1;
		bombPrice = Math.ceil(100000 * 1.22**bombTotal);
		document.getElementById("bombShooter").innerHTML = 'Buy a Bomb Tower for ' + bombPrice + ' Bloons';
		document.getElementById("bombAmmount").innerHTML = 'You have ' + bombTotal + ' Bomb Towers';
		document.getElementById("bombProduce").innerHTML = numberformat.format(bombPrice);
	}
}

function buyGlue() {
	if(bloons >= gluePrice) {
		bloons = bloons - gluePrice;
		glueTotal = glueTotal + 1;
		gluePrice = Math.ceil(1000000 * 1.20**glueTotal);
		document.getElementById("glueGunner").innerHTML = 'Buy an Glue Gunner for ' + gluePrice + ' Bloons';
		document.getElementById("glueAmmount").innerHTML = 'You have ' + glueTotal + ' Glue Gunners';
		document.getElementById("glueProduce").innerHTML = numberformat.format(gluePrice);
	}
}

function buyIce() {
	if(bloons >= icePrice) {
		bloons = bloons - icePrice;
		iceTotal = iceTotal + 1;
		icePrice = Math.ceil(15000000 * 1.19**iceTotal);
		document.getElementById("iceMonkey").innerHTML = 'Buy an Ice Monkey for ' + icePrice + ' Bloons';
		document.getElementById("iceAmmount").innerHTML = 'You have ' + iceTotal + ' Ice Monkeys';
		document.getElementById("iceProduce").innerHTML = numberformat.format(icePrice);
	}
}

function buyNinja() {
	if(bloons >= ninjaPrice) {
		bloons = bloons - ninjaPrice;
		ninjaTotal = ninjaTotal + 1;
		ninjaPrice = Math.ceil(250000000 * 1.18**ninjaTotal);
		document.getElementById("ninjaMonkey").innerHTML = 'Buy a Ninja Monkey for ' + ninjaPrice + ' Bloons';
		document.getElementById("ninjaAmmount").innerHTML = 'You have ' + ninjaTotal + ' Ninja Monkeys';
		document.getElementById("ninjaProduce").innerHTML = numberformat.format(ninjaPrice);
	}
}

function buyWizard() {
	if(bloons >= wizardPrice) {
		bloons = bloons - wizardPrice;
		wizardTotal = wizardTotal + 1;
		wizardPrice = Math.ceil(5000000000 * 1.16**wizardTotal);
		document.getElementById("wizardMonkey").innerHTML = 'Buy a Monkey Apprentice for ' + wizardPrice + ' Bloons';
		document.getElementById("wizardAmmount").innerHTML = 'You have ' + wizardTotal + ' Monkey Apprentices';
		document.getElementById("wizardProduce").innerHTML = numberformat.format(wizardPrice);
	}
}

function buyBuccaneer() {
	if(bloons >= buccaneerPrice) {
		bloons = bloons - buccaneerPrice;
		buccaneerTotal = buccaneerTotal + 1;
		buccaneerPrice = Math.ceil(100000000000 * 1.15**buccaneerTotal);
		document.getElementById("monkeyBuccaneer").innerHTML = 'Buy a Monkey Buccaneer for ' + buccaneerPrice + ' Bloons';
		document.getElementById("buccaneerAmmount").innerHTML = 'You have ' + buccaneerTotal + ' Monkey Buccaneers';
		document.getElementById("buccaneerProduce").innerHTML = numberformat.format(buccaneerPrice);
	}
}


window.setInterval(function() { //Adds together all the Bloons and then updates the elements in the HTML
	  bloons = (bloons + (dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS) + (boomerangTotal * boomerangBPS) + (bombTotal * bombBPS) + (glueTotal * glueBPS) + (iceTotal * iceBPS) + (ninjaTotal * ninjaBPS) + (wizardTotal * wizardBPS) + (buccaneerTotal * buccaneerBPS));
		totalBPS = ((dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS) + (boomerangTotal * boomerangBPS) + (bombTotal * bombBPS) + (glueTotal * glueBPS) + (iceTotal * iceBPS) + (ninjaTotal * ninjaBPS) + (wizardTotal * wizardBPS) + (buccaneerTotal * buccaneerBPS));
		document.getElementById("bloonspersec").innerHTML = totalBPS.toFixed(1) + ' bloons per second'
		document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
		document.cookie = "bloons=" + bloons.toFixed(1);
}, 1000); // dont change this to anything other than 1000 lol

window.setInterval(function() {
	document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
}, refreshRateVar);

/*
----This section represents the Upgrades page of the javascript----
*/
function checkUpgrades() {
	console.log(dartpowerUpgrade);
	if(dartTotal >= 1 && dartpowerUpgrade != true) {
		var dartpowerElements = document.getElementsByClassName("dartpower");
		for (i = 0; i < dartpowerElements.length; i++){
			dartpowerElements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(dartpower2Upgrade);
	if(dartTotal >= 10 && dartpower2Upgrade != true) {
		var dartpower2Elements = document.getElementsByClassName("dartpower2");
		for (i = 0; i < dartpower2Elements.length; i++){
			dartpower2Elements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(tripledartsUpgrade);
	if(dartTotal >= 25 && tripledartsUpgrade != true) {
		var tripledartsElements = document.getElementsByClassName("tripledarts");
		for (i = 0; i < tripledartsElements.length; i++){
			tripledartsElements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(spikeopultUpgrade);
	if(dartTotal >= 50 && spikeopultUpgrade != true) {
		var spikeopultElements = document.getElementsByClassName("spikeopult");
		for (i = 0; i < spikeopultElements.length; i++){
			spikeopultElements[i].style.display = "inline";
		}
	}
}

function checkUpgrades() {
	console.log(crossbowUpgrade);
	if(dartTotal >= 75 && crossbowUpgrade != true) {
		var crossbowElements = document.getElementsByClassName("crossbow");
		for (i = 0; i < crossbowElements.length; i++){
			crossbowElements[i].style.display = "inline";
		}
	}
}

function dartpower() {
	var dartpowerCost = 100
	if(bloons >= dartpowerCost) {
		bloons = bloons - dartpowerCost;
		dartpower = true;
		localStorage.setItem("dartpower", true);
		dartBPS = dartBPS * 2;
		var dartpowerElements = document.getElementsByClassName("dartpower");
		for (i = 0; i < dartpowerElements.length; i++){
			dartpowerElements[i].style.display = "none";
		}
	}
}

function dartpower2() {
	var dartpower2Cost = 1000
	if(bloons >= dartpower2Cost) {
		bloons = bloons - dartpower2Cost;
		dartpower2 = true;
		localStorage.setItem("dartpower2", true);
		dartBPS = dartBPS * 2;
		var dartpower2Elements = document.getElementsByClassName("dartpower2");
		for (i = 0; i < dartpower2Elements.length; i++){
			dartpower2Elements[i].style.display = "none";
		}
	}
}

function tripledarts() {
	var tripledartsCost = 5000
	if(bloons >= tripledartsCost) {
		bloons = bloons - tripledartsCost;
		tripledarts = true;
		localStorage.setItem("tripledarts", true);
		dartBPS = dartBPS * 3;
		var tripledartsElements = document.getElementsByClassName("tripledarts");
		for (i = 0; i < tripledartsElements.length; i++){
			tripledartsElements[i].style.display = "none";
		}
	}
}

function spikeopult() {
	var spikeopultCost = 50000
	if(bloons >= spikeopultCost) {
		bloons = bloons - spikeopultCost;
		spikeopult = true;
		localStorage.setItem("spikeopult", true);
		dartBPS = dartBPS * 3;
		var spikeopultElements = document.getElementsByClassName("spikeopult");
		for (i = 0; i < spikeopultElements.length; i++){
			spikeopultElements[i].style.display = "none";
		}
	}
}

function crossbow() {
	var crossbowCost = 1000000
	if(bloons >= crossbowCost) {
		bloons = bloons - crossbowCost;
		crossbow = true;
		localStorage.setItem("crossbow", true);
		dartBPS = dartBPS * 5;
		var crossbowElements = document.getElementsByClassName("crossbow");
		for (i = 0; i < crossbowElements.length; i++){
			crossbowElements[i].style.display = "none";
		}
	}
}

function clickHarder() { // Upgrade click ability

	if (bloons >= clickCost) {
		bloons = bloons - clickCost;
		clickStr = clickStr * 2;
		clickCost = clickCost * 1.5;
		localStorage.setItem("clickStr", clickStr); localStorage.setItem("clickCost", clickCost);
		document.getElementById("clickCostDisplay").innerHTML = "Current level: " + clickStr.toFixed(1) + " Cost for next level: " + clickCost.toFixed(1);
	}
}

/*
	This section represents the functions for the options tab
*/

function resetGame() {
	if(confirm("Do you want to reset the game?")){
		localStorage.clear();
		resetVariables();
		location.reload();
	}
	else {

	}
}

function resetVariables(){
	var totalBPS = 0;
        var bloons = 0;
        var bloonstext = document.getElementById("bloons");
        var clickStr = 1;
        var clickCost = 100;
        var refreshRateVar = 100;
        var dartPrice = 50;
        var dartTotal = 0;
        var dartBPS = 1;
        var tackPrice = 250;
        var tackTotal = 0;
        var tackBPS = 5;
        var sniperPrice = 1000;
        var sniperTotal = 0;
        var sniperBPS = 20;
        var dartpowerUpgrade = false
}

function refreshRate() {
	// hey should you use the same name for functions and variables? maybe
	refreshRateVar = parseInt(document.getElementById("refreshRate").value);
	document.getElementById("refreshRate").value;
}
