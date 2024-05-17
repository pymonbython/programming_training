const btn = document.querySelector("button");

let counter = 0;

function addElement() {
  // console.log("click");
  const div = document.createElement("div");
  if ((counter + 1) % 5 == 0) {
    div.classList.add("circle");
  }
  div.textContent = ++counter;
  document.body.appendChild(div);
}

btn.addEventListener("click", addElement);
