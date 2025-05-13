('use strict')

/*
Coding Challenge #12

Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw").
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/

import { game } from "./data/objects.js";

//1.
// using forEach loop
// game.scored.forEach((scorer, ind) => console.log(`Goal ${ind + 1}: ${scorer}`));

// using for of loop
for (const [ind, scorer] of game.scored.entries()) {
    console.log(`Goal ${ind + 1}: ${scorer}`);
}

// 2. 
// Object.keys(game.odds).forEach(key => console.log(key));
const odds = Object.values(game.odds);
const oddsAvg = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
console.log(`Average odd: ${oddsAvg.toFixed(2)}`)

// 3. 
for (const [key, odd] of Object.entries(game.odds)) {
    const teamStr = key === `x` ? `Draw` : `Victory ${game[key]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4.

const scorers = {};

for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
}
console.log(scorers)

// as a reusable function: using reduce() to create a new object

export const getScorersMap = function (scorerArray) {
    return scorerArray.reduce((obj, player) => {
        obj[player] = (obj[player] || 0) + 1;
        return obj;
    }, {});
};

const goalScorers = getScorersMap(game.scored);
console.log(goalScorers);

