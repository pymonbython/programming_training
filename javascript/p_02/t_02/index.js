document.body.style.height = 10000 + "vh";

const div = document.createElement("div");

document.body.appendChild(div);

let size = 10;
let grow = true;
let color = "green";

div.style.width = 100 + "%";
div.style.position = "fixed";
div.style.top = 0;
div.style.left = 0;
div.style.backgroundColor = color;
div.style.height = size + "px";

function changeHeight() {
  if (grow) {
    size += 5;
    color = "green";
    // div.style.backgroundColor = "green";
  } else {
    size -= 5;
    color = "red";
    // div.style.backgroundColor = "red";
  }
  div.style.height = size + "px";
  div.style.backgroundColor = color;

  if (size >= window.innerHeight / 2) {
    grow = !grow;
  } else if (size <= 10) {
    grow = !grow;
  }
}

window.addEventListener("scroll", () => {
  changeHeight();
});
