import { fileURLToPath } from 'url';

/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
*/

const __filename = fileURLToPath(import.meta.url);

const markHeight = 1.69;
const markWeight = 78;

const johnHeight = 1.95;
const johnWeight = 92;

export const markBmi = markWeight / markHeight ** 2;
export const johnBmi = johnWeight / johnHeight ** 2;

const markHigherBMI = markBmi > johnBmi;

// Reusability
export const calculateBMI = function (weight, height) {
    const bmi = weight / height ** 2;
    return bmi;
}

// Only run this when file is executed directly
if (process.argv[1] === __filename) {
    console.log(`Mark's BMI: ${markBmi.toFixed(2)}`);
    console.log(`John's BMI: ${johnBmi.toFixed(2)}`);
    console.log(`Mark's BMI is higher: ${markHigherBMI}`);
}