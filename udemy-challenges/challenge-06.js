/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above. 
Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
*/

const calcTip = bill => {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
    return tip;
}
calcTip(100);

const bills = [125, 555, 44];

const tips = bills.map(bill => calcTip(bill));
const total = bills.map((curEl, ind) => curEl + tips[ind])
// or
const total2 = bills.map(bill => bill + calcTip(bill))

console.log(tips);
console.log(total);
console.log(total2);