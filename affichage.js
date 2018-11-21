if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("langue", "français");
}

function AfficherLangues(){
    $('#langues').css("visibility","visible");
    document.getElementById('langage').onclick=QuitterLangues;
}

function QuitterLangues(){
    $('#langues').css("visibility","hidden");
    document.getElementById('langage').onclick=AfficherLangues;
}

function ChangerAnglais(){
    $('#langue_actuelle').attr("src","ressources/anglais.jpg");
    $('#langues').css("visibility","hidden");
    
}
