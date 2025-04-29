import { markBmi, johnBmi } from "./challenge-01.js"
/*
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/


// Function to compare BMIs and print who is higher
const higherBMI = function (markBmi, johnBmi) {
    markBmi > johnBmi ?
        console.log(`Mark's BMI (${markBmi.toFixed(2)}) is higher than John's (${johnBmi.toFixed(2)})!`) :
        console.log(`John's BMI (${johnBmi.toFixed(2)}) is higher than Mark's (${markBmi.toFixed(2)})!`)
}

higherBMI(markBmi, johnBmi);