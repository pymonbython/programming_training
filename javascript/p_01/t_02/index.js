const btn = document.querySelector("button");
let zmienna;
let counter = 1;
btn.addEventListener("click", function () {
  const liElement = document.createElement("li");
  liElement.textContent = counter;
  if (counter % 3 == 0) {
    liElement.classList.add("bigger");
  }
  counter += 2;
  document.querySelector("ul").appendChild(liElement);
});
