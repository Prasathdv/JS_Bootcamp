
// Challenge

//  Create your age variable and set to your age
let myAge = 7
// Calculate is child  - If they are 7 or under
let isChild = myAge <=7 
// Calculate is senior - If they are 65 or older
let isSenior = myAge >=65

let youngMan = myAge >7 && myAge <65
// print is child value & is senior value 
console.log('Is my age is child`s age? =>' , isChild);
console.log('Is my age is senior`s age? => ', isSenior);
console.log('Is I am young Man? = > ', youngMan);

//  conditionally check if age is within given range

if(myAge<=7){
    console.log('You are kid!!. Go and sleep baby!');
} else if (myAge>=65){
    console.log('You are too old!! Go and take a nap!');
} else {
    console.log('You are younger');
}