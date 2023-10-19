#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first no:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your second no:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "-", "+", "/"],
        message: "kindly select operator:"
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
        console.log("Addition:", result);
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
        console.log("Subtraction:", result);
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
        console.log("Dvision:", result);
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
        console.log("Multiplication:", result);
    }
}
else {
    console.log("enter your valid number");
}
