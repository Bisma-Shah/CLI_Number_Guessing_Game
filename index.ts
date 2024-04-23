#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Print welcome message
console.log(chalk.bold.rgb(284, 284,284)(` \n  \t\t <<<==========================>>>`));
console.log(chalk.bold.rgb(284, 284,284)(`<<<=======>>> ${chalk.bold.hex(`#bada55`)(`Welcome to \`Bisma Shah\` - CLI-Number-Guessing App`)}  <<<=========>>>`));
console.log(chalk.bold.rgb(284, 284,284)(`\t\t <<<==============================>>>\n`));

// Computer will generate a random number - Done.

// user input for guessing number - Done.

// Compare user input with computer generated number and show result - Done.

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);

if (answers.userGuessedNumber === randomNumber) {
console.log(chalk.green.bold("Congratulations! you Entered the Right Number."));
}
else{
console.log(chalk.red.bold("oops! that's not the Correct Number. Keep trying! ."));
}