var a = prompt("Enter some text", "");
if (a != null) {
	document.getElementById("myName").innerHTML = a;
}

function showTime() {
	const today = new Date();
	let da = today.getMonth();
	let mo = today.getDate();
	let d = today.getFullYear();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("myClock").innerHTML =
		da + "/" + mo + "/" + d + "-" + h + ":" + m + ":" + s;
	setTimeout(showTime, 1000);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	} // add zero in front of numbers < 10
	return i;
}
showTime();
