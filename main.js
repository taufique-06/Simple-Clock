function showTime(){
	var today = new Date();

	var hour = today.getHours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	var session = "AM"

	if (hour == 0){
		hour = 12;
	}

	if (hour > 12) {
		hour = hour - 12;
		session = "PM"
	}
	// Using Ternary Operator

	hour = (hour <10)? "0" + hour:hour;
	min = (min <10)? "0" + min:min;
	sec = (sec <10)? "0" + sec:sec;

	var time = hour + ":" + min + ":" + sec + " " + session;

	document.getElementById("myClockDisplay").innerHTML = time;

	setInterval(showTime, 1000);

	// if you want, you can use "setTimeout(showTime, 1000)" instead of setInterval
}

showTime();