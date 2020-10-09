// This challenge is to validate given password using string methods
// password 8 charcters long and does not contain 'password'

// Method1
// let validatePassword = function(password){
//     if(password.length > 8 && !password.includes('password')){
//         console.log('Correct Password');
//     }else{
//         console.log('Incorrect Password');
//     }
// }

// validatePassword('abcd@1234')
// validatePassword('pass')
// validatePassword('xyzpassword@1234')
// validatePassword('xyzpasswor@1234')

// Method2
let isValidPassword = function(password){
    return password.length >8 && !password.includes('password')
}

console.log(isValidPassword('abcd@1234'));
console.log(isValidPassword('pass'));
console.log(isValidPassword('xyzpassword@1234'));
console.log(isValidPassword('xyzpasswor@1234'));