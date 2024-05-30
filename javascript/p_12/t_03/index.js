const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const elementsNumber = document.querySelector("h1 span");
const liElements = document.getElementsByClassName("task");
const input = document.querySelector("input");

function renderList() {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
}

function removeTask(e) {
  // e.target.parentNode.remove();
  renderList();
  elementsNumber.textContent = liElements.length;
  toDoList.splice(e.target.parentNode.dataset.key, 1);
}

function addElement(e) {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask) {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerHTML = `${titleTask} <button>delete</button>`;
    toDoList.push(task);
    renderList();
    /*
    ul.textContent = "";
    toDoList.forEach((toDoEelement, key) => {
      toDoElement.dataset.key = key;
      ul.appendChild(toDoElement);
    }); */
    ul.appendChild(task);
    input.value = "";
    elementsNumber.textContent = liElements.length;

    task.querySelector("button").addEventListener("click", removeTask);
  }
}
form.addEventListener("submit", addElement);
