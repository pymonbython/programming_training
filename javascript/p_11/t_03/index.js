const btnStart = document.querySelector(".main");
const btnReset = document.querySelector(".reset");

const panel = document.querySelector(".time div");
let time = 0;
let indexInterval;
function stopwatch() {
  if (btnStart.textContent === "Pause") {
    clearInterval(indexInterval);
    btnStart.textContent = "Start";
  } else {
    indexInterval = setInterval(() => {
      displayedTime = time++ / 100;
      panel.textContent = displayedTime.toFixed(2);
    }, 10);
    btnStart.textContent = "Pause";
  }
}

function clearApp() {
  time = 0;
  panel.textContent = "---";
  btnStart.textContent = "Start";
  if (indexInterval) {
    clearInterval(indexInterval);
  }
}

btnStart.addEventListener("click", stopwatch);
btnReset.addEventListener("click", clearApp);
