const input = document.getElementById("pass");
const div = document.querySelector(".message");
const password = "password";
const message = "Message";

input.addEventListener("input", (e) => {
  if (password == e.target.value) {
    div.textContent = message;
    e.target.value = "";
  } else {
    div.textContent = "";
  }
  //  console.log(e.target.value);
});

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
