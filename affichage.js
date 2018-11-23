$(document).ready(function () {
	let tmp1, tmp2, tmp3;
		
	// Gestion de la barre de son
	$('#son [data-toggle="popover"]').popover({
		html : true,
		trigger : "focus",
		content: '<div class="input-group"><input id="barre_son" type="range" min="0" max="100" value="50"></div>'
	});
	
	// Gestion de la langue
	tmp1 = $('#langue_actuelle');
	if (window.localStorage && window.localStorage.hasOwnProperty('langue')) {
		tmp2 = tmp1.attr('src');
		tmp3 = localStorage.getItem('langue');
		if ( tmp2 !== tmp3 ) {
			tmp1.attr('src', tmp3);
		}
	}
	else {
		tmp1.attr('src', 'ressources/Drapeau_France.png');
	}
	
	// Gestion de l'exit du jeu
	$('#exit').click(function() {
		if (window.localStorage) {
			for (key in localStorage) {
				localStorage.removeItem(key);
			}
		}
	});
	
	
	// Gestion modal début plateau.html
	tmp1 = $('#btn-modal-start');
	tmp2 = tmp1.text();
	tmp1.text( tmp2 + noyau.teams[noyau.currentTeam].getColor());
});

let HasCore=0;
if (typeof(Storage) !== "undefined") {
    // Store
    if(localStorage.getItem("langue")==null)
      localStorage.setItem("langue", "ressources/Drapeau_France.png");
    $('#langue_actuelle').attr("src",localStorage.getItem("langue"));

    if(localStorage.getItem("couleur_equipe")==null) localStorage.setItem("couleur_equipe", "#4d94ff");
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

function changeNoyauLang() {
	if ( HasCore )
		noyau.langUpdate(getLangue());
}

function ChangerAnglais(){
    $('#langue_actuelle').attr("src","ressources/anglais.jpg");
    $('#langues').css("visibility","hidden");
    localStorage.setItem("langue", "ressources/anglais.jpg");
    changeLangue();
}

function ChangerEspagnol(){
    $('#langue_actuelle').attr("src","ressources/espagnol.jpg");
    $('#langues').css("visibility","hidden");
    localStorage.setItem("langue", "ressources/espagnol.jpg");
    changeLangue();
}

function ChangerFrançais(){
    $('#langue_actuelle').attr("src","ressources/Drapeau_France.png");
    $('#langues').css("visibility","hidden");
    localStorage.setItem("langue", "ressources/Drapeau_France.png");
    changeLangue();
}

function banniereRemove () {
	$('#tour').css("visibility", "hidden");
}

function banniereAffiche () {
	console.log(noyau.teams[noyau.currentTeam].getName()+": "+noyau.teams[noyau.currentTeam].getScore());
   test = noyau.teams[noyau.currentTeam].getName();
   document.getElementById("tour").innerHTML = test + " à toi de jouer!";
	 document.getElementById("Tour_Eq").innerHTML=test;
	 if(noyau.teams[noyau.currentTeam].getColor()=="Blue"){
	 		document.getElementById("Box_tour_id").style.backgroundColor="#1AA3FF";
			document.getElementById("tour").style.backgroundColor="#1AA3FF";
	 }
	 else{
	 		document.getElementById("Box_tour_id").style.backgroundColor="#FF3300";
			document.getElementById("tour").style.backgroundColor="#FF3300";
	 }
	 $('#tour').css("visibility", "visible");
}

function PhaseCoequipier(){
  localStorage.setItem("indice", document.getElementById('choix_ME_inside').value);
  $('#choix_ME_inside').css("display","none");
  $('#choix_ME_inside2').css("display","none");
  $('#choix_ME_but').css("display","none");
  $('#choix_J_inside').css("display","inline-block");
  document.getElementById("choix_J_inside").innerHTML = "Indice : " + localStorage.getItem("indice") + " Nombre de cartes visées : " + localStorage.getItem("nbindice");
}

function PhaseME(){
  test =noyau.teams[noyau.currentTeam].getColor();
  $('#box_tour').css("background",test);
  $('#choix_ME_inside').css("display","inline-block");
  $('#choix_ME_inside2').css("display","inline-block");
  $('#choix_ME_but').css("display","inline-block");
  $('#choix_J_inside').css("display","none");
  $('#choix_J').css("display","none");
  banniereAffiche();

}

function ModeCompet(){
    localStorage.setItem("mode", "competitive");
    window.open("competitif.html","_self");
}

function ModeCoop() {
	localStorage.setItem("mode", "cooperative");
	window.open("coop.html", "_self");
}

function AfficheJoueur(){
  $(".carte").css("box-shadow","0 0");
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

function banniereFJ (nom) {
   document.getElementById("tour").innerHTML = "Bravo" + nom + ". Tu as gagné!";
	 if(noyau.teams[(noyau.currentTeam+1)%2].getColor()=="Blue"){
	 		document.getElementById("Box_tour_id").style.backgroundColor="#1AA3FF";
			document.getElementById("tour").style.backgroundColor="#1AA3FF";
	 }
	 else{
	 		document.getElementById("Box_tour_id").style.backgroundColor="#FF3300";
			document.getElementById("tour").style.backgroundColor="#FF3300";
	 }
	 $('#tour').css("visibility", "visible");
}
