class Card{
	
	constructor(value,team){
		this.team=team;//Blue,Red,Grey,Black
		this.value=value;//Nom affiché
	}
	getValue(){
		return this.value;
	}
	getTeam(){
		return this.team;
	}

}