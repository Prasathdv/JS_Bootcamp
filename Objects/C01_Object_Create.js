// Challenge to create a person object
// Print like '{name} is of {age} years and lives in {location}.

let person = {
    name: 'Prasath',
    age: 37,
    location: 'Pallikaranai'
}

console.log(`${person.name} is ${person.age} and currently lives in ${person.location}`);

person.age = 38
person.location = 'UK'
console.log(`${person.name} is ${person.age} and currently lives in ${person.location}`);