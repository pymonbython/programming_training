document.addEventListener("DOMContentLoaded", () => {
  const inputRange = document.querySelector(".rangeInput");
  const sampleText = document.querySelector(".sampleText");
  const fontSelector = document.querySelector(".fontSelector");
  inputRange.addEventListener("input", (e) => {
    console.log(e.target.value);
    sampleText.style.fontSize = e.target.value + "px";
  });

  fontSelector.addEventListener("change", (e) => {
    const font = e.target.value;
    sampleText.style.fontFamily = font;
    ("/home/szymurai/Downloads/Roboto/Roboto-Regular.ttf");
  });
});
