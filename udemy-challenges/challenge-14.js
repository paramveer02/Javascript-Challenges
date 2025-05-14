/*
Coding Challenge #14

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
*/

document.body.append(document.createElement("textarea"));
const btn = document.createElement("button");
btn.textContent = "Convert to camelCase";
document.body.append(btn);

btn.addEventListener("click", function () {
  const input = document.querySelector("textarea").value;
  console.log(input);
  const lines = input.split("\n");

  lines.forEach((line, index) => {
    const trimmed = line.trim().toLowerCase();
    const camel = trimmed
      .split("_")
      .map((word, ind) => {
        return ind === 0 ? word : word[0].toUpperCase() + word.slice(1);
      })
      .join("");
    const formatted = camel.padEnd(20) + "✅".repeat(index + 1);
    console.log(formatted);
  });
});
