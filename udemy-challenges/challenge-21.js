/*
Coding Challenge #21:

You will build a class called BankAccount that models a real-world bank account with the following features.

🧩 Requirements:
1. Create the BankAccount class with:
- owner (string)
- currency (string, e.g., "EUR", "USD")
- pin (number)
- movements (array, initially empty)
- locale (set to browser's language, use navigator.language)

2. Add the following methods:
- deposit(amount)
- Push the amount to movements
- Return this to allow chaining

- withdraw(amount)
- Push negative amount to movements
- Return this to allow chaining

- get balance
- Return sum of all movements

- set latest(amount)
- Add amount to movements

- get latest
- Return the last movement
*/

class BankAccount {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }

  deposit(amount) {
    this.movements.push(amount);
    return this;
  }

  withdraw(amount) {
    this.movements.push(-amount);
    return this;
  }

  get balance() {
    return this.movements.reduce((acc, mov) => mov + acc, 0);
  }

  set latest(amount) {
    this.movements.unshift(amount);
  }

  get latestTransaction() {
    return this.movements.at(-1);
  }
}

const myAccount = new BankAccount("Paramvir", "INR", 110009);

myAccount.deposit(100);
myAccount.deposit(200);
myAccount.deposit(500);
myAccount.withdraw(50);

myAccount.latest = 800;

console.log(myAccount);
console.log(myAccount.balance);
console.log(myAccount.latestTransaction);
