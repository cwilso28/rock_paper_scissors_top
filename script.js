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
    // IF the user inputs a 1 or rock
        // Display the message: "You chose rock"
    // ELSE IF the user inputs a 2 or paper
        // Display the message: "You chose paper"
    // ELSE IF the user inputs a 3 or scissors
        // Display the message: "You chose scissors"
    // ELSE
        // Display the message: "Incorrect input. Try again."
}