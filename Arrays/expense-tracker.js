// This module is to track the expenses using arrays concept learned so for
// Declare an expense array first
const account = {
    name: 'Prasath',
    income: [],
    expenses : [],   
    addExpense: function (expenseDescription, expenseAmount){
        this.expenses.push({
            description: expenseDescription,
            amount: expenseAmount
        })
    },
    addIncome: function (incomeDescription, incomeAmount){
        this.income.push({
            description: incomeDescription,
            amount: incomeAmount
        })
    },
    getAccountSummary: function(){
        let expenseTotal = 0
        let incomeTotal = 0
        this.income.forEach(function (income) {
            incomeTotal = incomeTotal + income.amount
        })
        this.expenses.forEach(function (expense){
            expenseTotal = expenseTotal + expense.amount
        })
        let balanceAmount = incomeTotal - expenseTotal
        return `${this.name} has a balance of Rs.${balanceAmount}. Rs.${incomeTotal} in income. Rs.${expenseTotal} in expenses.`;
    }
}

account.addIncome('Monthly Salary',91000)
account.addIncome('Equity Dividend', 1000)
account.addIncome('Interest', 1000)
account.addExpense('non-veg',934)
account.addExpense('Vegetables', 707)
account.addExpense('Fruits',534)
console.log(account.getAccountSummary())
console.log(account.income);
console.log(account.expenses);

