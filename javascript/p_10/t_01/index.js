let clickNumber = 0;
function add() {
  clickNumber++;
  document.body.textContent = `Aktualny stan licznika to: ${clickNumber}`;
}
window.addEventListener("click", add);

function x() {
  let number = 0;
  function y() {
    console.log(number);
  }
  return y;
}

const example = x();

example();

function addNumber(start = 0) {
  let number = start;
  return () => {
    number++;
    documnet.body.textContent = `Aktualny stan licznika kliknięć to: ${number}`;
  };
}

const counter = addNumber();
const counterFromFive = add(5);
document.addEventListener("click", counterFromFive);
