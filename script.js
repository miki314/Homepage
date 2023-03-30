addEventListener("change", background);

function search()
{
	var text = document.getElementById("phrase").value;
	document.getElementById("search").href="https://www.google.com/search?q="+text.toString();
}

function time()
{
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();	
	var mounth = today.getMonth();
	var date = today.getDate()
	
	var dzien= "";
	switch(today.getDay())
	{
		case 0:
			dzien = "Monday";
		break;
		case 1:
			dzien = "Tuesday";
		break;
		case 2:
			dzien = "Wednesday";
		break;
		case 3:
			dzien = "Thursday";
		break;
		case 4:
			dzien = "Friday";
		break;
		case 5:
			dzien = "Saturday";
		break;
		case 6:
			dzien = "Sunday";
		break;
	}	
	
	if(second < 10) second = "0" + second.toString();
	if(minute < 10) minute = "0" + minute.toString();
	if(hour < 10) hour = "0" + hour.toString();
	if(mounth < 10) mounth = "0" + mounth.toString();
	if(date < 10) date = "0" + date.toString();
	
	document.getElementById("clock").innerHTML = hour +":"+ minute +":"+ second;
	document.getElementById("callendar").innerHTML = dzien +" "+ date +"."+ mounth +"."+ today.getFullYear();
	setTimeout("time()",1000);
}

window.onload = time();
