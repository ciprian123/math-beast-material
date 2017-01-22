$(document).ready(function(){

    function init_app_layout() {
        $(".conversie").css("background", "#D81B60");
        $("header h1").html("Math Beast").fadeIn("slow");
        $("#menu, #conversie_info").css("background", "#FF4081");
        $(".conversie_tab, #conversie_info").show();
        $("header, #alte_informatii").css("background", "#3F51B5");
        $("header nav").css("background", "#303F9F");
        $("header nav ul li a, .card .content").css("color", "#C5CAE9");
    }

    init_app_layout();

    function manage_conversii_tab() {
        $(".conversie").css("background", "#D81B60");
        $(".adunare, .scadere, .inmultire, .impartire, .radical, .putere").css("background", "none");
        $("div.conversie_tab, #conversie_info").show();
        $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #ridicare_putere_tab, #putere_info, #radical_tab, #radical_info").hide();
        $("header, #alte_informatii").css("background", "#3F51B5");
        $("header h1").html("Baze de numeratie");
        $("header nav, #conversie_info").css("background", "#303F9F");
        $("header nav ul li a, .card .content").css("color", "#C5CAE9");
        $("#menu, #conversie_info").css("background", "#FF4081");
    }

    function manage_adunare_tab() {
        $(".conversie, .adunare, .scadere, .impartire, .putere, .radical").css("background", "none");
        $(".adunare").css("background", "#37474F");
        $("div#adunare_tab, #adunare_info").show();
        $("#inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tab, #putere_info, #scadere_tab, #scadere_info").hide();
        $("header, #alte_informatii").css("background", "#FFC107");
        $("header h1").html("Adunarea numerelor");
        $("header nav, #adunare_info").css("background", "#FFA000");
        $("header nav ul li a, .card .content").css("color", "#FFECB3");
        $("#menu, #adunare_info").css("background", "#607D8B");
    }

    function manage_scadere_tab() {
        $(".conversie, .adunare, .inmultire, .impartire, .putere, .radical").css("background", "none");
        $(".scadere").css("background", "#D81B60");
        $("div#scadere_tab, #scadere_info").show();
        $("#adunare_tab, #adunare_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info ,#ridicare_putere_tab, #putere_info").hide();
        $("header, #alte_informatii").css("background", "#009688");
        $("header h1").html("Scaderea numerelor");
        $("header nav, #scadere_info").css("background", "#00796B");
        $("header nav ul li a, .card .content").css("color", "#B2DFDB");
        $("#menu, #scadere_info").css("background", "#FF4081");
    }

    function manage_inmultire_tab() {
        $(".conversie, .adunare, .scadere, .impartire, .putere, .radical").css("background", "none");
        $(".inmultire").css("background", "#FFA000");
        $("div#inmultire_tab, #inmultire_info").show();
        $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tab, #putere_info").hide();
        $("header, #alte_informatii").css("background", "#03A9F4");
        $("header h1").html("Inmultirea numerelor");
        $("header nav, #inmultire_info").css("background", "#0288D1");
        $("header nav ul li a, .card .content").css("color", "#B3E5FC");
        $("#menu, #inmultire_info").css("background", "#FFC107");
    }

    function manage_impartire_tab() {
        $(".conversie, .adunare, .scadere, .inmultire, .putere, .radical").css("background", "none");
        $(".impartire").css("background", "#565656");
        $("div#impartire_tab, #impartire_info").show();
        $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tab, #putere_info").hide();
        $("header, #alte_informatii").css("background", "#F44336");
        $("header h1").html("Impartirea numerelor");
        $("header nav, #impartire_info").css("background", "#D32F2F");
        $("header nav ul li a, .card .content").css("color", "#FFCDD2");
        $("#menu, #impartire_info").css("background", "#9E9E9E");
    }

    function manage_radicali_tab() {
        $(".conversie, .adunare, .scadere, .inmultire, .putere, .impartire").css("background", "none");
        $(".radical").css("background", "#E64A19");
        $("div#radical_tab, #radical_info").show();
        $("#adunare_tab, #adunare_info,  #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #ridicare_putere_tab, #putere_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tabm, #putere_info").hide();
        $("header, #alte_informatii").css("background", "#607D8B");
        $("header h1").html("Radicali ai numerelor");
        $("header nav, #radical_info").css("background", "#455A64");
        $("header nav ul li a, .card .content").css("color", "#CFD8DC");
        $("#menu, #radical_info").css("background", "#FF5722");
    }

    function manage_puteri_tab() {
        $(".conversie, .adunare, .scadere, .inmultire, .radical, .impartire").css("background", "none");
        $(".putere").css("background", "#F57C00");
        $("div#ridicare_putere_tab, #putere_info").show();
        $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info").hide();
        $("header, #alte_informatii").css("background", "#00BCD4");
        $("header h1").html("Puteri ale numerelor");
        $("header nav, #putere_info").css("background", "#0097A7");
        $("header nav ul li a, .card .content").css("color", "#B2EBF2");
        $("#menu, #putere_info").css("background", "#FF9800");
    }

    function manage_setari_tab() {
        $(".active").css("background", "none");
        $("div#setari_tab").show();
        $("#adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #radical_tab, #ridicare_putere_tab, .conversie_tab, #adunare_info, #scadere_info, #inmultire_info, #impartire_info, #conversie_info, #putere_info, #radical_info, #radical_info").hide();
        $("#menu").css("background", "#68EFAD");
        $("header, #alte_informatii").css("background", "#9C27B0");
        $("header h1").html("Setari");
        $("header nav").css("background", "#7B1FA2");
        $("header nav ul li a, .card .content").css("color", "#E1BEE7");
    }

    $("#conversie").click(function () {
       manage_conversii_tab();
    });

    $("#plus").click(function () {
       manage_adunare_tab();
    });

    $("#minus").click(function () {
        manage_scadere_tab();
    });

    $("#ori").click(function () {
        manage_inmultire_tab();
    });

    $("#divide").click(function () {
        manage_impartire_tab();
    });

    $("#putere").click(function () {
        manage_puteri_tab();
    });

    $("#radical").click(function () {
       manage_radicali_tab();
    });

    $("#setari").click(function () {
        manage_setari_tab();
    })
});
