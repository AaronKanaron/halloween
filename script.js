Array.from(document.getElementsByClassName("line")).forEach((index) => {
	Line(index)
})

function Line(element) {
	element.style.cssText = "display: block; transform: translateX(" + Math.floor(Math.random() * 100) + "%)"
	setTimeout(() => {
		element.style.display = "none" 
	}, Math.round(Math.random() * (200 - 100)) + 100); //MS SHOWTIME);
	setTimeout(() => {
		Line(element)
	}, Math.floor(Math.random() * (1500 - 100) + 100));
}