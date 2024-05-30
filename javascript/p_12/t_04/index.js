const form = document.querySelector("form");
const tasksList = document.querySelector(".tasks-list");

const addTaskInput = document.querySelector("form input");
const searchInput = document.querySelector('[name="search"]');
const btnSearch = document.querySelector(".search");
const span = document.querySelector("h1 span");
const toDoList = [];

function updateTaskList() {
  tasksList.innerHTML = "";
  toDoList.forEach((toDoTask, key) => {
    toDoTask.dataset.key = key;
    tasksList.appendChild(toDoTask);
  });
  span.textContent = toDoList.length;
}

function deleteTask(e) {
  toDoList.splice(e.target.parentNode.dataset.key, 1);
  updateTaskList();
}

function addTask(e) {
  e.preventDefault();
  if (!addTaskInput.value) return;
  task = document.createElement("li");
  task.innerHTML = `${addTaskInput.value} <button>delete</button>`;

  toDoList.push(task);
  updateTaskList();
  addTaskInput.value = "";
  task.addEventListener("click", deleteTask);
}

form.addEventListener("submit", addTask);
function searchTask(e) {
  tasksList.innerHTML = "";
  const filteredToDoList = toDoList.filter((toDoTask) =>
    toDoTask.textContent.toLowerCase().includes(e.target.value.toLowerCase())
  );

  filteredToDoList.forEach((filteredToDoTask) =>
    tasksList.appendChild(filteredToDoTask)
  );
}
searchInput.addEventListener("input", searchTask);
