function changeValue() {
	let barre = document.getElementById('barre_son');
	let musics = document.getElementById('music');
	musics.volume = barre.nodeValue;
}