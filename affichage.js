$(document).ready(function () {
	
	// Gestion de la barre de son
	$('#son [data-toggle="popover"]').popover({
		html : true,
		trigger : "focus",
		content: '<div class="input-group"><input id="barre_son" type="range" min="0" max="100" value="50"></div>'
	});
	
});

let HasCore = 0;
if ( typeof(Storage) !== "undefined" ) {
	// Store
	if ( localStorage.getItem("langue") == null )
		localStorage.setItem("langue", "Drapeau_France.png");
	$('#langue_actuelle').attr("src", "ressources/" + localStorage.getItem("langue"));
	
	if ( localStorage.getItem("couleur_equipe") == null )
		localStorage.setItem("couleur_equipe", "#4d94ff");
	$('.box_tour').css("background", localStorage.getItem("couleur_equipe"));
	if ( localStorage.getItem("couleur_equipe2") == null )
		localStorage.setItem("couleur_equipe2", "#ff751a");
	$('.box_tour2').css("background", localStorage.getItem("couleur_equipe2"));
	
	if ( localStorage.getItem("nom_equipe1") == null )
		localStorage.setItem("nom_equipe1", "Equipe 1");
	if ( document.getElementById("Tour_Eq") != null ) {
		document.getElementById("Tour_Eq").innerHTML = localStorage.getItem("nom_equipe1");
		document.getElementById("tour").innerHTML = localStorage.getItem("nom_equipe1") + " à toi de jouer!";
	}
	if ( localStorage.getItem("nom_equipe2") == null )
		localStorage.setItem("nom_equipe2", "Equipe 2");
	if ( document.getElementById("Tour_Eq2") != null ) {
		document.getElementById("Tour_Eq2").innerHTML = localStorage.getItem("nom_equipe2");
		document.getElementById("Tour_Eq2").innerHTML = localStorage.getItem("nom_equipe2") + " à toi de jouer!";
	}
	
let HasCore=0;
if (typeof(Storage) !== "undefined") {
    // Store
    if(localStorage.getItem("langue")==null)
      localStorage.setItem("langue", "Drapeau_France.png");
    $('#langue_actuelle').attr("src","ressources/"+localStorage.getItem("langue"));

    if(localStorage.getItem("couleur_equipe")==null)
      localStorage.setItem("couleur_equipe", "#4d94ff");
    $('.box_tour').css("background",localStorage.getItem("couleur_equipe"));
    if(localStorage.getItem("couleur_equipe2")==null)
      localStorage.setItem("couleur_equipe2", "#ff751a");
    $('.box_tour2').css("background",localStorage.getItem("couleur_equipe2"));

    if(localStorage.getItem("nom_equipe1")==null)
      localStorage.setItem("nom_equipe1", "Equipe 1");
    if(document.getElementById("Tour_Eq")!=null){
        document.getElementById("Tour_Eq").innerHTML = localStorage.getItem("nom_equipe1");
        document.getElementById("tour").innerHTML = localStorage.getItem("nom_equipe1") + " à toi de jouer!";
    }
    if(localStorage.getItem("nom_equipe2")==null)
      localStorage.setItem("nom_equipe2", "Equipe 2");
    if(document.getElementById("Tour_Eq2")!=null){
        document.getElementById("Tour_Eq2").innerHTML = localStorage.getItem("nom_equipe2");
        document.getElementById("Tour_Eq2").innerHTML = localStorage.getItem("nom_equipe2")+ " à toi de jouer!";
    }
}

function changeNoyauLang () {
	if ( HasCore )
		noyau.langUpdate(getLangue());
}

function AfficherLangues () {
	$('#langues').css("visibility", "visible");
	document.getElementById('langage').onclick = QuitterLangues;
}

function QuitterLangues () {
	$('#langues').css("visibility", "hidden");
	document.getElementById('langage').onclick = AfficherLangues;
}

function ChangerAnglais(){
    $('#langue_actuelle').attr("src","ressources/anglais.jpg");
    $('#langues').css("visibility","hidden");
    document.getElementById('langage').onclick=AfficherLangues;
    localStorage.setItem("langue", "anglais.jpg");
    changeLangue();
}

function ChangerEspagnol(){
    $('#langue_actuelle').attr("src","ressources/espagnol.jpg");
    $('#langues').css("visibility","hidden");
    document.getElementById('langage').onclick=AfficherLangues;
    localStorage.setItem("langue", "espagnol.jpg");
    changeLangue();
}

function ChangerFrançais(){
    $('#langue_actuelle').attr("src","ressources/Drapeau_France.png");
    $('#langues').css("visibility","hidden");
    document.getElementById('langage').onclick=AfficherLangues;
    localStorage.setItem("langue", "Drapeau_France.png");
    changeLangue();
}

function banniereRemove () {
	$('#tour').css("visibility", "hidden");
}

function PhaseCoequipier(){
  localStorage.setItem("indice", document.getElementById('choix_ME_inside').value);
  $('#choix_ME_inside').css("display","none");
  $('#choix_ME_inside2').css("display","none");
  $('#choix_ME_but').css("display","none");
  $('#choix_J_inside').css("display","inline-block");
  document.getElementById("choix_J_inside").innerHTML = "Indice : " + localStorage.getItem("indice") + " Nombre de cartes visées : " + localStorage.getItem("nbindice");
}

function ModeCompet(){
    localStorage.setItem("mode", "competitive");
    window.open("competitif.html","_self");
}

function ModeCoop () {
	localStorage.setItem("mode", "cooperative");
	window.open("coop.html", "_self");
}

function AfficheJoueur(){
  document.getElementById('choix_J_inside').innerHTML = "Indice :" + indice + " en " + indiceNb + " cartes";
  $('#choix_J_inside').css("display","block");
  $('#choix_ME_inside').css("display","none ");
  $('#choix_ME_inside2').css("display","none");
  $('#choix_ME_but').css("display","none");
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
    document.getElementById('nbj1').value;
    localStorage.setItem("nbj1", document.getElementById('nbj1').value);
    document.getElementById('nbj2').value;
    localStorage.setItem("nbj2", document.getElementById('nbj2').value);
    window.open("plateau.html","_self");
}
