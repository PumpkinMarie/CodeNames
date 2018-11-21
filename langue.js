const FR = 0;
const EN = 1;
const ES = 2;
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
	console.log(getWord(entries, rand, EN));
}
getWordRandom(ES);

class Langue {

	// Les langues
	Francais = 0;
	Anglais = 1;
	Espagnol = 2;
	static langue = {
		"Francais": this.Francais,
		"Anglais": this.Anglais,
		"Espagnol": this.Espagnol
	};

	// Variable de classe
	actuel;

	// Méthodes de classe

	static isLangueDisponible(langue) {
		if (langue.is(String)) {
			return this.langue.hasOwnProperty(langue)
		}
		else if (langue.is(Number)) {
			let bool = 0;
			for (let key in this.langue) {
				bool += (this.langue[key] === langue) ? 1 : 0;
			}

			return (bool > 0);
		}

		return false;
	}

	constructor(langue) {
		if (Langue.isLangueDisponible(langue)) {
			this.actuel = (langue.is(String)) ? Langue.langue[langue] : langue;
		}

		let json1 = document.getElementsByTagName("head").item(0).createElement("script");
		json1.setAttribute("type", "text/javascript");
		json1.setAttribute("src", "./words.json");

		loadJSON
	}


}
