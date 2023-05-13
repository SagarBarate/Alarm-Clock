
// Current time 

const currentTime= document.getElementById('currentTime');
const alarmTime= document.getElementById('alarmTime');
const setBotton = document.getElementById('set-btn');

const updateCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    console.log("Time", hours, minutes, seconds);
}

updateCurrentTime();

setInterval(() => {
    // updateCurrentTime(); 
    // console.log('12'); 
}, 1000);
console.log(currentTime);



