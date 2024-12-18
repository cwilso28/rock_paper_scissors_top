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
function getHumanChoice() {
    // INIT a variable for the users choice and prompt them to input their choice
    // let humanChoice = prompt("Select rock, paper, or scissors: ")
    // let humanChoice = 'rock'
    // IF the user inputs rock
    if (humanChoice === 'rock') {
        // Display the message: "You chose rock"
        console.log("You chose rock");
    }
    // ELSE IF the user inputs paper
    else if (humanChoice === 'paper') {
        // Display the message: "You chose paper"
        console.log("You chose paper");
    }
    // ELSE IF the user inputs scissors
    else if (humanChoice === 'scissors') {
        // Display the message: "You chose scissors"
        console.log("You chose scissors");
    }
    // ELSE
    else {
        // Display the message: "Incorrect input"
        console.log("Incorrect input")
        // Exit the program
        // break;
    }
    // OUTPUT the human choice
    return humanChoice
}

getHumanChoice();