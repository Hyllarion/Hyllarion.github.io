var descriptions = [
    "Schutz, Obdach",
    "Schöpfkelle, Schimpfwort für Frauen",
    "Sieb, Filter, Trichter",
    "Tüte",
    "Schnuller",
    "moderig, muffig riechen",
    "schlechtes Messer oder Gerät",
    "mittelgroßer Korb",
    "Nachttopf",
    "Handfeger",
    "fahrendes Volk, Lausbub, unstete Menschen",
    "Nichtsnutz",
    "mürrischer Mensch",
    "Schimpfwort für Frau",
    "einfältiger ungeschickter Mann",
    "unartiges Kind, Göre",
    "begriffsstutzige liederliche Person",
    "Musikant, aufschneiderische männliche Person",
    "hagere geschwätzige Person",
    "fiktive Person"
];

var words = [
    "Schärmi",
    "Schapfe",
    "Seechter",
    "Guggele",
    "Lulli",
    "michdele",
    "Groddegiggser",
    "Zeine",
    "Boddschamber",
    "Kehrwisch",
    "Schiirebirzler",
    "Lumbeseggel",
    "Bruddli",
    "Duendle",
    "Dilldapp",
    "Gof",
    "Schelle",
    "Schnitzgieger",
    "Raffle",
    "Bloßarsch"
];

var shuffleArray = [];

function init() {

    for (let i = 0; i < words.length; i++) {
        while (true) {
            let rdm = Math.floor(Math.random() * words.length);
            if (!shuffleArray.includes(rdm)) {
                shuffleArray.push(rdm);
                break; // Only out of while
            }
        }
    }

    console.log(shuffleArray);

    for (let i = 0; i < words.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = "---";
        document.getElementsByClassName('objectDescriptions')[i].appendChild(option);
    }

    var elements = document.getElementsByClassName('objectWords');
    for (let i = 0; i < words.length; i++) {
        elements[i].innerHTML = words[shuffleArray[i]];
        var selections = document.getElementsByClassName('objectDescriptions');
        for (let select of selections) {
            var option = document.createElement('option');
            option.innerHTML = descriptions[i];
            select.appendChild(option);
        }
    }
}

function onClickCheckObjects() {
    var select = document.getElementsByClassName('objectDescriptions');
    let checkSum = 0;
    for (let i = 0; i < words.length; i++) {
        // console.log(select[i]['selectedIndex']);
        // console.log(select[i].options[select[i]['selectedIndex']].text);
        // console.log(descriptions[shuffleArray[i]]);
        // console.log(descriptions[shuffleArray[i]] == select[i].options[select[i]['selectedIndex']].text);
        if (descriptions[shuffleArray[i]] == select[i].options[select[i]['selectedIndex']].text) {
            checkSum++;
            document.getElementsByClassName("objectWords")[i].style.color = "green";
        } else {
            document.getElementsByClassName("objectWords")[i].style.color = "red";
        }
    }
    if (checkSum == words.length) {
        alert("Super,\nalles richtig!");
    } else {
        alert("Noch " + (words.length - checkSum) + " Fehler");
    }
}