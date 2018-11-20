class Board{
	
	getFirstTeam(){
		return firsTeam;
	}
	
	randomCard(){
		let random=Math.floor(4*Math.random);
		if(random==0 && this.red>0){//Red
			this.red--;
			return new Card("Un mot","Red");
		}else if(random==1 && this.blue>0){//Blue
			this.blue--;
			return new Card("Un mot","Blue");
		}else if(random==2&& this.neutral>0){//Neutral
			this.neutral--;
			return new Card("Un mot","Grey");
		}else if(random==3 && this.assassin>0){//Assassin
			this.assassin--;
			return new Card("Un mot","Black");
		}else{//Assassin
			return this.randomCard();
		}
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