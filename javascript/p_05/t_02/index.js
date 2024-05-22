const input = document.querySelector("input");
const passwords = ["jedEN", "DwA"];
const messages = ["super", "working!"];
const div = document.querySelector(".message");
/*
passwords.forEach((password, index) => {
  passwords[index] = password.toLowerCase();
});
*/
const lowerPasswords = passwords.map((password) => password.toLowerCase());
// const numbers = [10, 45, 66].map((number) => number * 3);

const showMessage = (e) => {
  div.textContent = "";
  /*
  for (let i = 0; i < passwords.length; i++) {
    if (e.target.value.toLowerCase() === passwords[i].toLowerCase()) {
      div.textContent = messages[i];
      e.target.value = "";
    }
  } */

  lowerPasswords.forEach((item, index) => {
    input = e.target.value.toLowerCase();
    if (item === input) {
      div.textContent = messages[i];
      e.target.value = "";
    }
  });
};

input.addEventListener("input", showMessage);
