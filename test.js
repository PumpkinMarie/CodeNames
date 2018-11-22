
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
}

window.onload = function () {
	//on teste la création d'une langue
	let lang = new Langue();
	//On teste la création d'un noyau
	let noyau = new Noyau("cooperative", EN, "Les bleus", 2, "Les rouges", 3);
	//On teste le code du fichier board
	let cardBoard = noyau.getBoardState();
	for (let i = 0; i < 5; i++) {
		let message = "";
		for (let j = 0; j < 5; j++) {
			message += "(" + cardBoard[i][j].getTeam() + " , " + cardBoard[i][j].getValue() + ") ";
		}
		console.log(message);
	}
}
