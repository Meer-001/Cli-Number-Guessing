#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to my Number Guessing Gane, Hope you enjoyed");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guessed number between 1 to 6: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Hurray!! You guessed the number");
}
else {
    console.log("You guessed the wrong number");
}
console.log("Credit: Ahmer Shaikh");
