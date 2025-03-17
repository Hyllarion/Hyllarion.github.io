function changeNumGuests() {
    let numGuests = $("#numGuests").val();
    if (numGuests == 0) {
        document.getElementById("numGuests").style.width = "25rem";
        document.getElementById("absage-name").style.display = "block";
        document.getElementById("anmerkungen").style.display = "none";
        document.getElementById("anmerkungen-trenner").style.display = "none";
        document.getElementById("beitrag").style.display = "none";
        document.getElementById("beitrag-trenner").style.display = "none";
        document.getElementById("duration-label").style.display = "none";
        document.getElementById("mitbringsel").style.display = "none";
        document.getElementById("mitbringsel-trenner").style.display = "none";
    } else {
        document.getElementById("numGuests").style.width = "10rem";
        document.getElementById("absage-name").style.display = "none";
        document.getElementById("anmerkungen").style.display = "block";
        document.getElementById("anmerkungen-trenner").style.display = "block";
        document.getElementById("beitrag").style.display = "block";
        document.getElementById("beitrag-trenner").style.display = "block";
        document.getElementById("duration-label").style.display = "block";
        document.getElementById("mitbringsel").style.display = "block";
        document.getElementById("mitbringsel-trenner").style.display = "block";
    }
    // console.log(numGuests);
    for (let i = 1; i <= 8; i++) {
        if (i <= numGuests) {
            $("#guest" + i).removeClass("hiddenGuest");
        } else {
            $("#guest" + i).addClass("hiddenGuest");
        }
    }
}

$(document).ready(function() {
    changeNumGuests();
});