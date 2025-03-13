function changeNumGuests() {
    let numGuests = $("#numGuests").val();
    console.log(numGuests);
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