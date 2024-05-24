const options = [];
const btnReset = document.getElementById("reset");
const panel = document.querySelector("h1");

btnReset.addEventListener("click", (e) => {
  e.preventDefault();
  options.length = 0;
  panel.textContent = "";
  input.value = "";
});

const btnAdd = document.getElementById("add");
const input = document.querySelector("input");

function addOption(e) {
  e.preventDefault();
  option = input.value;
  if (option) {
    for (const option of options) {
      if (option === input.value) {
        alert("To już jest!!!");
        input.value = "";
        return;
      }
    }
    options.push(option);
    input.value = "";
  }
}

btnAdd.addEventListener("click", addOption);

const btnShowAdvice = document.querySelector(".showAdvice");
const btnShowOptions = document.querySelector(".showOptions");

const showAdvice = () => {
  index = Math.floor(Math.random() * options.length);
  if (options.length == 0) {
    alert("Nie ma dodanych żadnych opcji!!!");
    return;
  }
  panel.textContent = options[index];
};

btnShowAdvice.addEventListener("click", showAdvice);
/*
const showOptions = () => {
  panel.textContent = "";
  for (const option of options) {
    panel.textContent += option + ", ";
  }
};
*/

const showOptions = () => {
  alert(options.join(", "));
};
btnShowOptions.addEventListener("click", showOptions);
