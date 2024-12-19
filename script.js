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
    if (humanChoice.toLowerCase() === 'rock') {
        console.log("You chose rock");
    }
    else if (humanChoice.toLowerCase() === 'paper') {
        console.log("You chose paper");
    }
    else if (humanChoice.toLowerCase() === 'scissors') {
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

// Play a round of rock, paper, scissors
// INIT a function that takes in getComputerChoice and getHumanChoice
    // CONVERT inputs to lowercase
    // IF getHumanChoice is rock and getComputerChoice is paper or getHumanChoice is scissors and getComputerChoice is rock or getHumanChoice is paper and get ComputerChoice is scissors
        // Display the message "You lose! getComputerChoice beats getHumanChoice", with the first letter capitalize
        // Increment the computerScore by one
    // ELSE IF getHumanChoice equals getComputerChoice
        // Display the message "It's a draw!"
    // ELSE
        // Display the message "You win! getHumanChoice beats getComputerChoice", with the first letter capitalized
        // Increment the humanScore by one

function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase()
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }
    else if (humanChoice === computerChoice){
        console.log("It's a draw!");
    }
    else {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    return computerScore, humanScore
}

// INIT a function to play 5 rounds of the rock paper scissors
    // INIT a loop to play the game for 5 rounds
        // INIT the human selection function as a variable
        // INIT the computer selection function as a variable
        // CALL the play round function to play a round
        // Return the scores of the computer and human
        // EXIT the loop after 5 rounds
    // IF the computer score is greater than the human score
        // Display the message "You lose!"
    // ELSE
        // Display the message "You win!"
function playGame() {
    for(let i = 0; i < 5; i++ ) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        computerScore, humanScore = playRound(computerSelection, humanSelection);
        console.log("Round " + i + 1);
        console.log("Computer score: " + computerScore);
        console.log("You Score: " + humanScore);
        console.log("--------------------------------------")
    }

    if (computerScore > humanScore) {
        console.log("You lose!")
    }

    else {
        console.log("You win!")
    }
}
