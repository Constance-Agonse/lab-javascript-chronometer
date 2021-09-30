const chronometer = new Chronometer();

console.log(chronometer);

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let min = chronometer.getMinutes();
  minDecElement.innerHTML = `${min[0]}`;
  minUniElement.innerHTML = `${min[1]}`;

  //et le targeter dans le HTML
}

function printSeconds() {
  let sec = chronometer.getSeconds();
  secDecElement.innerHTML = `${sec[0]}`;
  secUniElement.innerHTML = `${sec[1]}`;
  //et le 
}

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
// }

function printSplit() {


}

function clearSplits() {
  // ... your code goes here
li.innerHTML = " ";

}

function setStopBtn() {
  btnLeftElement.innerHTML = "START"
  btnLeftElement.setAttribute('class', 'btn start');
  btnRightElement.innerHTML = "RESET";
  btnRightElement.setAttribute('class', 'btn reset')
}

//il change seulement la couleur et l'intérieur du 
function setSplitBtn() {
let min = chronometer.getMinutes();
let sec = chronometer.getSeconds();
const li = document.createElement('li');
splitsElement.appendChild(li);
li.textContent =`${min}:${sec}:00`;
}


function setStartBtn() {
  /////
  chronometer.start();
  btnLeftElement.innerHTML = "STOP"
  btnLeftElement.setAttribute('class', 'btn stop');
  btnRightElement.innerHTML = "SPLIT";
  btnRightElement.setAttribute('class', 'btn split');
}

function setResetBtn() {
chronometer.reset();
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // printTime()
  //on veut vérifier si l'élement a cette classe
  if (btnLeftElement.classList.contains('start')) {
    setStartBtn();
  }
   else {
  setStopBtn(); 
};
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains('reset')) {
    setResetBtn();
  }
   else {
// ???
};
});
