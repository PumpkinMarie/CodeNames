/*Fonction alea robin

getWordRandom(ES);
*/
class Langue {

	// Les langues
	FR = 0;
	EN = 1;
	ES = 2;
	static langue = {
		"FR": this.FR,
		"EN": this.EN,
		"ES": this.ES
	};

	// Variable de classe
	actuel;

	// Méthodes de classe

	static getWord(entries, index, language) {
		if (language == FR) {
			return entries[index][0];
		} else if (language == EN) {
			return entries[index][1][0];
		} else if (language == ES) {
			return entries[index][1][1];
		}
	}

	static getWordRandom() {
		this.getWordRandom(actuel);
	}

	static getWordRandom(language) {
		let entries = Object.entries(Dico);
		let rand = Math.floor(Math.random() * Math.floor(entries.length));
		console.log(getWord(entries, rand, EN));
	}

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
		else {
			actuel = "FR";
		}
	}


}
