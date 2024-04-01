import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("!!Welcome to ash07 number guessing game!!");
const answer = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "please guess a  number between 1-6: ",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number.");
}
;
