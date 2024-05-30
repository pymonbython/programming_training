const arr = [4, 3, 645];

function addNumbersFromArray(array = []) {
  let sumArray = 0;
  array.map((element) => {
    sumArray += element;
  });

  return sumArray;
}
const addNumbersFromArray2 = (array = []) => {
  let sumArray = 0;
  for (const number of array) {
    sumArrau += number;
  }

  return sumArray;
};

const addNumbersFromArray3 = (array = []) => {
  // let sumArray = 0;
  // array.forEach((number) => (sumArray += number));
  return array.reduce((prev, next) => prev + next);
};

const sum = addNumbersFromArray(arr);
console.log(sum);

function addScope(a, b) {
  let sum = 0;
  for (let i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}

const scope = addScope(2, 5);
console.log(scope);
