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


function loadDarts() { //updates the HTML elements related to Dart Monkey affter loading
	savedDarts = localStorage.darts;
	dartTotal = parseInt(savedDarts);
	dartPrice = Math.ceil(50 * 1.15**dartTotal);
	dartpowerUpgrade = (localStorage.dartpower == 'true');
	console.log(dartpowerUpgrade)
	if(dartpowerUpgrade){
		dartBPS = dartBPS * 2;
	}
	document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
	document.getElementById("dartAmmount").innerHTML = 'you have ' + dartTotal + ' Dart Monkeys';
	document.getElementById("dartProduce").innerHTML = 'Pops ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';
}

function loadTacks() { //updates the HTML elements related to Tack Shooter affter loading
	savedTacks = localStorage.tacks;
	tackTotal = parseInt(savedTacks);
	tackPrice = Math.ceil(250 * 1.15**tackTotal);
	document.getElementById("tackShooter").innerHTML = 'Buy a Tack Shooter for ' + tackPrice + ' Bloons';
	document.getElementById("tackAmmount").innerHTML = 'you have ' + tackTotal + ' Tack Shooters';
	document.getElementById("tackProduce").innerHTML = 'Pops ' + (tackBPS * tackTotal).toFixed(1) + ' bloons per second';
}

function loadSnipers() {
	savedSnipers = localStorage.snipers;
	sniperTotal = parseInt(savedSnipers);
	sniperPrice = Math.ceil(1000 * 1.15**sniperTotal);
	document.getElementById("sniperMonkey").innerHTML = 'Buy a Sniper Monkey for ' + sniperPrice + ' Bloons';
	document.getElementById("sniperAmmount").innerHTML = 'you have ' + sniperTotal + ' Sniper Monkeys';
	document.getElementById("sniperProduce").innerHTML = 'Pops ' + (sniperBPS * sniperTotal).toFixed(1) + ' bloons per second';
}

function addBloons() { //function for clicking
	bloons = bloons + clickStr;
	//console.log(getCookie("bloons"))l;
	document.getElementById("bloons").innerHTML = bloons.toFixed(1) + ' Bloons';
}

function buyDart() { //function for buying more Dart Monkeys
	if(bloons >= dartPrice) {
		bloons = bloons - dartPrice;
		dartTotal = dartTotal + 1;
		dartPrice = Math.ceil(50 * 1.15**dartTotal);
		document.getElementById("dartMonkey").innerHTML = 'Buy a Dart Monkey for ' + dartPrice + ' Bloons';
		document.getElementById("dartAmmount").innerHTML = 'you have ' + dartTotal + ' Dart Monkeys';
		document.getElementById("dartProduce").innerHTML = 'Pops ' + (dartBPS * dartTotal).toFixed(1) + ' bloons per second';
	}
}

function buyTack() { //Function for buying more Tack Shooters
	if(bloons >= tackPrice) {
		bloons = bloons - tackPrice;
		tackTotal = tackTotal + 1;
		tackPrice = Math.ceil(250 * 1.15**tackTotal);
		document.getElementById("tackShooter").innerHTML = 'Buy a Tack Shooter for ' + tackPrice + ' Bloons';
		document.getElementById("tackAmmount").innerHTML = 'you have ' + tackTotal + ' Tack Shooters';
		document.getElementById("tackProduce").innerHTML = 'Pops ' + (tackBPS * tackTotal).toFixed(1) + ' bloons per second';
	}
}

function buySniper() {
	if(bloons >= sniperPrice) {
		bloons = bloons - sniperPrice;
		sniperTotal = sniperTotal + 1;
		sniperPrice = Math.ceil(1000 * 1.15**sniperTotal);
		document.getElementById("sniperMonkey").innerHTML = 'Buy a Sniper Monkey for ' + sniperPrice + ' Bloons';
		document.getElementById("sniperAmmount").innerHTML = 'you have ' + sniperTotal + ' Sniper Monkeys';
		document.getElementById("sniperProduce").innerHTML = 'Pops ' + (sniperBPS * sniperTotal).toFixed(1) + ' bloons per second';
	}
}

window.setInterval(function() { //Adds together all the Bloons and then updates the elements in the HTML
	  bloons = (bloons + (dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS));
		totalBPS = ((dartTotal * dartBPS) + (tackTotal * tackBPS) + (sniperTotal * sniperBPS));
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

function clickHarder() { // Upgrade click ability

	if (bloons >= clickCost) {
		bloons = bloons - clickCost;
		clickStr = clickStr + 1;
		clickCost = clickCost*2.75;
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

function quickSin(x)
{
	//oh man this isn't all that fast actually
	//why do I do this. why
	var sign=x<0?-1:1;
	return sinArray[Math.round(
		(Math.abs(x)*360/Math.PI/2)%360
	)]*sign;
}

function refreshRate() {
	// hey should you use the same name for functions and variables? maybe
	refreshRateVar = parseInt(document.getElementById("refreshRate").value);
	document.getElementById("refreshRate").value;
}

function formatEveryThirdPower(notations)
{
	return function (value)
	{
		var base = 0,
		notationValue = '';
		if (value >= 1000000 && isFinite(value))
		{
			value /= 1000;
			while(Math.round(value) >= 1000)
			{
				value /= 1000;
				base++;
			}
			if (base>=notations.length) {return 'Infinity';} else {notationValue = notations[base];}
		}
		return ( Math.round(value * 1000) / 1000 ) + notationValue;
	};
}

function rawFormatter(value) {return Math.round(value * 1000) / 1000;}

var numberFormatters =
[
	rawFormatter,
	formatEveryThirdPower([
		'',
		'',
		' billion',
		' trillion',
		' quadrillion',
		' quintillion',
		' sextillion',
		' septillion',
		' octillion',
		' nonillion',
		' decillion',
		' undecillion',
		' duodecillion',
		' tredecillion',
		' quattuordecillion',
		' quindecillion',
		' sexdecillion',
		' septendecillion',
		' octodecillion',
		' novemdecillion',
		' vigintillion'
	])
};
	
function Beautify(value,floats)
{
	var negative=(value<0);
	var decimal='';
	var fixed=value.toFixed(floats);
	if (value<1000000 && floats>0 && Math.floor(fixed)!=fixed) decimal='.'+(fixed.toString()).split('.')[1];
	value=Math.floor(Math.abs(value));
	if (floats>0 && fixed==value+1) value++;
	var formatter=numberFormatters[Game.prefs.format?0:1];
	var output=formatter(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
	return negative?'-'+output:output+decimal;
}

var beautifyInTextFilter=/(([\d]+[,]*)+)/g;//new regex
var a=/\d\d?\d?(?:,\d\d\d)*/g;//old regex
function BeautifyInTextFunction(str){return Beautify(parseInt(str.replace(/,/g,''),10));};
function BeautifyInText(str) {return str.replace(beautifyInTextFilter,BeautifyInTextFunction);}//reformat every number inside a string
function BeautifyAll()//run through upgrades and achievements to reformat the numbers
{
	var func=function(what){what.desc=BeautifyInText(what.baseDesc);}
}
