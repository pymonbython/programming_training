const square = document.body.querySelector("div");

let squareX = 150;
let squareY = 50;

square.style.left = squareX + "px";
square.style.top = squareY + "px";
let drawActive = false;

let insertSquareX;
let insertSquareY;
square.addEventListener("mousedown", (e) => {
  square.style.backgroundColor = "gray";
  drawActive = !drawActive;

  insertSquareX = e.offsetX;
  insertSquareY = e.offsetY;

  square.addEventListener("mousemove", (e) => {
    if (drawActive) {
      square.style.left = e.clientX - insertSquareX + "px";
      square.style.top = e.clientY - insertSquareY + "px";
    }
  });
});

square.addEventListener("mouseup", (e) => {
  square.style.backgroundColor = "black";
  drawActive = !drawActive;
});
