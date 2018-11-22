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

getLangue(){
    lang=localStorage.getItem("langue");
    if(lang=="Drapeau_France.png")
      return FR;
    else if(lang=="anglais.jpg")
      return EN;
    else if(lang=="espagnol.jpg")
      return ES;
    return FR; //else
}

getMode(){
  return localStorage.getItem("mode");
}

cardsUpdate(){

}

getEquipe1(){
  return localStorage.getItem("nom_equipe1");
}

getNumberEquipe1(){
  return localStorage.getItem("nbj1");
}

getEquipe2(){
  return localStorage.getItem("nom_equipe2");
}

getNumberEquipe2(){
  return localStorage.getItem("nbj2");
}

window.onload= function(){
  //Création du noyau
  let noyau = new Noyau(getMode(), getLangue(), getEquipe1(), getNumberEquipe1(), getEquipe2(), getNumberEquipe2());
  HasCore=1;
}
