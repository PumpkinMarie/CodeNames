class Board{
	
	getFirstTeam(){
		return firsTeam;
	}
	
	randomCard(){
		let teams=new Array();
		if(this.red>0)
			teams.push("Red");
		if(this.blue>0)
			teams.push("Blue");
		if(this.neutral>0)
			teams.push("Grey");
		if(this.assassin>0)
			teams.push("Black");
		return new Card("Un mot",teams[Math.floor(teams.length*Math.random())]);
	}
	
	createCardBoard(){
		let random_boolean = Math.random() >= 0.5;//true->Blue false-> Red Choix de l'agent double
		if(random_boolean){
			this.blue++;
			this.firsTeam="Blue";
		}
		else{
			this.red++;
			this.firsTeam="Red";
		}
		this.CardBoard=new Array();
		for(let i=0;i<5;i++){
			this.CardBoard[i]=new Array();
			for(let j=0;j<5;j++){
				this.CardBoard[i][j]=this.randomCard();
			}
		}
		delete(this.blue);
		delete(this.red);
		delete(this.neutral);
		delete(this.assassin);
	}
	
	constructor(){
		this.firstTeam="test";
		this.red=8;
		this.blue=8;
		this.neutral=7;
		this.assassin=1;
		this.createCardBoard();
	}
	

}