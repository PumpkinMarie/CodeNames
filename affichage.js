if (typeof(Storage) !== "undefined") {
    // Store
    if(localStorage.getItem("langue")==null)
      localStorage.setItem("langue", "Drapeau_France.png");
    $('#langue_actuelle').attr("src","ressources/"+localStorage.getItem("langue"));
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
    document.getElementById('langage').onclick=AfficherLangues;
    localStorage.setItem("langue", "anglais.jpg");
}

function ChangerEspagnol(){
    $('#langue_actuelle').attr("src","ressources/espagnol.jpg");
    $('#langues').css("visibility","hidden");
    document.getElementById('langage').onclick=AfficherLangues;
    localStorage.setItem("langue", "espagnol.jpg");
}

function ChangerFrançais(){
    $('#langue_actuelle').attr("src","ressources/Drapeau_France.png");
    $('#langues').css("visibility","hidden");
    document.getElementById('langage').onclick=AfficherLangues;
    localStorage.setItem("langue", "Drapeau_France.png");
}

function banniereRemove(){
  $('#tour').css("visibility","hidden");
}
