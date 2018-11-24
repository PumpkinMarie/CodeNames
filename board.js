class Board {

    getFirstTeam() {
        return this.firstTeam;
    }

    randomCard(repartition) {
        let random = Math.floor(repartition.length * Math.random());
        let result = new Card(Langue.getWordRandom(this.lang), repartition[random], this.noyau);
        repartition.splice(random, 1);
        return result;
    }

    createCardBoard() {
        let random_boolean = Math.random() >= 0.5;//true->Blue false-> Red Choix de l'agent double
        let blue = 8, red = 8, neutral = 7, assassin = 1;
        let repartition = new Array();
        if (random_boolean) {
            blue++;
            this.firstTeam = "Blue";
        }
        else {
            red++;
            this.firstTeam = "Red";
        }
        this.noyau.teams[1].score = blue;
        this.noyau.teams[0].score = red;
        while (blue + red + neutral + assassin > 0) {
            if (blue > 0) {
                repartition.push("Blue");
                blue--;
            }
            if (red > 0) {
                repartition.push("Red");
                red--;
            }
            if (neutral > 0) {
                repartition.push("Grey");
                neutral--;
            }
            if (assassin > 0) {
                repartition.push("Black");
                assassin--;
            }
        }
				this.CardBoard = new Array();
				        for (let i = 0; i < 5; i++) {
				            this.CardBoard[i] = new Array();
				            for (let j = 0; j < 5; j++) {
				                this.CardBoard[i][j] = this.randomCard(repartition);
				            }
				        }
				    }

				    langUpdate(lang) {//On change la langue de tous les mots
				        if ((lang == FR || lang == EN || lang == ES) && lang != this.lang) {
				            for (let i = 0; i < 5; i++) {
				                for (let j = 0; j < 5; j++) {
				                    this.CardBoard[i][j].value = Langue.Translatefrom(this.CardBoard[i][j].value, this.lang, lang);
				                }
				            }
				            this.lang = lang;
				        }
				    }

				    getCardboard(isMaster) {
				        return this.CardBoard;
				    }

				    constructor(lang, noyau) {
				        this.noyau = noyau;
				        this.lang = lang;
				        this.firstTeam = "";
				        this.createCardBoard();
				    }
				}
