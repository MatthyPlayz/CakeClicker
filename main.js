var cakes = 0;
var designers = 0;
var cps = 0;
frog.style.display="none";
function clickOne() {
	cakes = cakes + 1;
	caker.value = cakes;
}
function clickTwo() {
	cakes = cakes + 2;
	caker.value = cakes;
}
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}
function buyDesigner() {
	if(cakes >= 15) {
		cakes = cakes - 15;
		cps = cps + 1;
		cpsd.value = cps;
		designers = designers + 1;
		caker.value = cakes;
		window.setInterval(function(){clickOne()}, 1000);
	}
}
function buyNCakeA() {
	if(cakes >= 100) {
		hide(bigCake);
		show(bigCakeT);
	}
}
function hide(object) {
	object.style.display="none";
}
function show(object) {
	object.style.display="block";
}
function checkb() {
	if(box.value == "frogcake") {
		frog.style.display="block";
	}
}
hide(code);
hide(cakel);
function beforestart() {
	hide(starta);
	hide(startb);
	show(cakel);
}
function start() {
	show(code);
	hide(cakel);
	hide(infoa);
	hide(imga);
}