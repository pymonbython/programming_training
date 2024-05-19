let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button");
  document.body.appendChild(btn);
  const btnReset = document.createElement("button");
  btnReset.textContent = "Clear";
  document.body.appendChild(btnReset);
  const list = document.createElement("ul");
  document.body.appendChild(list);
  list.style.listStyle = "none";
  btn.innerText = "Create elements";

  btn.addEventListener("click", createLiElements);
  btnReset.addEventListener("click", () => {
    list.innerHTML = "";
    size = 10;
    orderElement = 1;
  });
};

const createLiElements = () => {
  const list = document.querySelector("ul");
  console.log(list);
  for (let i = 0; i < 10; i++) {
    const liElement = document.createElement("li");
    liElement.style.fontSize = size + "px";
    liElement.innerText = "Element " + orderElement;
    list.appendChild(liElement);
    size++;
    orderElement++;
  }
};

init();
