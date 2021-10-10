const bDays = document.getElementsByName('birthday');
const bHours = document.getElementsByName('birthHour');
const bMinutes = document.getElementsByName('birthMinute');
const result = document.getElementById('result');

alert("Кляцький Нікіта 210гр варіант 5");

function calculateBirthdayDifference()
{
	let bDay1 = new Date(bDays[0].value);
	bDay1.setHours(bHours[0].value >= 0 && bHours[0].value <= 23 ? bHours[0].value : bHours[0].value < 0 ? 0 : 23);
	bDay1.setMinutes(bMinutes[0].value >= 0 && bMinutes[0].value <= 59 ? bMinutes[0].value : bMinutes[0].value < 0 ? 0 : 59);
	let bDay2 = new Date(bDays[1].value);
	bDay2.setHours(bHours[1].value >= 0 && bHours[1].value <= 23 ? bHours[1].value : bHours[1].value < 0 ? 0 : 23);
	bDay2.setMinutes(bMinutes[1].value >= 0 && bMinutes[1].value <= 59 ? bMinutes[1].value : bMinutes[1].value < 0 ? 0 : 59);
	let bDayDifference = new Date(Math.abs(bDay1.getTime() - bDay2.getTime()));
	result.innerHTML = "difference is " + (bDayDifference.getUTCDate() + bDayDifference.getUTCMonth() * 31) + " days, " + bDayDifference.getUTCHours() + " hours, " + bDayDifference.getUTCMinutes() + " minutes";
}

