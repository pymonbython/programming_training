const brightnessBar = document.querySelector('[name="brightness-bar"]');
const contrastBar = document.querySelector('[name="contrast-bar"]');
const saturationBar = document.querySelector('[name="saturation-bar"]');
const hueBar = document.querySelector('[name="hue-bar"]');
const exampleImage = document.querySelector(".example-image");
const blurBar = document.querySelector('[name="blur-bar"]');

const root = document.documentElement;
/*
function updatesFilters() {
  console.log(brightnessBar.value);
  console.log(hueBar.value);
  console.log(contrastBar.value);
  console.log(blurBar.value);
  console.log(saturationBar.value);

  console.log(
    `brightness(${brightnessBar.value}%) contrast(${contrastBar.value}%) saturation(${saturationBar.value}%) hue-rotate(${hueBar.value}deg) blur(${blurBar.value}px)`
  );

  exampleImage.style.filter = `brightness(${brightnessBar.value}%) contrast(${contrastBar.value}%) saturate(${saturationBar.value}%) hue-rotate(${hueBar.value}deg) blur(${blurBar.value}px)
`;
}
*/
function updatesFilters() {
  root.style.setProperty("--brightness", brightnessBar.value + "%");
  root.style.setProperty("--contrast", contrastBar.value + "%");
  root.style.setProperty("--saturation", saturationBar.value + "%");
  root.style.setProperty("--hue", hueBar.value + "deg");
  root.style.setProperty("--blur", blurBar.value + "px");
}

[brightnessBar, contrastBar, saturationBar, hueBar, blurBar].forEach((bar) => {
  bar.addEventListener("input", updatesFilters);
});

// Scroller

document.querySelector(".btn-scroller").addEventListener("click", () => {
  document
    .querySelector(".example-section")
    .scrollIntoView({ behavior: "smooth" });
});
