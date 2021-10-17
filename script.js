function line() {
	document.getElementById("line").style.display = "block"
	document.getElementById("line").style.transform = "translateX(" + Math.floor(Math.random() * 100) + "%)"
	setTimeout(() => {
		document.getElementById("line").style.display = "none"
		console.log("hide")
	}, 100); //MS SHOWTIME
}

(function loop() {
    var rand = Math.round(Math.random() * (1200 - 200)) + 200; //first: max, second: min, third: min
    setTimeout(function() {
            line();
            loop();  
    }, rand);
}());