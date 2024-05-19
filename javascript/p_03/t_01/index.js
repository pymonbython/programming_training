const btn = document.querySelector("button");
let size = 10;
const list = document.querySelector("ul");
const elements = list.querySelectorAll("li");
// elements.forEach((element) => {
// element.style.fontSize = size + "px";
// });
btn.addEventListener("click", () => {
  if (!list.style.display) {
    list.style.display = "block";
  }
  // size += 5;
  // elements.forEach((element) => {
  // element.style.fontSize = size + "px";
  // });

  // for (const element of elements) {
  // element.style.fontSize = size + "px";
  // }

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = size + "px";
  }

  size += 10;
});
