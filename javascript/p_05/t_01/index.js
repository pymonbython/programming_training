const input = document.getElementById("pass");
const div = document.querySelector(".message");
const passwords = ["password", "user", "spring"];
const messages = ["Message", "message2", "message3"];

input.addEventListener("input", (e) => {
  /*
  if (password == e.target.value) {
    div.textContent = message;
    e.target.value = "";
  } else {
    div.textContent = "";
  } */
  //  console.log(e.target.value);

  const text = e.target.value;
  div.textContent = "";
  //  console.log(text);
  passwords.forEach((password, index) => {
    if (password == text) {
      div.textContent = messages[index];
      e.target.value = "";
    }
  });
});

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
