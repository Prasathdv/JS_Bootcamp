// Number and Math methods
let num = 106.896

console.log(num.toFixed(13));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

// Creating random numbers between two integers
let min = 10
let max = 20
let randNo = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randNo);