class Team{
	constructor(color,name,NbPlayers){
		this.color=color;
		this.name=name;
		this.NbPlayers=NbPlayers;
		this.score=8;
		this.cardsToFind= new Array();
		this.guesses=0;
	}
	getScore(){
		return this.score;
	}
	AddScore(points){
		this.score-=points;
		return this.hasWon();
	}
	hasWon(){
		return this.score==0;
	}
	getName(){
		return this.name;
	}
	getColor(){
		return this.color; //Blue, Red, Grey, Black
	}
	addCardArray(cardArray){
		this.cardsToFind=cardArray;
	}
	isInCardArray(card){
		let names=new Array();
		for(let i=0;i<this.cardsToFind.length;i++){
			names.push(this.cardsToFind[i].value);
		}
		//Taking advantage of a string native method to search the stringified array for a word
		return (names.toString()).indexOf(card.value)!=-1;
	}
}