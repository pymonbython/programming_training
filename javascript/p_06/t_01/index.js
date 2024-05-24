const btn = document.querySelector("button");
const names = [
  "Jagienka",
  "Dobrawa (Dobrusia)",
  "Daria",
  "Asia",
  "Kira",
  "Marysia",
  "Anastazja",
];
const prefixs = [
  "Wydaje mi się",
  "Mam wrażenie",
  "Szczerze powiedziawszy, myślę",
];
const panel = document.querySelector("div");

const nameGenerator = () => {
  const index = Math.floor(Math.random() * names.length);
  const indexPrefix = Math.floor(Math.random() * prefixs.length);
  panel.textContent = `${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[index]}.`;
};

btn.addEventListener("click", nameGenerator);
