function t(n, A, B, C) {
  if (n > 0) {
    t(n - 1, A, C, B);
    console.log(`${A} -> ${C}`);
    t(n - 1, B, A, C);
  }
}

t(5, "A", "B", "C");

function countSquares(x = 5, y = 4, squares = 4) {
  let a = 1;
  let b = 1;

  switch (squares) {
    case 1:
      if (squares < x) {
        a = x;
      }

      if (squares < y) {
        b = y;
      }
      break;
    case 2:
      if (squares < x) {
        a = x - 1;
      }

      if (squares < y) {
        b = y - 1;
      }
      break;
    case 3:
      if (squares < x) {
        a = x - 2;
      }

      if (squares < y) {
        b = y - 2;
      }
      break;
    case 4:
      if (squares < x) {
        a = x - 3;
      }

      if (squares < y) {
        b = y - 3;
      }
      break;
  }

  return a * b;
}

console.log(countSquares());

function ileKwadratow(a, b) {
  let min = a < b ? a : b;
  let ile = 0;

  for (let i = 0; i < min; i++) {
    let result = (a - i) * (b - i);
    console.log(`Kwadratów ${i + 1}x${i + 1}, jest ${result}`);
    ile += result;
  }
  console.log(`Razem mamy ${ile} kwadratów.`);
  return ile;
}

ileKwadratow(8, 3);
