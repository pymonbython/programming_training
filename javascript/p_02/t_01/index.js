const square = document.createElement("div");
document.body.appendChild(square);
let size = 10;
square.style.width = size + "px";
square.style.height = size + "px";
let grow = true;

function updateSize() {
  if (grow) {
    size += 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 5;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }

  if (size >= window.innerWidth * 0.5) {
    grow = !grow;
  } else if (size == 10) {
    grow = !grow;
  }
}

window.addEventListener("scroll", () => {
  updateSize();
});
