const slideList = [
  {
    img: "images/img1.jpg",
    text: "Pierwszy tekst",
  },
  {
    img: "images/img2.jpg",
    text: "Drugi tekst",
  },
  {
    img: "images/img3.jpg",
    text: "Trzeci tekst",
  },
];
let setIntervalIndex;
const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll("div.dots span")];
// Interfejs

const time = 3000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active == slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;

  changeDot();
};

setIntervalIndex = setInterval(changeSlide, time);

// Implementacja

function keyChangeSlide(e) {
  clearInterval(setIntervalIndex);
  switch (e.keyCode) {
    case 37:
      active--;
      break;
    case 39:
      active++;
      break;
  }

  if (active == slideList.length) {
    active = 0;
  } else if (active < 0) {
    active = slideList.length - 1;
  }

  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  changeDot();
  setIntervalIndex = setInterval(changeSlide, time);
}
window.addEventListener("keydown", keyChangeSlide);

