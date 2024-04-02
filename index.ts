#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter Your first number", type: "number", name: "FirstNumber" },
    { message: "Enter Your second number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Square", "Cube"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.operator === "Square") {
    var number = answer.FirstNumber;
    var exponent = 2;
    var result = Math.pow(number, exponent);
    console.log("The square of " + number + " is = " + result);
}
else if (answer.operator === "Cube") {
    var number = answer.FirstNumber;
    var exponent = 3;
    var result = Math.pow(number, exponent);
    console.log("The cube of " + number + " is = " + result);
}
else {
    console.log("Enter a valid operator");
}
