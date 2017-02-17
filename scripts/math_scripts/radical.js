function getAndRad() {
    let numar_1, numar_2;
    let firePlay = new Audio();
    let input_gol = "gol";

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberR").val().length > 0) {
            numar_1 = Number($("#FirstNumberR").val());
            return Number(numar_1);
        }
        else
            return input_gol;
    }

    function getSecondNumber() {
        if ($("#SecondNumberR").val().length > 0) {
            numar_2 = Number($("#SecondNumberR").val());
            return Number(numar_2);
        }
        else
            return input_gol;
    }

    numar_1 = getFirstNumber();
    numar_2 = getSecondNumber();

    if ((numar_1 == input_gol) && (numar_2 == input_gol))
        $("#rezultatulRadicalului").html("Campurile sunt goale...");
    else if (((numar_1 != input_gol) && numar_2 == input_gol) || ((numar_1 == input_gol) && numar_2 != input_gol))
        $("#rezultatulRadicalului").html("Scrieti inca o valoare...");
    else {
        if (numar_2 > 100 || numar_2 < 0)
            $("#rezultatulRadicalului").html("Ordinul > 0 si < 100");
        else {
            $("#rezultatulRadicalului").html(Math.pow(numar_1, 1 / numar_2));
            fire();
        }
    }
}
