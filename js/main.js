var audio_SA = new Audio("./data/audio/Sprung-Auf.mp3");

function check1() {
	var sum = "";
	var color = "";
	for (var i = 0; i < 3; i++) {
		sum += document.getElementById("raetsel1").getElementsByTagName("input")[i].value;
	}
	if (sum == "264") {
		document.getElementById("raetsel1").getElementsByTagName("output")[0].innerHTML = "Rätsel richtig gelöst!";
		color = "green";
		audio_SA.play();
		document.getElementById("raetsel1zusatz").style.display = "block";
	} else {
		document.getElementById("raetsel1").getElementsByTagName("output")[0].innerHTML = "";
		color = "white";
		document.getElementById("raetsel1zusatz").style.display = "hidden";
	}
	for (var i = 0; i < 3; i++) {
		sum += document.getElementById("raetsel1").getElementsByTagName("input")[i].style.backgroundColor = color;
	}
}

function play_audio_SA() {
	audio_SA.play();
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