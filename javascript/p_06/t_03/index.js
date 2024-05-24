const names = [];
const btn = document.querySelector("button");
const panel = document.querySelector("div");
const addName = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const name = input.value;
  if (input.value.length) {
    for (const name of names) {
      if (name === input.value) {
        alert("To już jest!!!");
        input.value = "";
        return;
      }
    }
    names.push(name);
  }

  panel.textContent = names;
  input.value = "";
};

btn.addEventListener("click", addName);
