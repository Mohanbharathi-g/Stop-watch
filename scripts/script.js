'use strict';

// selecting elements

const timeEl = document.getElementById('time');

const startEl = document.getElementById('start');

const pauseEl = document.getElementById('pause');

const resetEl = document.getElementById('reset');

// timeEl.innerHTML = 'hiii';

// global variables
function init() {
  let milliseconds = 0;
  let second = 0;

  let minutes = 0;
  let hours = 0;

  let int = null;
}

let milliseconds = 0;
let second = 0;

let minutes = 0;
let hours = 0;

let int = null;

// function

const getTime = () => {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    second++;

    if (second == 59) {
      second = 0;
      minutes++;
      if (minutes == 59) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = second < 10 ? '0' + second : second;

  let mm =
    milliseconds < 10
      ? '00' + milliseconds
      : milliseconds < 100
      ? '0' + milliseconds
      : milliseconds;

  timeEl.innerHTML = `${h}:${m}:${s}:${mm}`;

  // console.log(h, m, s, mm);
};

// add event listeners
startEl.addEventListener('click', function () {
  if (int !== null) {
    clearInterval(null);
  }
  int = setInterval(getTime, 10);
  console.log(`hiii`);
});

pauseEl.addEventListener('click', () => {
  clearInterval(int);
});
resetEl.addEventListener('click', function () {
  clearInterval(int);

  init();

  timeEl.innerHTML = '00:00:00:00';
});
