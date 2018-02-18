
// Christian Lykke - datamariker, 3. sem, uge 3 - aflevering CA1_Sprint2018 - page 2 (Typing speed tester)
// 1 javascript + 1 html

var sentences = ["hello there","nice to meet you","farewell","goodbye"];

var randIndex = Math.floor(Math.random() * sentences.length);
var randomText = sentences[randIndex];

// her ses målet:
document.getElementById("testID").innerHTML = randomText;

var runScript = false;
var scriptHasFinished = false;
var clockScript = null;
document.getElementById('fname').onkeyup = function(mykey) {
	
	if(mykey.keyCode == 13) { //keycode 13 == Enter
		document.getElementById('fname').value = "";
	}
	
	if (runScript == false && scriptHasFinished == false && mykey.keyCode != 13 ) { 
		clockScript = setInterval(timer, 100);
	}
	
	if (scriptHasFinished === false && mykey.keyCode != 13) {		
		runScript = true;
		
		var input = document.getElementById('fname').value;
		// her ses hvad der staar nu:
		document.getElementById("testID2").innerHTML = input; 	
		
		if (input == randomText) {
			runScript = false;
			scriptHasFinished = true;
		};		
		
	};
};

//********************* clock *********************
var millisecond = 0;
var timeSize = "";
var output = "";
document.getElementById("myclock").innerHTML = "0000000.0";

function timer() {
	if (scriptHasFinished == true) {
       
		clearInterval(clockScript);
		
	}
	//hvis der er gået fr mange sekunder, skal millisecond ikke øges.
	timeSize = (""+millisecond).length;
	if (timeSize > 8) {
		return;
	}
	millisecond++;
	
	output = Array(9-timeSize).join("0") + millisecond;
	output =  output.slice(0,7) + "." + output.slice(7,8) + " sekunder";
	document.getElementById("myclock").innerHTML = output;
};

//********************** reset using enter *******************

//document.onkeydown = checkKey;

document.getElementById('fname').onkeypress = function(mykey){
	if (mykey.keyCode == 13) { //keycode 13 == Enter		
		
		randIndex = Math.floor(Math.random() * sentences.length);
		randomText = sentences[randIndex];
		document.getElementById("testID").innerHTML = randomText;
		runScript = false;
		scriptHasFinished = false;
		document.getElementById("testID2").innerHTML = "&nbsp;"; 	
		clockScript = null;
		millisecond = 0;
		timeSize = "";
		output = "";
		document.getElementById("myclock").innerHTML = "0000000.0";
	}
};

