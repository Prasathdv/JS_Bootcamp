// functions basic
// Write a function to square a given number

let squareNum = function(num){
    console.log(num * num);
}

squareNum(6);
squareNum(9);
squareNum(16);

let squareReturn = function(num){
    return num * num
}

let square1 = squareReturn(90)
let square2 = squareReturn(99)

console.log(square1, square2);