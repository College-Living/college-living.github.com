var menu;
var menu_bottom;

window.onload = function() {
	menu = document.getElementById("menu");
	menu_bottom = menu.offsetTop + menu.offsetHeight;
}

window.onscroll = function() {
	var sY = window.scrollY;
	if(menu_bottom < sY) floatHeader();
	else unfloatHeader();
}

function floatHeader() {
	menu.className = "littleheader";
}


function unfloatHeader() {
	menu.className = "bigheader";
}