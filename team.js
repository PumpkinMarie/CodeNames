class Team{
	constructor(color,name,NbPlayers){
		this.color=color;
		this.name=name;
		this.NbPlayers=NbPlayers;
		this.score=0;
		this.cardsToFind= new Array();
		this.guesses=0;
	}
	getScore(){
		return this.score;
	}
	AddScore(points){
		this.score+=points;
	}
	getName(){
		return this.name;
	}
	getColor(){
		return this.color; //Blue, Red, Grey, Black
	}
	addCardArray(cardArray){
		this.cardsToFind[this.cardsToFind.length]=cardArray;
	}
	getCardArray(){
		return this.cardsToFind;
	}
}