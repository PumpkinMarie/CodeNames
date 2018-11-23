let TourEq = 1;
let TourME = 1;
let TourJ = 0;

//Temporaire
/*function getWord(entries, index, language) {
	if (language == FR) {
		return entries[index][0];
	} else if (language == EN) {
		return entries[index][1][0];
	} else if (language == ES) {
		return entries[index][1][1];
	}
}
function getWordRandom(language) {
	let entries = Object.entries(Dico);
	let rand = Math.floor(Math.random() * Math.floor(entries.length));
	let word = getWord(entries, rand, language);
	while (word == "Not Translated") {
		rand = Math.floor(Math.random() * Math.floor(entries.length));
		word = getWord(entries, rand, language);
	}
	return word;
}//Fin temporaire*/

let noyau;

function getLangue () {
	let lang = localStorage.getItem("langue");
	console.log("langue="+lang)
	if ( lang == "./ressources/Drapeau_France.png" )
		return FR;
	else if ( lang == "./ressources/anglais.jpg" )
		return EN;
	else if ( lang == "./ressources/espagnol.jpg" )
		return ES;
	else
	return FR; //else
}


function getMode () {
	return localStorage.getItem("mode");
}

function ApplyColor ( card, color ) {//card's type: Blue,Red,Grey,Black,hidden
	let c = "FF4500";
	if ( color == "Blue" ) {
		c = "1AA3FF";
	}
	else if ( color == "Red" ) {
		c = "FF3300";
	}
	else if ( color == "Grey" ) {
		c = "A3A3C2";
	}
	else if ( color == "Black" ) {
		c = "000000";
	}
	card.style.backgroundColor = "#" + c;
}

function seeAsPlayer () {
	//On récupère les cartes
	let CardArray = noyau.getBoardState();
	let htmlCard = new Array();
	for ( let i = 0 ; i < 5 ; i++ ) {
		htmlCard[i] = new Array();
		for ( let j = 0 ; j < 5 ; j++ ) {
			htmlCard[i][j] = document.getElementById("c" + i + j);
			htmlCard[i][j].innerHTML = CardArray[i][j].getValue();
			ApplyColor(htmlCard[i][j].parentElement, CardArray[i][j].seeAsPlayer());
		}
	}
}

function cardsUpdate () {
	//On récupère les cartes
	let CardArray = noyau.getBoardState();
	let htmlCard = new Array();
	for ( let i = 0 ; i < 5 ; i++ ) {
		htmlCard[i] = new Array();
		for ( let j = 0 ; j < 5 ; j++ ) {
			htmlCard[i][j] = document.getElementById("c" + i + j);
			htmlCard[i][j].innerHTML = CardArray[i][j].getValue();
			ApplyColor(htmlCard[i][j].parentElement, CardArray[i][j].getTeam());
		}
	}
}

function getEquipe1 () {
	return localStorage.getItem("nom_equipe1");
}

function getNumberEquipe1 () {
	return localStorage.getItem("nbj1");
}

function getEquipe2 () {
	return localStorage.getItem("nom_equipe2");
}

function getNumberEquipe2 () {
	return localStorage.getItem("nbj2");
}

let canPass;

window.onload = function () {
	//Création du noyau
	noyau = new Noyau(getMode(), getLangue(), getEquipe1(), getNumberEquipe1(), getEquipe2(), getNumberEquipe2());
	HasCore = 1;
	canPass = false;
	cardsUpdate();
	console.log("Noyau créé");
	console.log("Current:" + noyau.teams[noyau.currentTeam].getName());
	console.log(noyau.teams[0].getName() + ": " + noyau.teams[0].getScore());
	console.log(noyau.teams[1].getName() + ": " + noyau.teams[0].getScore());
}

let indice;
let indiceNb;
let masterSelection = new Array();

function GO () {
	noyau.endTour();
	cardsUpdate();
	PhaseME();
}

function pursue () {
	let e = document.getElementById("closingRed");
	if ( canPass ) {//sinon faux positif
		cardsUpdate();
		PhaseME();
	}
	e.style.opacity = "0";
}

function waitForEnding () {
	seeAsPlayer();
	let e = document.getElementById("closingRed");
	e.style.opacity = "1";
}

function Click_Carte ( x, y ) {
	affCarte = "#c" + x + y;
	if ( !noyau.isMaster() ) {//Tour du joueur
		if ( !noyau.verifySpyCard(noyau.getBoardState()[x][y]) ) {//le tour se termine
			canPass = true;
			waitForEnding();
			//Message de changement de tour
		}
		else {//Les joueurs continuent
			$("#choix_J").css("display", "inline-block");
			cardsUpdate();
			//Message de félicitation
		}
	}
	else {//On ajoute à la sélection du master
		let test = false;
		let i;
		for ( i = 0 ; i < masterSelection.length ; i++ ) {
			if ( masterSelection[i].getValue() == noyau.getBoardState()[x][y].getValue() ) {
				test = true;
				break;
			}
		}
		if ( !test ) {//Carte pas présente, on ajoute
			masterSelection.push(noyau.getBoardState()[x][y]);
			$(affCarte).parent().css("border", "white 2px solid");
		}
		else {
			masterSelection.splice(i, 1);//On retire la carte
			$(affCarte).parent().css("border", "black 2px solid");
		}

		cardsUpdate();
	}
	//cardsUpdate();//On met à jour l'affichage des cartes
	if ( noyau.isEndGame() ) {
		//Le jeu est terminé
		let winnerName = noyau.winner;
		banniereFJ(winnerName);
	}
}

function Clic_MasterAgent () {
	indice = document.getElementById("choix_ME_inside").value;
	indiceNb = document.getElementById("choix_ME_inside2").value;
	if ( indiceNb != masterSelection.length ) {
		//Erreur lors de la sélection!!!!!!!
	}
	else {
		AfficheJoueur();
		noyau.setMasterSelection(masterSelection);//Change automatiquement le tour noyau
		masterSelection = new Array();//On reset
	}
	cardsUpdate();//On affiche les cartes des joueurs si réussi, sinon cartes ME
}
