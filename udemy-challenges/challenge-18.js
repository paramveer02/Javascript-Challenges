/*
Coding Challenge #18

Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Forumla:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order

*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

dogs.forEach((dog) => {
  return (dog["recommendedFood"] = +(dog["weight"] ** 0.75 * 28).toFixed(2));
});

const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));

if (sarahDog) {
  const { curFood, recommendedFood } = sarahDog;

  if (curFood > recommendedFood) {
    console.log("Sarah's dog is eating too much 🐶🍗");
  } else if (curFood < recommendedFood) {
    console.log("Sarah's dog is eating too little 🐶🥦");
  } else {
    console.log("Sarah's dog is eating just right 🐶👌");
  }
}

const ownersEatTooMuch = dogs.filter(
  (dog) => dog.curFood > dog.recommendedFood
);

const ownersEatTooLittle = dogs.filter(
  (dog) => dog.curFood < dog.recommendedFood
);

console.log(ownersEatTooMuch);
console.log("--");
console.log(ownersEatTooLittle);
console.log("--");

const ownersTooMuch = ownersEatTooMuch.flatMap((dog) => dog.owners);
const ownersTooLittle = ownersEatTooLittle.flatMap((dog) => dog.owners);

console.log(`${ownersTooMuch.join(" and ")} dog's eat too much`);
console.log(`${ownersTooLittle.join(" and ")} dog's eat too little`);

const exactAmount = dogs.some((dog) => dog.curFood === dog.recommendedFood);
console.log(exactAmount);

const isEatingOkay = function (dog) {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
};

const isEatingOkayArr = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const anyOkay = dogs.some(isEatingOkay);
console.log(anyOkay);

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood); // increasing
//   .sort((a, b) => b.recommendedFood - a.recommendedFood);  // Decreasing
console.log(dogsSorted);
