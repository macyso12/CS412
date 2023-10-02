// First generator: Generates Fibonacci numbers starting from 0
function* fibonacciGenerator() {
    let a = 0;
    let b = 1;
    yield a; // F(0) = 0
    while (true) {
      [a, b] = [b, a + b];
      yield a;
    }
  }
  
  // Second generator: Filters even Fibonacci numbers from the first generator
  function* evenFibonacciGenerator() {
    const fibonacci = fibonacciGenerator();
    while (true) {
      const number = fibonacci.next().value;
      if (number % 2 === 0) {
        yield number;
      }
    }
  }
  
  // Use the generators to print the first 6 even Fibonacci numbers
  const evenFibonacci = evenFibonacciGenerator();
  for (let i = 0; i < 6; i++) {
    const evenNumber = evenFibonacci.next().value;
    console.log(evenNumber);
  }
  