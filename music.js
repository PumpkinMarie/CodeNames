function changeVolume() {
    let barre = document.getElementById('barre_son');
    let musics = document.getElementById('music');
		console.log("son="+(barre.value/100));
    musics.volume = (barre.value)/100;
}
