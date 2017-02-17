function getAndPow() {
    let numar_1, numar_2;
    let firePlay = new Audio();
    let input_gol = "gol";

    function fire() {
        firePlay.src = "fire.mp3";
        $("firePlay");
        firePlay.play();
    }

    function getFirstNumber() {
        if ($("#FirstNumberPow").val().length > 0) {
            numar_1 = Number($("#FirstNumberPow").val());
            return Number(numar_1);
        }
        else
            return input_gol;
    }

    function getSecondNumber() {
        if ($("#SecondNumberPow").val().length > 0) {
            numar_2 = Number($("#SecondNumberPow").val());
            return Number(numar_2);
        }
        else
            return input_gol;
    }

    numar_1 = getFirstNumber();
    numar_2 = getSecondNumber();
    if ((numar_1 == input_gol) && (numar_2 == input_gol))
        $("#rezultatulRidicarii").html("Campurile sunt goale...");
    else if (((numar_1 != input_gol) && numar_2 == input_gol) || ((numar_1 == input_gol) && numar_2 != input_gol))
        $("#rezultatulRidicarii").html("Scrieti inca o valoare...");
    else {
        if (numar_2 > 100)
            $("#rezultatulRidicarii").html("Exponentul maxim este 100");
        else {
            $("#rezultatulRidicarii").html(Math.pow(numar_1, numar_2));
            fire();
        }
    }
}
