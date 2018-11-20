class Team{
	let score=0;
	constructor(color,name,NbPlayers){
		this.color=color;
		this.name=name;
		this.NbPlayers=NbPlayers;
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
}