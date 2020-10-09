// This challenge will create a function to convert Farenheit to Celcius

let tempConverter = function (faren) {
    let celcius = (faren - 32) * (5/9)
    return celcius
}

let temp1 = tempConverter(32)
let temp2 = tempConverter(100)

console.log('Celcius value of farenheit 32 F is =>', temp1);
console.log('Celcius value of farenheit 100 F is =>', temp2);