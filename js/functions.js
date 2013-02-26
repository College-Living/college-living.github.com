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
	if(menu_bottom-20 < sY) floatHeader();
	else unfloatHeader();
}

function floatHeader() {
	header.className = "littleheader";
	var height = header.offsetHeight;
	var margin = menu_bottom+height+30;
	page.style.marginTop = margin+"px";
}


function unfloatHeader() {
	header.className = "bigheader";
	page.style.marginTop = "0px";
}
