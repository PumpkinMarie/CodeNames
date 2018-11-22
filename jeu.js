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
}

window.onload= function(){

}
