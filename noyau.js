class Noyau {
	constructor(mode,lang,Team1Name,Team1NbPlayers,Team2Name,Team2NbPlayers) { //Precise if the game is competitive, cooperative, solo..
		this.mode=mode;
		this.language=lang;
		this.gameEnd=false
		//this.setTeam("Black","Trap",0); //non playable teams to represent grey and black cards
		//this.setTeam("Grey","Neutral",0);
		this.board=createBoard();
		this.currentTeam=board.firstTeam; //"Blue" or "Red"
		this.currentTeam=this.currentTeam=="Blue"?0:1;
		this.teams=new Array();
		this.setTeam("Blue",Team1Name,Team1NbPlayers);
		this.setTeam("Red",Team2Name,Team2NbPlayers);//[Blue,Red]
		this.teams[this.currentTeam].AddScore(-1);//First team has 1 more card
	}

	setTeam(color,name,NbPlayers) { //Set team parameters
		this.teams.push(new Team(color,name,NbPlayers));
	}

	langUpdate(lang){
		if(this.lang!=lang){
			this.lang=lang;
			this.board.langUpdate(lang);
		}
		
	}
	
	getBoardState() {//board of the spy-master
		return this.board.getCardboard();
	}

	createBoard() {
		return new Board();
	}

	isBleuTeam() {
		return this.teams[this.currentTeam].color=="Blue";
	}

	setMasterSelection(cardArray) { //Adds an array to a team's array of cards to find (linked by a common tip)
		this.teams[this.currentTeam].addCardArray(cardArray);
	}

	verifySpyCard(card) { //attributes the points/actions corresponding to the cards chosen by a team
		if(card.team=="Black")
			this.gameEnd=true;
			this.winner=this.teams[(this.currentTeam+1)%2].name;
		else if(card.team=="Grey"){
			this.endTour();
		}
		else if(card.team!=this.teams[this.currentTeam].color){ //Neither Black nor Grey. It must be blue or red and of the opposite team
			this.teams[(this.currentTeam+1)%2].AddScore(1);
			this.EndTour();
		}
		else{ //Is the card related to the tip?
			
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

	isEndGame(winner) {
		return gameEnd;
	}
}
