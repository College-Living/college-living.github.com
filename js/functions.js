var menu;
var header;
var page;
var page_offset = 20;
var menu_bottom;
var isFloatingHeader = false;

window.onload = function() {
	menu = document.getElementById("menu");
	header = document.getElementById("header");
	page = document.getElementById("page");
	menu_bottom = menu.offsetTop + menu.offsetHeight;
}

window.onscroll = function() {
	var sY = window.scrollY;
	if(menu_bottom-20 < sY && !isFloatingHeader) floatHeader();
	else if(isFloatingHeader && menu_bottom-20 > sY) unfloatHeader();
}

function floatHeader() {
	isFloatingHeader = true;
	header.className = "littleheader";
	var height = header.offsetHeight;
	var margin = menu_bottom+height+page_offset;
	page.style.marginTop = margin+"px";
}


function unfloatHeader() {
	isFloatingHeader = false;
	header.className = "bigheader";
	page.style.marginTop = page_offset+"px";
}
