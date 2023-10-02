// Define the cube function using 'fat arrow' notation
const cube = (x) => x ** 3;

// Create an array of values
const values = [1, 2, 3, 4, 5, 6, 7];

// Use .map() to calculate the cube of each value and print the results
const cubedValues = values.map(cube);
console.log(cubedValues);

