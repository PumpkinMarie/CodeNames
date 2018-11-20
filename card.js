class Card{
	let isrevealed=false;
	constructor(value,team){
		this.team=team;//Blue,Red,Grey,Black
		this.value=value;//Word
	}
	getValue(){//Get the word
		return this.value;
	}
	getTeam(){ //card's type
		return this.team;
	}
	reveal(){ //the card has been chosen
		isrevealed=true;
	}

}