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

	spyPLay() {
		let coord;
		do{
			let redArray = [];
			let bluArray = [];
			let greyArray = [];
			let blackArray = [];
			let x, y;

			for (x = 0; x < this.board.length; x++) {
				for (y = 0; y < this.board[0].length; y++) {
					if (this.board[x][y].isrevealed == false) {
						switch (this.board[x][y].team) {
							case "Red":
								redArray.push({ ix: x, iy: y });
								break;
							case "Blue":
								bluArray.push({ ix: x, iy: y });
								break;
							case "Grey":
								greyArray.push({ ix: x, iy: y });
								break;
							case "Black":
								blackArray.push({ ix: x, iy: y });
						}
					}
				}
			}
			let chance = Math.floor(Math.random() * 100);
			console.log(chance);
			if (chance < 60) {
				let id = Math.floor(Math.random() * redArray.length);
				coord = { x: redArray[id].ix, y: redArray[id].iy };
			} else if (chance < 90) {
				let id = Math.floor(Math.random() * greyArray.length);
				coord = { x: greyArray[id].ix, y: greyArray[id].iy };
			} else if (chance < 99) {
				let id = Math.floor(Math.random() * bluArray.length);
				coord = { x: bluArray[id].ix, y: bluArray[id].iy };
			} else {
				let id = Math.floor(Math.random() * blackArray.length);
				coord = { x: blackArray[id].ix, y: blackArray[id].iy };
			}

		}while(noyau.verifySpyCard(this.board[coord.x][coord.y]));
		canPass = true;
		waitForEnding();
		pursue ();
	}

	constructor(noyau) {
		this.board = noyau.getBoardState();
	}
}
