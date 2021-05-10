const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const multiply = (numbers) => {
  const arr = [];
  numbers.forEach((numbers) => arr.push(numbers * 3));
  return arr;
};

console.log(multiply(numbers));
