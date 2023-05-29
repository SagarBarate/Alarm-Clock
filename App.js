//Initial References
let timerRef = document.querySelector(".timer-display");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");

let activeAlarms = document.querySelector(".activeAlarms");
const setAlarm = document.getElementById("set");
let alarmsArray = [];
let alarmSound = new Audio("./alarm.mp3");

let initialHour = 0,
  initialMinute = 0,
  alarmIndex = 0;

//Append zeroes for single digit
const appendZero = (value) => (value < 10 ? "0" + value : value);

//Search for value in object
const searchObject = (parameter, value) => {
  let alarmObject,
    objIndex,
    exists = false;
  alarmsArray.forEach((alarm, index) => {
    if (alarm[parameter] == value) {
      exists = true;
      alarmObject = alarm;
      objIndex = index;
      return false;
    }
  });
  return [exists, alarmObject, objIndex];
};

//Display Time
function displayTimer() {

  let date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var period = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 should be treated as 12

  // Add leading zeros to minutes and seconds
  
  [hours, minutes, seconds] = [
    appendZero(hours),
    appendZero(minutes),
    appendZero(seconds),

  ];

  //Display time
  timerRef.innerHTML = `${hours}:${minutes}:${seconds}`;

  //Alarm
  alarmsArray.forEach((alarm, index) => {
    if (alarm.isActive) {
      if (`${alarm.alarmHour}:${alarm.alarmMinute}` === `${hours}:${minutes}`) {
        alarmSound.play();
        alarmSound.loop = true;
      }
    }
  });
}

const inputCheck = (inputValue) => {
  inputValue = parseInt(inputValue);
  if (inputValue < 10) {
    inputValue = appendZero(inputValue);
  }
  return inputValue;
};

hourInput.addEventListener("input", () => {
  hourInput.value = inputCheck(hourInput.value);
});

minuteInput.addEventListener("input", () => {
  minuteInput.value = inputCheck(minuteInput.value);
});

//Create alarm div

const createAlarm = (alarmObj) => {
  console.log('1', activeAlarms)
  //Keys from object
  const { id, alarmHour, alarmMinute } = alarmObj;
  //Alarm div
  let alarmDiv = document.createElement("div");
  alarmDiv.classList.add("alarm");
  alarmDiv.setAttribute("data-id", id);
  alarmDiv.innerHTML = `<span>${alarmHour}: ${alarmMinute}</span>`;

  //checkbox
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", (e) => {
    if (e.target.checked) {
      startAlarm(e);
    } else {
      stopAlarm(e);
    }
  });
  alarmDiv.appendChild(checkbox);
  //Delete button

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", (e) => deleteAlarm(e));
  alarmDiv.appendChild(deleteButton);
  activeAlarms.appendChild(alarmDiv);
};

//Set Alarm
setAlarm.addEventListener("click", () => {
  alarmIndex += 1;

  //alarmObject
  let alarmObj = {};
  alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;
  alarmObj.alarmHour = hourInput.value;
  alarmObj.alarmMinute = minuteInput.value;
  alarmObj.isActive = false;
  console.log(alarmObj);
  alarmsArray.push(alarmObj);
  createAlarm(alarmObj);
  hourInput.value = appendZero(initialHour);
  minuteInput.value = appendZero(initialMinute);
});



//Start Alarm
const startAlarm = (e) => {
  let searchId = e.target.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    alarmsArray[index].isActive = true;
  }
};

//Stop alarm
const stopAlarm = (e) => {
  let searchId = e.target.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    alarmsArray[index].isActive = false;
    alarmSound.pause();
  }
};

//delete alarm
const deleteAlarm = (e) => {
  let searchId = e.target.parentElement.parentElement.getAttribute("data-id");
  let [exists, obj, index] = searchObject("id", searchId);
  if (exists) {
    e.target.parentElement.parentElement.remove();
    alarmsArray.splice(index, 1);
  }
};

window.onload = () => {
  setInterval(displayTimer);
  initialHour = 0;
  initialMinute = 0;
  alarmIndex = 0;
  alarmsArray = [];
  hourInput.value = appendZero(initialHour);
  minuteInput.value = appendZero(initialMinute);
};

























