const clock = () => {
  const time = new Date();
  console.log(time.toLocaleString());
  console.log(time.toLocaleDateString());
  const seconds = time.getSeconds();
  const minutes =
    time.getMinutes() > 9 ? time.getMinutes() : "0" + time.getMinutes();
  const hours = time.getHours() > 9 ? time.getHours() : "0" + time.getHours();

  document.querySelector(".clock span").textContent =
    `${hours}:${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
};

setInterval(clock, 1000);
