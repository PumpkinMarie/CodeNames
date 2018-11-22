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
	let word = getWord(entries, rand, EN);
	while (word == "Not Translated") {
		rand = Math.floor(Math.random() * Math.floor(entries.length));
		word = getWord(entries, rand, EN);
	}
	return word;
}//Fin temporaire

let noyau;

function getLangue(){
    lang=localStorage.getItem("langue");
    if(lang=="Drapeau_France.png")
      return FR;
    else if(lang=="anglais.jpg")
      return EN;
    else if(lang=="espagnol.jpg")
      return ES;
    return FR; //else
}

function getMode(){
  return localStorage.getItem("mode");
}

function ApplyColor(card,color){//card's type: Blue,Red,Grey,Black,hidden
  let c=#FF4500;
  if(color=="Blue"){
  }
  else if(color=="Red"){
    c=0xFF3300;
  }
  else if(color=="Grey"){

  }
  else if(color=="Black"){

  }
  card.css("background", c);
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
