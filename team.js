class Team{
	let score=0;
	let cardsToFind= new Array();
	constructor(color,name,NbPlayers){
		this.color=color;
		this.name=name;
		this.NbPlayers=NbPlayers;
	}
	getScore(){
		return score;
	}
	AddScore(points){
		score+=points;
	}
	getName(){
		return name;
	}
	getColor(){
		return color; //Blue, Red, Grey, Black
	}
	addCardArray(cardArray){
		cardsToFind[cardsToFind.length]=cardArray;
	}
}