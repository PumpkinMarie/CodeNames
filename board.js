class Board{
	let firstTeam;
	let red=8,blue=8,neutral=7,assassin=1;
	constructor(){
		createCardBoard();
	}
	
	getFirstTeam(){
		return firsTeam;
	}
	
	randomCard(){
		let random=Math.floor(4*Math.random);
		if(random==0){//Red
			return (red>0?new Card("Un mot","Red"):randomCard());
			red--;
		}else if(random==1){//Blue
			return (blue>0?new Card("Un mot","Blue"):randomCard());
			blue--;
		}else if(random==2){//Neutral
			return (neutral>0?new Card("Un mot","Grey"):randomCard());
			neutral--;
		}else{//Assassin
			return (assassin>0?new Card("Un mot","Black"):randomCard());
			assassin--;
		}
	}
	
	createCardBoard(){
		let random_boolean = Math.random() >= 0.5;//true->Blue false-> Red Choix de l'agent double
		if(random_boolean){
			blue++;
			firsTeam="Blue";
		}
		else{
			red++;
			firsTeam="Red";
		}
		this.CardBoard=new Array();
		for(let i=0;i<5;i++){
			CardBoard[i]=new Array();
			for(let j=0;j<5;j++){
				CardBoard[i][j]=randomCard();
			}
		}
		delete(this.blue);
		delete(this.red);
		delete(this.neutral);
		delete(this.assassin);
	}

}