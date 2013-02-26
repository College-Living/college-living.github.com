var menu;
var header;
var menu_bottom;

window.onload = function() {
	menu = document.getElementById("menu");
	header = document.getElementById("header");
	menu_bottom = menu.offsetTop + menu.offsetHeight;
}

window.onscroll = function() {
	var sY = window.scrollY;
	if(menu_bottom < sY) floatHeader();
	else unfloatHeader();
}

function floatHeader() {
	header.className = "littleheader";
	document.body.style.marginTop = "60px";
}


function unfloatHeader() {
	header.className = "bigheader";
	document.body.style.marginTop = "0px";
}
