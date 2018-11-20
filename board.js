class Board{
	
	constructor(){
		
	}
	
	chooseCard(assassin,blue,red,neutral){
		let teams=4;
		if(assassin==0)
			teams--;
		if(blue==0)
			teams--;
		if(red==0)
			teams--;
		if(neutral==0)
			teams--;
		
	}
	
	createCardBoard(){
		let assassin=1,Blue=8,Red=8,Neutral=7;
		let random_boolean = Math.random() >= 0.5;//true->Blue false-> Red Choix de l'agent double
		if(random_boolean)
			Blue++;
		else
			Red++;
		this.CardBoard=new Array();
		for(let i=0;i<5;i++){
			CardBoard[i]=new Array();
			for(let j=0;j<5;j++){
				CardBoard[i][j]=new Card(...);
			}
		}
	}

}