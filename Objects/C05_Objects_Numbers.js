// Challenge
// Guessing game
// 1-5 true if correct | false if not correct

let guessGame = function(userGuessedNumber){
    let min = 1
    let max = 5
    let randNo = Math.floor(Math.random() * (max-min + 1))
    console.log(randNo);
    return randNo === userGuessedNumber
}

console.log(guessGame(2))
console.log(guessGame(4))
console.log(guessGame(1))
console.log(guessGame(5))
console.log(guessGame(3))
console.log(guessGame(2))