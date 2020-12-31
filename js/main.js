var audio_SA = new Audio("./data/audio/Sprung-Auf.mp3");
var audio_falsch = new Audio("./data/audio/falsch.m4a");

function check1() {
	var sum = "";
	var color = "";
	for (var i = 0; i < 3; i++) {
		sum += document.getElementById("raetsel1").getElementsByTagName("input")[i].value;
	}
	if (sum == "264") {
		document.getElementById("raetsel1").getElementsByTagName("output")[0].style.color = "green";
		document.getElementById("raetsel1").getElementsByTagName("output")[0].innerHTML = "Rätsel richtig gelöst!";
		color = "green";
		play_audio_SA();
		document.getElementById("raetsel1zusatz").style.display = "block";
	} else {
		document.getElementById("raetsel1").getElementsByTagName("output")[0].style.color = "red";
		document.getElementById("raetsel1").getElementsByTagName("output")[0].innerHTML = "Leider falsch";
		color = "red";
		audio_falsch.play();
		document.getElementById("raetsel1zusatz").style.display = "none";
	}
	for (var i = 0; i < 3; i++) {
		sum += document.getElementById("raetsel1").getElementsByTagName("input")[i].style.backgroundColor = color;
	}
}

function play_audio_SA() {
	audio_SA.play();
}

function play_audio_falsch() {
	audio_falsch.play();
}

function check1add() {
	var name = document.getElementById("raetsel1zusatz").getElementsByTagName("input")[0].value.toLowerCase();
	if (name == "konny" || name == "konni" || name == "kony" || name == "koni") {
		document.getElementById("raetsel1zusatz").getElementsByTagName("output")[0].innerHTML = "Richtig!";
		document.getElementById("raetsel1zusatz").getElementsByTagName("input")[0].style.backgroundColor = "green";
	} else {
		document.getElementById("raetsel1zusatz").getElementsByTagName("output")[0].innerHTML = "";
		document.getElementById("raetsel1zusatz").getElementsByTagName("input")[0].style.backgroundColor = "white";
	}
}