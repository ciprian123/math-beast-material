$(document).ready(function(){
    function default_theme() {
        $("body, input, #adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #ridicare_putere_tab, #radical_tab, #setari_tab, .conversie_tab, .solutions").css("background" , "white");
        $(".presol_add, .presol_sub, .presol_inm, .presol_imp, .presol_pow, .presol_rad, .presol, #rezultatulAdunarii, #rezultatulScaderii, #rezultatulInmultirii, #rezultatulImpartirii, #rezultatulRadicalului, #rezultatulRidicarii, .b, input").css("color" , "#3d4754");
    }

    function light_theme() {
        $("body, input, #adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #ridicare_putere_tab, #radical_tab, #setari_tab, .conversie_tab, .solutions").css("background" , "white");
        $(".presol_add, .presol_sub, .presol_inm, .presol_imp, .presol_pow, .presol_rad, .presol, #rezultatulAdunarii, #rezultatulScaderii, #rezultatulInmultirii, #rezultatulImpartirii, #rezultatulRadicalului, #rezultatulRidicarii, .b, input").css("color" , "#3d4754");
    }

    function dark_theme() {
        $("body, input, #adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #ridicare_putere_tab, #radical_tab, #setari_tab, .conversie_tab, .solutions").css("background" , "#212121");
        $(".presol_add, .presol_sub, .presol_inm, .presol_imp, .presol_pow, .presol_rad, .presol, #rezultatulAdunarii, #rezultatulScaderii, #rezultatulInmultirii, #rezultatulImpartirii, #rezultatulRadicalului, #rezultatulRidicarii, .b, input").css("color" , "white");
    }

    default_theme();

    $("#light").click(function(){
        light_theme();
    });

    $("#dark").click(function(){
        dark_theme();
    });

});