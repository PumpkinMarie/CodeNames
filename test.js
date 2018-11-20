window.onload = function () {
	//On teste le code du fichier board
	let board = new Board();
	for (let i = 0; i < 5; i++) {
		let message = "";
		for (let j = 0; j < 5; j++) {
			message += board.CardBoard[i][j].team + " ";
		}
		console.log(message);
	}
}