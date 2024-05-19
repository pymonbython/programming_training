const h1 = document.body.querySelector("h1");
let red = 255;
let green = 255;
let blue = 255;

document.body.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
  // e.pageX
  // e.screenX
  const width = window.innerWidth;
  const height = window.innerHeight;
  red = (e.clientX / width) * 100;
  green = (e.clientY / height) * 100;
  blue = (e.clientX / width) * 100 + ((e.clientY / height) * 100) / 2;
  h1.textContent = `${e.clientX}, ${e.clientY}`;
  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
  //  document.body.style.backgroundColor = `rgba(${e.clientX / 3}, ${e.clientY / 2}, ${(e.clientX / e.clientY) * 20}, 1)`;
});
