if (typeof(Storage) !== "undefined") {
    if(localStorage.getItem("mode")==null)
        window.open("index.html","_self");

    // Store la langue choisie (français par défaut)
    if(localStorage.getItem("langue")==null)
        localStorage.setItem("langue", "Drapeau_France.png");
    $('#langue_actuelle').attr("src","ressources/"+localStorage.getItem("langue"));

    //Store la couleur des équipes
    if(localStorage.getItem("couleur_equipe")==null)
        localStorage.setItem("couleur_equipe", "#4d94ff");
    $('.box_tour').css("background",localStorage.getItem("couleur_equipe"));
    if(localStorage.getItem("couleur_equipe2")==null)
        localStorage.setItem("couleur_equipe2", "#ff751a");
    $('.box_tour2').css("background",localStorage.getItem("couleur_equipe2"));

    //Store le nom des équipes et l'affiche sur la bannière
    if(localStorage.getItem("nom_equipe1")==null)
        localStorage.setItem("nom_equipe1", "Equipe 1");
    document.getElementById("Tour_Eq").innerHTML = localStorage.getItem("nom_equipe1");
    document.getElementById("tour").innerHTML = localStorage.getItem("nom_equipe1") + " à toi de jouer!";
    if(localStorage.getItem("nom_equipe2")==null)
        localStorage.setItem("nom_equipe2", "Equipe 2");
    document.getElementById("Tour_Eq2").innerHTML = localStorage.getItem("nom_equipe2");
    document.getElementById("Tour_Eq2").innerHTML = localStorage.getItem("nom_equipe2")+ " à toi de jouer!";

    if(localStorage.getItem("nbj1")==null)
        localStorage.setItem("nbj1", "2");
    if(localStorage.getItem("nbj2")==null)
        localStorage.setItem("nbj2", "2");
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

function ModeCompet(){
    localStorage.setItem("mode", "competitif");
    window.open("competitif.html","_self");
}

function AjoutEquipes(){
    document.getElementById('col1').value;
    localStorage.setItem("couleur_equipe", document.getElementById('col1').value);
    document.getElementById('col2').value;
    localStorage.setItem("couleur_equipe2", document.getElementById('col2').value);

    document.getElementById('nom1').value;
    localStorage.setItem("nom_equipe1", document.getElementById('nom1').value);
    document.getElementById('nom2').value;
    localStorage.setItem("nom_equipe2", document.getElementById('nom2').value);
    document.getElementById('nom2').value;

    localStorage.setItem("nbj1", document.getElementById('nbj1').value);
    window.open("plateau.html","_self");
    localStorage.setItem("nbj2", document.getElementById('nbj2').value);
    window.open("plateau.html","_self");
}
