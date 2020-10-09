// This program converts farenheit temperature as input to celcius and Kelvin values using functions returning objects.

let temperatureConverter = function(faren){
    let celcius = (faren - 32) * (5/9)
    const kelvinConst = 273.15
    let kelvin = celcius + kelvinConst

    return {
        tempInFaren: `Temperature in Farenheit is ${faren}`,
        tempInCelcius: `Temperature in Celcius is ${celcius}`,
        tempInKelvin: `Temperature in Kelvin is ${kelvin}`
    }    
}

let degree = temperatureConverter(74);

console.log(degree.tempInFaren);
console.log(degree.tempInCelcius);
console.log(degree.tempInKelvin);