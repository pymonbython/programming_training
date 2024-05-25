const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");
const txt = ["text1", "text2", "text3"];
let wordCounter = 0;
let charCounter = 0;
let startCounter = 0;
let indexTimeout;

const addLetter = () => {
  if (startCounter > 5) {
    if (charCounter < txt[wordCounter].length) {
      spnText.textContent += txt[wordCounter][charCounter];
      charCounter++;
    } else {
      clearTimeout(indexTimeout);
      wordCounter++;
      charCounter = 0;
      startCounter = 0;
      return setTimeout(() => {
        if (wordCounter < txt.length) {
          spnText.textContent = "";
        }
        addLetter();
      }, 2000);
    }

    if (wordCounter == txt.length) {
      return;
    }
  }

  startCounter++;

  indexTimeout = setTimeout(addLetter, 100);
};

addLetter();

const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};

setInterval(cursorAnimation, 400);
