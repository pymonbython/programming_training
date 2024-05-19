document.body.addEventListener("click", (e) => {
  x = e.clientX;
  y = e.clientY;
  console.log(x, y);

  //  if (x % 2 == 0 && y % 2 == 0) {
  //    document.body.style.backgroundColor = "red";
  //  } else if (x % 2 == 0 || y % 2 == 0) {
  //    document.body.style.backgroundColor = "green";
  //  } else {
  //    document.body.style.backgroundColor = "blue";
  //  }
  const color = getColor(x, y);

  document.body.style.backgroundColor = color;
});

const getColor = function (x, y) {
  if (x % 2 == 0 && y % 2 == 0) {
    return "red";
  } else if (x % 2 == 0 || y % 2 == 0) {
    return "green";
  } else {
    return "blue";
  }
};
