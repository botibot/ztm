const fs = require("fs");

console.time("challenge");
const steps = fs.readFileSync("./santaInstructions.txt", "utf-8");
//console.log(steps.length);

let i;
let sum = 0;
let report = false;
let base;

for (i = 0; i < steps.length; i++) {
  value = steps.charAt(i);
  if (value === "(") {
    sum = sum + 1;
  }
  if (value === ")") {
    sum = sum - 1;
  }
  if (sum < -1 && report === false) {
    base = i;
    report = true;
  }
}

console.timeEnd("challenge");
console.log(sum);
console.log(base);
