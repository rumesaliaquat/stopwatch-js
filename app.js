const hoursTimer = document.getElementById("hoursTimer");
const minsTimer = document.getElementById("minsTimer");
const secsTimer = document.getElementById("secsTimer");
const ul = document.getElementById("ul");
// const ul = document.getElementsByClassName("laps");

let sec = 0;
let min = 0;
let hour = 0;
let lapItem = 0;
let startTimerInterval = null;

// Timer start
function stopwatchTimer() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min == 0;
      hour++;
    }
  }
  let s = sec < 10 ? "0" + sec : sec;
  let m = min < 10 ? "0" + min : min;
  let h = hour < 10 ? "0" + hour : hour;

  secsTimer.innerHTML = s;
  minsTimer.innerHTML = m;
  hoursTimer.innerHTML = h;
}

function startTimer() {
  if (startTimerInterval != null) {
    clearInterval(startTimerInterval);
  }
  startTimerInterval = setInterval(stopwatchTimer, 300);
}

// Timer pause
function pauseTimer() {
  clearInterval(startTimerInterval);
}

// Timer reset
function resetTimer() {
  clearInterval(startTimerInterval);
  sec = 0;
  min = 0;
  hour = 0;
  secsTimer.innerHTML = "00";
  minsTimer.innerHTML = "00";
  hoursTimer.innerHTML = "00";
}

// var timerBtn = document.getElementById("timerBtn");
// timerSelect.disabled = true;
// function timerSelectEnable() {
//   var timerSelect = document.getElementById("timerSelect");
//   timerSelect.disabled = false;
// }

// LapRecord
function lapRecord() {
  const li = document.createElement("li");
  const number = document.createElement("span");
  const timeStamp = document.createElement("span");

  li.setAttribute("class", "lap-item");
  number.setAttribute("class", "number");
  timeStamp.setAttribute("class", "time-stamp");

  number.innerText = `#${++lapItem}`;
  timeStamp.innerHTML = `${hoursTimer.innerHTML} : ${minsTimer.innerHTML} : ${secsTimer.innerHTML}`;

  li.append(number, timeStamp);
  console.log("🚀 ~ file: app.js:77 ~ lapRecord ~ li:", li)
  ul.append(li);
  console.log("🚀 ~ file: app.js:78 ~ lapRecord ~ ul:", ul)

}
