const timeElement = document.getElementById('Time_in_html');
const setAlarmTimeElement = document.getElementById('setAlarmtime');
const alarmSound = document.getElementById('alarmSound');
const alarmGif = document.getElementById('alarmGif');
let alarmTime = null;

setInterval(() => {
    let timeFromPC = new Date();
    timeElement.innerHTML = timeFromPC.toLocaleTimeString();
}, 1000);

function setAlarm() {
    let hours = document.getElementById('hoursHtml').value;
    let minutes = document.getElementById('minutesHtml').value;

    if (hours === '' || minutes === '') {
        alert('Please set both hours and minutes.');
        return;
    }

    alarmTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`;
    setAlarmTimeElement.innerHTML = alarmTime;
}

document.getElementById('setAlarmButton').addEventListener('click', setAlarm);

setInterval(() => {
    if (!alarmTime) return;

    let currentTime = new Date();
    let currentHour = String(currentTime.getHours()).padStart(2, '0');
    let currentMinute = String(currentTime.getMinutes()).padStart(2, '0');
    let currentSecond = String(currentTime.getSeconds()).padStart(2, '0');

    if (`${currentHour}:${currentMinute}:${currentSecond}` === alarmTime) {
        alarmGif.style.display = "block"; // Show the alarm GIF
        alarmSound.play();
        alarmTime = null;  // Reset alarm to prevent repeated triggering
    }
}, 1000);
