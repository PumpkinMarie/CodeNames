class Noyau {
	/*
	Parameters: mode=["competitive","cooperative"], lang=[EN,FR,ES]
				(Team1Name,Team2Name):String (Team1NbPlayers,Team2NbPlayers):integer
	*/
	constructor(mode,lang,Team1Name,Team1NbPlayers,Team2Name,Team2NbPlayers) { //Precise if the game is competitive, cooperative, solo..
		this.mode=mode;
		this.language=lang;
		this.gameEnd=false
		this.turn="master";//master or player
		//this.setTeam("Black","Trap",0); //non playable teams to represent grey and black cards
		//this.setTeam("Grey","Neutral",0);
		this.board=this.createBoard();
		this.currentTeam=this.board.firstTeam; //"Blue" or "Red"
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
		if(this.language!=lang){
			this.language=lang;
			this.board.langUpdate(lang);
		}

	}

	isMaster(){
		return this.turn=="master";
	}

	getBoardState() {//board of the game
		return this.board.getCardboard();
	}

	createBoard() {
		return new Board(this.language,this);
	}

	isBleuTeam() {
		return this.teams[this.currentTeam].color=="Blue";
	}

	setMasterSelection(cardArray) { //Adds an array to a team's array of cards to find (linked by a common tip)
		this.teams[this.currentTeam].addCardArray(cardArray);
	}

	verifySpyCard(card) { //attributes the points/actions corresponding to the cards chosen by a team
		if(card.team=="Black"){
			this.gameEnd=true;
			this.winner=this.teams[(this.currentTeam+1)%2].name;
		}else if(card.getTeam()=="Grey"){
			this.endTour();
		}
		else if(card.team!=this.teams[this.currentTeam].color){ //Neither Black nor Grey. It must be blue or red and of the opposite team
			if(this.teams[(this.currentTeam+1)%2].AddScore(1)){//Has the other team won from that mistake?
				this.gameEnd=true;
				this.winner=this.teams[(this.currentTeam+1)%2].name;
			}
			else
				this.endTour();
		}else{ //Is the card related to the tip?
			if(this.teams[this.currentTeam].isInCardArray(card))
				this.teams[this.currentTeam].AddScore(1);
			else if(card.team==this.teams[currentTeam].color){
				this.teams[this.currentTeam].AddScore(1);
				this.endTour();
			}else
				this.endTour();
		}
	}

	askEndTour() {
		if(this.teams[this.currentTeam].guesses!=0){
			this.endTour();
			return true;
		}
		return false;
	}

	endTour() {
		this.currentTeam=(this.currentTeam+1)%2;
	}

	getScore() {
		return this.teams[this.currentTeam].getScore();
	}

	isEndGame() {
		return this.gameEnd;
	}
}
