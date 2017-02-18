function getAndSub() {
    let numar_1, numar_2;
    let firePlay = new Audio();
    let input_gol = "gol";

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberM").val().length > 0) {
            numar_1 = Number($("#FirstNumberM").val());
            return Number(numar_1);
        }
        else
            return input_gol;
    }

    function getSecondNumber() {
        if ($("#SecondNumberM").val().length > 0) {
            numar_2 = Number($("#SecondNumberM").val());
            return Number(numar_2);
        }
        else
            return input_gol;
    }

    if ((getFirstNumber() == input_gol) && (getSecondNumber() == input_gol))
        $("#rezultatulScaderii").html("Campurile sunt goale...");
    else if (((getFirstNumber() != input_gol) && getSecondNumber() == input_gol) || ((getFirstNumber() == input_gol) && getSecondNumber() != input_gol))
        $("#rezultatulScaderii").html("Scrie inca o valoare...");
    else {
        $("#rezultatulScaderii").html(getFirstNumber() - getSecondNumber());
        fire();
    }
}