class Noyau {
	constructor(mode) { //Precise if the game is competitive, cooperative, solo..
		this.mode=mode;
		this.gameEnd=false
		this.setTeam("Black","Trap",0); //non playable teams to represent grey and black cards
		this.setTeam("Grey","Neutral",0);
		this.board=createBoard();
		this.currentTeam=board.firstTeam;
		this.teams= new Array();
	}

	setTeam(color,name,NbPlayers) { //Set team parameters
		this.teams.push(new Team(color,name,NbPlayers));
	}

	getBoardState() {//?
	}

	createBoard() {
		return new Board();
	}

	isBleuTeam() {
		return this.currentTeam=="Blue";
	}

	setMasterSelection(cardArray) { //Adds an array to a team's array of cards to find (linked by a common tip)
		this.currentTeam.addCardArray(cardArray);
	}

	verifySpyCard(card) { //attributes the points/actions corresponding to the cards chosen by a team
		if(card.team=="Black")
			this.gameEnd=true;
		else if(card.team=="Grey"){
			this.endTour();
		}
	}

	askEndTour() {
		if(this.currentTeam.guesses!=0){
			this.endTour();
			return true;
		}
		return false;
	}

	endTour() {
	}

	getScore() {
		return this.currentTeam.getScore();
	}

	isEndGame() {
		return gameEnd;
	}
}
