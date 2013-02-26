var menu;
var header;
var page;
var menu_bottom;

window.onload = function() {
	menu = document.getElementById("menu");
	header = document.getElementById("header");
	page = document.getElementById("page");
	menu_bottom = menu.offsetTop + menu.offsetHeight;
}

window.onscroll = function() {
	var sY = window.scrollY;
	if(menu_bottom < sY) floatHeader();
	else unfloatHeader();
}

function floatHeader() {
	header.className = "littleheader";
	page.style.marginTop = "60px";
}


function unfloatHeader() {
	header.className = "bigheader";
	page.style.marginTop = "0px";
}
