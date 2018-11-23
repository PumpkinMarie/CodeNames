/*Fonction alea robin

getWordRandom(ES);
*/
const FR = 0, EN = 1, ES = 2;
class Langue {
	static getWord(entries, index, language) {
		if (language == FR) {
			return entries[index][0];
		} else if (language == EN) {
			return entries[index][1][0];
		} else if (language == ES) {
			return entries[index][1][1];
		}
	}

	static getWordIndex(word, lang) {
		let i, j;
		let entries = Object.entries(Dico);
		for (i = 0; i < entries.length; i++) {
			if (lang == FR) {
				if (entries[i][0] == word)
					return i;
			} else if (lang == EN) {
				if (entries[i][1][0] == word)
					return i;
			} else {
				if (entries[i][1][1] == word)
					return i;
			}
		}
		return -1;
	}

	static Translatefrom(word, lang, newLang) {
		let entries = Object.entries(Dico);
		let ind = Langue.getWordIndex(word, lang);
		if (ind != -1) {
			if (newLang == FR)
				return entries[ind][0];
			else if (newLang == EN)
				return entries[ind][1][0];
			else
				return entries[ind][1][1];
		}
	}

	static getWordRandom() {
		getWordRandom(actuel);
	}

	static getWordRandom(language) {
		let entries = Object.entries(Dico);
		let rand = Math.floor(Math.random() * Math.floor(entries.length));
		return Langue.getWord(entries, rand, language);
	}
}
