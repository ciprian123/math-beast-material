$(document).ready(function(){
    // initial state of the app
    $("header h1").html("Math Beast").fadeIn("slow");
    $(".conversie_tab, #conversie_info").show();
    $("header, #alte_informatii").css("background", "#3F51B5");
    $("#menu").css("background", "#FF4081");
    $("#alte_informatii h2, .card a").css("color", "#FF4081");
    $("header nav, #conversie_info").css("background", "#303F9F");
    $("header nav ul li a, .card .content").css("color", "#C5CAE9");


    // conversie tab event-listener (click)
    $("#conversie").click(function(){
        $("div.conversie_tab, #conversie_info").show();
        $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #ridicare_putere_tab, #putere_info, #radical_tab, #radical_info").hide();
        $("#menu").css("background", "#FF4081");
        $("header, #alte_informatii").css("background", "#3F51B5");
        $("header h1").html("Baze de numeratie");
        $("#alte_informatii h2, .card a").css("color", "#FF4081");
        $("header nav, #conversie_info").css("background", "#303F9F");
        $("header nav ul li a, .card .content").css("color", "#C5CAE9");
    });

    // adunare tab event-listener (click)
   $("#plus").click(function(){
       $("div#adunare_tab, #adunare_info").show();
       $("#inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tabm, #putere_info").hide();
       $("#menu").css("background", "#607D8B");
       $("header, #alte_informatii").css("background", "#FFC107");
       $("header h1").html("Adunarea numerelor");
       $("#alte_informatii h2, .card a").css("color", "#607D8B");
       $("header nav, #adunare_info").css("background", "#FFA000");
       $("header nav ul li a, .card .content").css("color", "#FFECB3");
   });

    // scadere tab event-listener (click)
   $("#minus").click(function(){
       $("div#scadere_tab, #scadere_info").show();
       $("#adunare_tab, #adunare_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info ,#ridicare_putere_tabm, #putere_info").hide();
       $("#menu").css("background", "#FF4081");
       $("header, #alte_informatii").css("background", "#009688");
       $("header h1").html("Scaderea numerelor");
       $("#alte_informatii h2, .card a").css("color", "#FF4081");
       $("header nav, #scadere_info").css("background", "#00796B");
       $("header nav ul li a, .card .content").css("color", "#B2DFDB");
   });

    // inmultire tab event-listener (click)
   $("#ori").click(function(){
       $("div#inmultire_tab, #inmultire_info").show();
       $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tabm, #putere_info").hide();
       $("#menu").css("background", "#FFC107");
       $("header, #alte_informatii").css("background", "#03A9F4");
       $("header h1").html("Inmultirea numerelor");
       $("#alte_informatii h2, .card a").css("color", "#FFC107");
       $("header nav, #inmultire_info").css("background", "#0288D1");
       $("header nav ul li a, .card .content").css("color", "#B3E5FC");
   });

    // impartire tab event-listener (click)
   $("#divide").click(function(){
       $("div#impartire_tab, #impartire_info").show();
       $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tabm, #putere_info").hide();
       $("#menu").css("background", "#9E9E9E");
       $("header, #alte_informatii").css("background", "#F44336");
       $("header h1").html("Impartirea numerelor");
       $("#alte_informatii h2, .card a").css("color", "#9E9E9E");
       $("header nav, #impartire_info").css("background", "#D32F2F");
       $("header nav ul li a, .card .content").css("color", "#FFCDD2");
   });

    // radicali tab event-listener (click)
   $("#radical").click(function(){
       $("div#radical_tab, #radical_info").show();
       $("#adunare_tab,#adunare_info,  #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #ridicare_putere_tab, #putere_info, #setari_tab, .conversie_tab, #conversie_info, #ridicare_putere_tabm, #putere_info").hide();
       $("#menu").css("background", "#FF5722");
       $("header, #alte_informatii").css("background", "#607D8B");
       $("header h1").html("Radicali ai numerelor");
       $("#alte_informatii h2, .card a").css("color", "#FF5722");
       $("header nav, #radical_info").css("background", "#455A64");
       $("header nav ul li a, .card .content").css("color", "#CFD8DC");
   });

    // puteri tab event-listener (click)
   $("#putere").click(function(){
       $("div#ridicare_putere_tab, #putere_info").show();
       $("#adunare_tab, #adunare_info, #scadere_tab, #scadere_info, #inmultire_tab, #inmultire_info, #impartire_tab, #impartire_info, #radical_tab, #radical_info, #setari_tab, .conversie_tab, #conversie_info").hide();
       $("#menu").css("background", "#FF9800");
       $("header, #alte_informatii").css("background", "#00BCD4");
       $("header h1").html("Puteri ale numerelor");
       $("#alte_informatii h2, .card a").css("color", "#FF9800");
       $("header nav, #putere_info").css("background", "#0097A7");
       $("header nav ul li a, .card .content").css("color", "#B2EBF2");
   });

    // setari tab event-listener (click)
   $("#setari").click(function(){
       $("div#setari_tab").show();
       $("#adunare_tab, #scadere_tab, #inmultire_tab, #impartire_tab, #radical_tab, #ridicare_putere_tab, .conversie_tab, #adunare_info, #scadere_info, #inmultire_info, #impartire_info, #conversie_info, #putere_info, #radical_info, #radical_info").hide();
       $("#menu").css("background", "#68EFAD");
       $("header, #alte_informatii").css("background", "#9C27B0");
       $("header h1").html("Setari");
       $("#alte_informatii h2, .card a").css("color", "#68EFAD");
       $("header nav").css("background", "#7B1FA2");
       $("header nav ul li a, .card .content").css("color", "#E1BEE7");
   });
});