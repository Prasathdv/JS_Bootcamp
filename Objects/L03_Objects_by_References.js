// This module demonstrates objects references in functions

let myAccount = {
    name: 'Prasath',
    income: 0,
    expense:0
}

let accountSammu = {
    name: 'Sammu',
    income: 0,
    expense:0
}


let addExpense = function(account, expenseAmount){
    account.expense = account.expense + expenseAmount
    
}

// Add Income
let addIncome = function(account, incomeAmount){
    account.income = account.income + incomeAmount
}

// reset Account
let resetAccount = function (account){
    account.income = 0
    account.expense = 0
}

// getAccountSummary
// Account for {name} has balance of Rs.{Bal} with income of {income} and expenses {expense}
let getAccountSummary = function(account){
    console.log(account);
    console.log( `Account for ${account.name} has balance of Rs.${account.income-account.expense} with income amount of Rs.${account.income} and expense amount of Rs.${account.expense}`)
}

let accountToCheck = myAccount

// addIncome
addIncome(accountToCheck,50000)
// addExpense
addExpense(accountToCheck,9000)
// addExpense
addExpense(accountToCheck,5400)
// getAccountSummary
getAccountSummary(accountToCheck)
// resetAccount
resetAccount(accountToCheck)
// getAccountSummary
getAccountSummary(accountToCheck)

accountToCheck = accountSammu

// addIncome
addIncome(accountToCheck,15000)
// addExpense
addExpense(accountToCheck,8732)
// addExpense
addExpense(accountToCheck,967)
// getAccountSummary
getAccountSummary(accountToCheck)
// resetAccount
resetAccount(accountToCheck)
// getAccountSummary
getAccountSummary(accountToCheck)