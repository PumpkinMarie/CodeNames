let TourEq=1;
let TourME=1;
let TourJ=0;

//Temporaire
function getWord(entries, index, language) {
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
}//Fin temporaire

let noyau;

function getLangue(){
    let lang=localStorage.getItem("langue");
    if(lang=="Drapeau_France.png")
      return FR;
    else if(lang=="anglais.jpg")
      return EN;
    else if(lang=="espagnol.jpg")
      return ES;
    return FR; //else
}

function changeLangue(){
  noyau.langUpdate(getLangue);
}

function getMode(){
  return localStorage.getItem("mode");
}

function ApplyColor(card,color){//card's type: Blue,Red,Grey,Black,hidden
  let c="FF4500";
  if(color=="Blue"){
    c="1AA3FF";
  }
  else if(color=="Red"){
    c="FF3300";
  }
  else if(color=="Grey"){
    c="A3A3C2";
  }
  else if(color=="Black"){
    c="000000";
  }
  card.style.backgroundColor= "#"+c;
}

function cardsUpdate(){
  //On récupère les cartes
  let CardArray=noyau.getBoardState();
  let htmlCard=new Array();
  for(let i=0;i<5;i++){
     htmlCard[i]=new Array();
     for(let j=0;j<5;j++){
        htmlCard[i][j]=document.getElementById("c"+i+j);
        htmlCard[i][j].innerHTML=CardArray[i][j].getValue();
        ApplyColor(htmlCard[i][j],CardArray[i][j].getTeam());
     }
  }

}

function getEquipe1(){
  return localStorage.getItem("nom_equipe1");
}

function getNumberEquipe1(){
  return localStorage.getItem("nbj1");
}

function getEquipe2(){
  return localStorage.getItem("nom_equipe2");
}

function getNumberEquipe2(){
  return localStorage.getItem("nbj2");
}

window.onload= function(){
  //Création du noyau
  noyau = new Noyau(getMode(), getLangue(), getEquipe1(), getNumberEquipe1(), getEquipe2(), getNumberEquipe2());
  HasCore=1;
  cardsUpdate();
  console.log("Noyau créé");
}
let masterSelection=new Array();
function Click_Carte(x,y){
	if(!noyau.isMaster()){//Tour du joueur
		if(!verifySpyCard(getBoardState()[i][j])){//le tour se termine
      cardsUpdate();
      masterSelection=new Array();
      //Message de changement de tour
    }
    else{//Les joueurs continuent
    //Message de félicitation
    }
	}
  else{//On ajoute à la sélection du master
    masterSelection.push(getBoardState()[i][j]);
    //Changer apparence de la carte sélectionnée?
  }
  cardsUpdate();//On met à jour l'affichage des cartes
}
