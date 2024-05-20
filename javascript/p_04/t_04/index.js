let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  //  if (e.keyCode == 38) {
  //    if (red < 255) {
  //      red++;
  //      green++;
  //      blue++;
  //    }
  //  } else if (e.keyCode == 40) {
  //    if (red > 0) {
  //      red--;
  //      green--;
  //      blue--;
  //    }
  //  }

  switch (e.keyCode) {
    case 38:
      red < 255 ? red++ : red;
      green < 255 ? green++ : green;
      blue < 255 ? blue++ : blue;
      break;
    case 40:
      red > 0 ? red-- : red;
      green > 0 ? green-- : green;
      blue > 0 ? blue-- : blue;
      break;
  }

  console.log(red);
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};

window.addEventListener("keydown", changeColor);
