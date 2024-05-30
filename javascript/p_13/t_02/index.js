function t(n, A, B, C) {
  if (n > 0) {
    t(n - 1, A, C, B);
    console.log(`${A} -> ${C}`);
    t(n - 1, B, A, C);
  }
}

t(5, "A", "B", "C");
