class Noyau {
	let teams= new Array();
	let currentTeam;
	constructor(mode) { //Precise if the game is competitive, cooperative, solo..
		this.mode=mode;
		this.gameEnd=false
		setTeam("Black","Trap",0); //non playable teams to represent grey and black cards
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
		currentTeam.addCardArray(cardArray);
	}

	verifySpyCard() { //attributes the points/actions corresponding to the cards chosen by a team

	}

	askEndTour() {

	}

	endTour() {

	}

	getScore() {
		return currentTeam.getScore();
	}

	isEndGame() {
		return gameEnd;
	}
}
