function Afficher_Langues(){
    $('#langues').css("visibility","visible");
    $('#langage').onclick=Quitter_Langues;
}

function Quitter_Langues(){
    $('#langues').css("visibility","hidden");
    $('#langage').onclick=Afficher_Langues;
}
