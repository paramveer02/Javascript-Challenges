/*
Coding Challenge #5

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

export const calcAverage = scores => {
    const avg = scores.reduce((acc, curValue) => acc + curValue, 0) / scores.length;
    return avg;
}

export const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
    } else {
        console.log("No team wins.");
    }
}

const data1 = {
    dolphins: [44, 23, 71],
    koalas: [65, 54, 49],
}

const data2 = {
    dolphins: [85, 54, 41],
    koalas: [23, 34, 27],
}

const avgD1_Dolphins = calcAverage(data1.dolphins);
const avgD1_Koalas = calcAverage(data1.koalas);
checkWinner(avgD1_Dolphins, avgD1_Koalas);

const avgD2_Dolphins = calcAverage(data2.dolphins);
const avgD2_Koalas = calcAverage(data2.koalas);
checkWinner(avgD2_Dolphins, avgD2_Koalas);


