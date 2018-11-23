class Board{

	getFirstTeam(){
		return this.firsTeam;
	}

	randomCard(repartition){
		let random=Math.floor(repartition.length*Math.random());
		let result=new Card(this.langObj.getWordRandom(this.lang),repartition[random],this.noyau);
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

	langUpdate(lang){//On change la langue de tous les mots
		if(this.langObj.isLangueDisponible(lang) && lang!=this.lang){
			for(let i=0;i<5;i++){
				for(let j=0;j<5;j++){
					this.CardBoard[i][j].value=getWord(this.CardBoard[i][j].value,lang);
				}
			}
			this.lang=lang;
			this.langObj.actuel=lang;
		}
	}

	getCardboard(isMaster){
		return this.CardBoard;
	}

	constructor(lang,noyau){
		this.noyau=noyau;
		this.lang=lang;
		this.langObj= new Langue(this.lang);
		this.firstTeam="";
		this.createCardBoard();
	}
}
