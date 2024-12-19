// Produce an option of rock, paper or scissors
function getComputerChoice() {
    // COMPUTE a random number between 0 and 2, inclusive
    let randomNumber = Math.floor(Math.random() * 3);
    // INIT a list of computer options
    let options = ['rock', 'paper', 'scissors']
    // GET an option from a list with the random number
    let choice = options[randomNumber]
    // OUTPUT the computer's choice
    return choice
}

// console.log(getComputerChoice());

// Ask the user for their choice
// INIT a function to get the users choice
function getHumanChoice(inputChoice) {
    // INIT a variable for the users choice and prompt them to input their choice

    // IF the user inputs rock
        // Display the message: "You chose rock"
    // ELSE IF the user inputs paper
        // Display the message: "You chose paper"
    // ELSE IF the user inputs scissors
        // Display the message: "You chose scissors"
    // ELSE
        // Display the message: "Incorrect input"
        // Exit the program
    // OUTPUT the human choice

    let humanChoice = (inputChoice) ? inputChoice : prompt("Select rock, paper, or scissors: ")
    if (humanChoice === 'rock') {
        console.log("You chose rock");
    }
    else if (humanChoice === 'paper') {
        console.log("You chose paper");
    }
    else if (humanChoice === 'scissors') {

        console.log("You chose scissors");
    }
    else {
        console.log("Incorrect input")
        return
    }
    
    return humanChoice
}

// INIT a variable to store the user score and set it to zero
// INIT a variable to store the computer score and set it to zero
let humanScore = 0;
let computerScore = 0;