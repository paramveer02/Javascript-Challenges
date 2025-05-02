/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.20 * bill;

const logBillSummary = bill => {
    const tip = calcTip(bill);
    const total = bill + tip
    return `The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${total.toFixed(2)}`;
}

console.log(logBillSummary(275));
console.log(logBillSummary(40));
console.log(logBillSummary(430));

/*
🔥 Extended Challenge: Tip calculator for multiple bills
*/

const processBills = bills => bills.map(logBillSummary);

// --- Test Data
const bills = [175, 20, 630, 225, 300, 50];

const summaries = processBills(bills);
console.log('\nSummary of Bills:')
summaries.forEach(summary => console.log(summary));