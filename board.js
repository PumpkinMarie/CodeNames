class Board{
	
	getFirstTeam(){
		return firsTeam;
	}
	
	randomCard(repartition){
		let random=Math.floor(repartition.length*Math.random());
		let result=new Card("Un mot",repartition[random]);
		repartition.splice(random,1);
		return result;
	}
	
	createCardBoard(){
		let random_boolean = Math.random() >= 0.5;//true->Blue false-> Red Choix de l'agent double
		let blue=8,red=8,neutral=7,assassin=1;
		let repartition=new Array();
		if(random_boolean){
			blue++;
			this.firsTeam="Blue";
		}
		else{
			red++;
			this.firsTeam="Red";
		}
		
		while(blue+red+neutral+assassin>0){
			if(blue>0){
				repartition.push("Blue");
				blue--;
			}
			if(red>0){
				repartition.push("Red");
				red--;
			}
			if(neutral>0){
				repartition.push("Grey");
				neutral--;
			}
			if(assassin>0){
				repartition.push("Black");
				assassin--;
			}
		}
		
		this.CardBoard=new Array();
		for(let i=0;i<5;i++){
			this.CardBoard[i]=new Array();
			for(let j=0;j<5;j++){
				this.CardBoard[i][j]=this.randomCard(repartition);
			}
		}
	}
	
	constructor(){
		this.firstTeam="";
		this.createCardBoard();
	}
}