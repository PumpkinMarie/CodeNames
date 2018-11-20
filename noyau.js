class Noyau {
	let teams= new Array();
	let currentTeam;
	constructor(mode) { //Precise if the game is competitive, cooperative, solo..
		this.mode=mode;
		setTeam("Black","Trap",0);
		setTeam("Grey","Neutral",0);
	}

	setTeam(color,name,NbPlayers) { //Set team parameters
		teams.push(new Team(color,name,NbPlayers));
	}

	getBoardState() {

	}

	createBoard() {

	}

	isBleuTeam() {
		return currentTeam.name=="Blue";
	}

	setMasterSelection(cardArray) { //Adds an array to a team's array of cards to find (linked by a common tip)

	}

	verifySpyCard() {

	}

	askEndTour() {

	}

	endTour() {

	}

	getScore() {

	}

	isEndGame() {

	}
}
