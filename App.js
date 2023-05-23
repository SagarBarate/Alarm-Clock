const container = document.getElementById("container");
const setAlarm = document.getElementById("setAlarm");
const setTime = setAlarm.getElementsByClassName("setTime");

const curr = document.createElement("div");
curr.setAttribute("id", "currentTimeof");


// curr.appendChild(document.createTextNode("dsfakojoa"));
document.getElementById("container").appendChild(curr);
// Current time

const currentTime = document.getElementById("currentTime");

const alarmTime = document.getElementById("alarmTime");
const setBotton = document.getElementById("set-btn");

const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const updateCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = () => {
    if (hours < 12) {
      return "am";
    } else {
      return "pm";
    }
  };
  const currentTimeString = `${hours}:${minutes}:${seconds}  ${ampm().toUpperCase()}`;

  const justTime = document.getElementById("currentTimeof");
  justTime.innerText = currentTimeString;
};

setInterval(() => {
  updateCurrentTime();

}, 1000);
// const mycock = () =>{
//     let hourInput = document.createElement("select");
//     let minInput = document.createElement("select");
//     let secInput = document.createElement("select");

//     let hr01 = new Option("01", "01");
//     hourInput.appendChild(hr01);
//     let hr0२ = new Option("0२", "0२");
//     hourInput.appendChild(hr0२);
//     let hr0३ = new Option("0३", "0३");
//     hourInput.appendChild(hr0३);
//     let hr0४ = new Option("0४", "0४");
//     hourInput.appendChild(hr0४);
//     let hr0५ = new Option("0५", "0५");
//     hourInput.appendChild(hr0५);
//     let hr0६ = new Option("0६", "0६");
//     hourInput.appendChild(hr0६);
//     let hr0७ = new Option("0७", "0७");
//     hourInput.appendChild(hr0७);
//     let hr0८ = new Option("0८", "0८");
//     hourInput.appendChild(hr0८);
//     let hr0९ = new Option("0९", "0९");
//     hourInput.appendChild(hr0९);

//     setTime[0].appendChild(hourInput);

// }
const setTimers = () => {
  let hr = 00;
  let min = 00;
  let sec = 00;

  const valueLimit = () => {
    if(hoursInput.value >= 12) hoursInput.value = 12;
    if(hoursInput.value <= 0) hoursInput.value = 00;

    if(minInput.value >= 60) minInput.value = 60;
    if(minInput.value <= 0) minInput.value = 00;

    if(secInput.value >= 25) secInput.value = 60;
    if(secInput.value <= 0) secInput.value = 00;
    }


  let hoursInput = document.createElement("INPUT");
  hoursInput.setAttribute("type", "number");
  hoursInput.addEventListener("change",valueLimit);
  setTime[0].appendChild(hoursInput);

  let minInput = document.createElement("INPUT");
  minInput.setAttribute("type", "number");
  minInput.addEventListener("change",valueLimit);
  setTime[0].appendChild(minInput);

  let secInput = document.createElement("INPUT");
  secInput.setAttribute("type", "number");
  secInput.addEventListener("change",valueLimit);
  setTime[0].appendChild(secInput);

  let ampmInput = document.createElement("select");
  //   ampmInput.setAttribute("type", "text");
  //   ampmInput.setAttribute("value", "AM");
  //   ampmInput.setAttribute("value", "PM");
  //   setTime[0].appendChild(ampmInput);

//   method01 - ES6
  var option = new Option("AM", "AM", false, false);
  ampmInput.appendChild(option);
// method02 - vanila js

  option = document.createElement("option");
  option.value = "PM";
  option.text = "PM";
  ampmInput.appendChild(option);

  setTime[0].appendChild(ampmInput);
  console.log(hoursInput,minInput.value,secInput.value)
};

setTimers()