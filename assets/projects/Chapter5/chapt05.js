document.getElementById("changeList").onclick = newList;

function newList() {
	item1 = prompt("first Item");
	item2 = prompt("second Item");
	item3 = prompt("third Item");
	item4 = prompt ("forth Item");
	item5 = prompt ("fifth Item");
	item6 = prompt ("sixth Item");
	updateList();
}
function updateList() {
	document.getElementById("o").innerHTML = item1;
	document.getElementById("d").innerHTML = item2;
	document.getElementById("g").innerHTML = item3;
	document.getElementById("h").innerHTML = item4;
	document.getElementById("j").innerHTML = item5;
	document.getElementById("k").innerHTML = item6;
}