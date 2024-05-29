// const arr = [34, 219, 109, 2222, 12, 1];

// const evenNumbers = arr.filter((number) => !(number % 2));

const veges = ["brukselka", "groch", "batat", "ziemniak", "burak", "pomidor"];

// const double = arr.map((number) => number * 2);
/*
const double = [];

arr.forEach((number, index) => {
  const doubleNumber = number * 2;
  double.push(doubleNumber);

  arr[index] = doubleNumber;
}); */

veges.forEach((vege) => {
  const liElement = document.createElement("li");

  liElement.textContent = vege;

  document.querySelector("ul").appendChild(liElement);
});

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");
function searchElements(e) {
  const searchText = e.target.value.toLowerCase();
  let elements = [...liElements];
  elements = elements.filter((element) =>
    element.textContent.toLowerCase().includes(searchText)
  );
  ul.innerHTML = "";
  elements.forEach((element) => ul.appendChild(element));
}
input.addEventListener("input", searchElements);
