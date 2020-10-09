// Challenge

// default value for total is undefined. tip percent 0.2

let tipValue = function(total=undefined,tipPer = 0.2){
    let tip = total * tipPer;
    let perTip = tipPer*100
    return `A ${perTip}% tip on total bill value Rs.${total} is Rs.${tip}`
}

customer1 = tipValue()
console.log(customer1);
customer2 = tipValue(120)
console.log(customer2);
customer3 = tipValue(245,0.3)
console.log(customer3);

// let templateName = "Bahut Acha"
// console.log(`This is a sample template string ${templateName}`);