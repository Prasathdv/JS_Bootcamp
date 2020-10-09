// Challenge 
// This challenge uses if condition and logical operators &&(AND) ||(OR)

let isGuestOneVegan = false
let isGuestTwoVegan = false

// If both are vegan, offer them vegan dishes
// Atleast one is vegan, then offer them few vegan dishes
// Else offer them anything else other than vegan!

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Welcome to Vegan world!!. Here are excusite Vegan dishes for you.. Bon Appetite!!')
} else if (isGuestTwoVegan || isGuestOneVegan){
    console.log('Welcome guests!! We offer you few exclusive Vegan dishes and other multi cusine dishes. Chose yourself and enjoy the dishes!')
}else{
    console.log('Welcome Guests!! Here are list of non-Vegan dishes!!. Enjoy the dishes and please leave your comment!');
}