//const container = document.getElementById("container");
//const setAlarm = document.getElementById("setAlarm");
//const setTime = setAlarm.getElementsByClassName("setTime");

// const curr = document.createElement("div");
// curr.setAttribute("id", "currentTimeof");


// // curr.appendChild(document.createTextNode("dsfakojoa"));
// document.getElementById("container").appendChild(curr);
// // Current time

// const currentTime = document.getElementById("currentTime");

// const alarmTime = document.getElementById("alarmTime");
// const setBotton = document.getElementById("set-btn");

// const now = new Date();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const seconds = now.getSeconds();

// const updateCurrentTime = () => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   const ampm = () => {
//     if (hours < 12) {
//       return "am";
//     } else {
//       return "pm";
//     }
//   };
//   const currentTimeString = `${hours}:${minutes}:${seconds}  ${ampm().toUpperCase()}`;

//   const justTime = document.getElementById("currentTimeof");
//   justTime.innerText = currentTimeString;
// };

// setInterval(() => {
//   updateCurrentTime();

// }, 1000);
// // const mycock = () =>{
// //     let hourInput = document.createElement("select");
// //     let minInput = document.createElement("select");
// //     let secInput = document.createElement("select");

// //     let hr01 = new Option("01", "01");
// //     hourInput.appendChild(hr01);
// //     let hr0२ = new Option("0२", "0२");
// //     hourInput.appendChild(hr0२);
// //     let hr0३ = new Option("0३", "0३");
// //     hourInput.appendChild(hr0३);
// //     let hr0४ = new Option("0४", "0४");
// //     hourInput.appendChild(hr0४);
// //     let hr0५ = new Option("0५", "0५");
// //     hourInput.appendChild(hr0५);
// //     let hr0६ = new Option("0६", "0६");
// //     hourInput.appendChild(hr0६);
// //     let hr0७ = new Option("0७", "0७");
// //     hourInput.appendChild(hr0७);
// //     let hr0८ = new Option("0८", "0८");
// //     hourInput.appendChild(hr0८);
// //     let hr0९ = new Option("0९", "0९");
// //     hourInput.appendChild(hr0९);

// //     setTime[0].appendChild(hourInput);

// // }
// const setTimers = () => {
//   let hr = 00;
//   let min = 00;
//   let sec = 00;

//   const valueLimit = () => {
//     if(hoursInput.value >= 12) hoursInput.value = 12;
//     if(hoursInput.value <= 0) hoursInput.value = 00;

//     if(minInput.value >= 60) minInput.value = 60;
//     if(minInput.value <= 0) minInput.value = 00;

//     if(secInput.value >= 25) secInput.value = 60;
//     if(secInput.value <= 0) secInput.value = 00;
//     }


//   let hoursInput = document.createElement("INPUT");
//   hoursInput.setAttribute("type", "number");
//   hoursInput.addEventListener("change",valueLimit);
//   setTime[0].appendChild(hoursInput);

//   let minInput = document.createElement("INPUT");
//   minInput.setAttribute("type", "number");
//   minInput.addEventListener("change",valueLimit);
//   setTime[0].appendChild(minInput);

//   let secInput = document.createElement("INPUT");
//   secInput.setAttribute("type", "number");
//   secInput.addEventListener("change",valueLimit);
//   setTime[0].appendChild(secInput);

//   let ampmInput = document.createElement("select");
//   //   ampmInput.setAttribute("type", "text");
//   //   ampmInput.setAttribute("value", "AM");
//   //   ampmInput.setAttribute("value", "PM");
//   //   setTime[0].appendChild(ampmInput);

// //   method01 - ES6
//   var option = new Option("AM", "AM", false, false);
//   ampmInput.appendChild(option);
// // method02 - vanila js

//   option = document.createElement("option");
//   option.value = "PM";
//   option.text = "PM";
//   ampmInput.appendChild(option);

//   setTime[0].appendChild(ampmInput);
//   console.log(hoursInput,minInput.value,secInput.value)
// };

// setTimers()