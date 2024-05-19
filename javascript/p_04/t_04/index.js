let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  if (e.keyCode == 38) {
    if (red <= 255) {
      red++;
      green++;
      blue++;
    }
  } else if (e.keyCode == 40) {
    if (red >= 0) {
      red--;
      green--;
      blue--;
    }
  }
  console.log(red);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener("keydown", changeColor);
