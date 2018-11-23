/*Fonction alea robin

getWordRandom(ES);
*/
const FR = 0, EN = 1, ES = 2;
class Langue {
	getWord(entries, index, language) {
		if (language == FR) {
			return entries[index][0];
		} else if (language == EN) {
			return entries[index][1][0];
		} else if (language == ES) {
			return entries[index][1][1];
		}
	}

	getWordIndex(word,lang){
		let i,j;
		for(i=0;i<Dico.length;i++){
			if(lang==FR){
				if(Dico[i][0]==word)
					return i;
			}else if(lang==EN){
				if(Dico[i][1][0]==word)
					return i;
			}else{
				if(Dico[i][1][1]==word)
					return i;
			}
		}
		return -1;
	}

	Translatefrom(word,lang,newLang){
		let ind=getWordIndex(word,lang);
		if(ind!=-1){
			if(newLang==FR)
				return Dico[ind][0];
			else if(newLang==EN)
				return Dico[ind][1][0];
			else
				return Dico[ind][1][1];
		}
	}

	getWordRandom() {
		this.getWordRandom(actuel);
	}

	getWordRandom(language) {
		let entries = Object.entries(Dico);
		let rand = Math.floor(Math.random() * Math.floor(entries.length));
		console.log(getWord(entries, rand, EN));
	}

	isLangueDisponible(langue) {
		if (langue.is(String)) {
			return false;
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

	constructor(lang) {
		if (lang != FR && lang != EN && lang != ES) {
			this.actuel = FR;
		} else {
			this.actuel = lang;
		}
	}
}
