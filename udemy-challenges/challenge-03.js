/*
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

export const calcAverage = scores => scores.reduce((acc, curValue) => acc + curValue, 0) / scores.length;

export const checkWinner = (scoreDolphins, scoreKoalas) => {
    const avgScoreDolphins = calcAverage(scoreDolphins);
    const avgScoreKoalas = calcAverage(scoreKoalas);

    console.log(`Dolphins Avg: ${avgScoreDolphins.toFixed(2)}`);
    console.log(`Koalas Avg: ${avgScoreKoalas.toFixed(2)}`);

    // Bonus 2 condition: Draw with min 100
    if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
        console.log("It's a draw! Both teams scored above 100 🏆");
    }
    // Bonus 1 condition: Winner must have >= 100
    else if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
        console.log(`Dolphins win the trophy with ${avgDolphins.toFixed(2)} 🎉`);
    } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
        console.log(`Koalas win the trophy with ${avgScoreKoalas.toFixed(2)} 🥳`);
    } else {
        console.log("No team wins the trophy. Score too low 😕");
    }
};

// --- Test Data Sets ---

const data1 = {
    dolphins: [96, 108, 89],
    koalas: [88, 91, 110],
};

const bonus1 = {
    dolphins: [97, 112, 101],
    koalas: [109, 95, 123],
};

const bonus2 = {
    dolphins: [97, 112, 101],
    koalas: [109, 95, 106],
};

console.log(`\nTest Data 1:`)
checkWinner(data1.dolphins, data1.koalas)

console.log(`\nBonus Test 1:`)
checkWinner(bonus1.dolphins, bonus1.koalas)

console.log(`\nBonus Test 2`)
checkWinner(bonus2.dolphins, bonus2.koalas)



