/*
Coding Challenge #8

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array. 

4.1. Call the function with the 'totals' array
*/

import { calcTip } from "./challenge-06.js";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (const bill of bills) {
    const tip = calcTip(bill)
    tips.push(tip);
    totals.push(bill + tip);
}

console.log('Tips: ', tips);
console.log('Totals: ', totals);

const calcAverage = arr => {
    return arr.reduce((acc, curEl) => acc + curEl, 0) / arr.length;
};

console.log(`Average of totals: ${calcAverage(totals).toFixed(2)}`);

