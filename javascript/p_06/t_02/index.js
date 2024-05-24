const btn = document.querySelector("button");
const panel = document.querySelector("div");

const chars = "ABCDEFGIJK0123456789";
const codesNumber = 1000;
const charsNumber = 10;

const codesGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumber; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }

    const p = document.createElement("p");

    p.textContent = code;

    panel.appendChild(p);
  }
};

btn.addEventListener("click", codesGenerator);
