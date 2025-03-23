function changeNumGuests() {
    let numGuests = $("#numGuests").val();
    if (numGuests == 0) {
        $("#textAbsage").attr("name", "AbsageName");
        $("#textAnmerkungen").removeAttr("name");
        $("#textBeitrag").removeAttr("name");
        $("#duration").removeAttr("name");
        $("#textMitbringsel").removeAttr("name");
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
        $("#textAbsage").removeAttr("name");
        $("#textAnmerkungen").attr("name", "Anmerkungen");
        $("#textBeitrag").attr("name", "Beitrag");
        $("#duration").attr("name", "Dauer-Beitrag");
        $("#textMitbringsel").attr("name", "Mitbringsel");
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
            $("#name" + i).attr("name", "name" + i);
            $("#radio-1-" + i).attr("name", "Essen-" + i);
            $("#radio-2-" + i).attr("name", "Essen-" + i);
            $("#radio-3-" + i).attr("name", "Essen-" + i);
            $("#kind" + i).attr("name", "Kind" + i);
        } else {
            $("#guest" + i).addClass("hiddenGuest");
            $("#name" + i).removeAttr("name");
            $("#radio-1-" + i).removeAttr("name");
            $("#radio-2-" + i).removeAttr("name");
            $("#radio-3-" + i).removeAttr("name");
            $("#kind" + i).removeAttr("name");
        }
    }
}

$(document).ready(function() {
    changeNumGuests();
});