const form = document.querySelector("form");
const ul = document.querySelector("ul");
const elementsNumber = document.querySelector("h1 span");
const liElements = document.getElementsByClassName("task");
const input = document.querySelector("input");

function removeTask(e) {
  e.target.parentNode.remove();
  elementsNumber.textContent = liElements.length;
}

function addElement(e) {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask) {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `${titleTask} <button>delete</button>`;
    ul.appendChild(task);
    input.value = "";
    elementsNumber.textContent = liElements.length;

    task.querySelector("button").addEventListener("click", removeTask);
  }
}
form.addEventListener("submit", addElement);
