class Card{
	constructor(value,team,noyau){
		this.noyau=noyau
		this.isrevealed=false;
		this.team=team;//Blue,Red,Grey,Black
		this.value=value;//Word
	}
	getValue(){//Get the word
		return this.value;
	}
	getTeam(){ //card's type: Blue,Red,Grey,Black,hidden
	if(!this.noyau.isMaster() && !this.isrevealed)
		return "hidden";
	return this.team;
	}
	reveal(){ //the card has been chosen
		this.isrevealed=true;
	}
	isRevealed(){
		return this.isrevealed;
	}

}
