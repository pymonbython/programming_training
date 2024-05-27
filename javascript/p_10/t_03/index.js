function clock(start = 0, stroke = 1) {
  document.body.textContent = `${start} sekund;`;
  let number = start;

  function timer(strokeNumber = stroke) {
    number += stroke;

    document.body.textContent = `${number} sekund;`;
  }

  return timer;
}
const setTimer = clock();

setInterval(setTimer, 1000);
