let test = new Noyau("cooperative", FR, "paul", 2, "IA", 0);

class IA {

	setMasterSelectionCardArray() {
		let array = [];
		for (let line of this.board) {
			for (let elem of line) {
				if (elem.isrevealed == false && elem.team == "Red") {
					array.push(elem);
				}
			}
		}
		return array;
	}

	constructor(noyau) {
		this.board = noyau.getBoardState();
	}
}

let ia = new IA(test);

console.log(ia.setMasterSelectionCardArray());