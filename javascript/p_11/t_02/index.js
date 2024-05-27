const myBirthday = new Date("2024-09-13").getTime();
const spanD = document.querySelector("span.d");
const spanH = document.querySelector("span.h");
const spanM = document.querySelector("span.m");
const spanS = document.querySelector("span.s");
function showTime() {
  const newTime = new Date().getTime();
  const time = Math.floor((myBirthday - newTime) / 1000);

  const days = Math.floor(time / (60 * 60 * 24));
  spanD.textContent = days;

  const hours = Math.floor((time / (60 * 60)) % 24);
  spanH.textContent = hours;

  const minutes = Math.floor((time / 60) % 60);
  spanM.textContent = minutes;

  const seconds = Math.floor(time % 60);
  spanS.textContent = seconds > 9 ? seconds : "0" + seconds;
}
setInterval(showTime, 1000);
