// Produce an option of rock, paper or scissors
    // COMPUTE a random number between 0 and 2, inclusive
    // INIT a list of computer options
    // GET an option from a list with the random number
    // OUTPUT the computer's choice

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    let options = ['rock', 'paper', 'scissors'];

    let choice = options[randomNumber];

    return choice;
}

// Ask the user for their choice
// INIT a function to get the users choice
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

function getHumanChoice(inputChoice) {
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
        console.log("Incorrect input");
        return;
    }
    
    return humanChoice
}

// INIT a variable to store the user score and set it to zero
// INIT a variable to store the computer score and set it to zero
let humanScore = 0;
let computerScore = 0;
let round = 0;

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

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    computerChoice = computerChoice.toLowerCase()
    humanChoice = humanChoice.toLowerCase()
    // One conditional block can handle all of the logic, whether it's all winning or all losing combinations
    if (humanChoice === 'rock' && computerChoice === 'paper' ||
        humanChoice === 'scissors' && computerChoice === 'rock' ||
        humanChoice === 'paper' && computerChoice === 'scissors') {
        resultsp.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }
    else if (humanChoice === computerChoice){
        resultsp.textContent = "It's a draw!";
    }
    else {
        resultsp.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    }
    round++;
    return computerScore, humanScore, round
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
function playGame(humanChoice) {

    computerScore, humanScore, round = playRound(humanChoice);

    roundsp.textContent = "Round " + round;
    computerscoresp.textContent = "Computer score: " + computerScore;
    humanscorep.textContent = "Your Score: " + humanScore;

    if (computerScore == 5 || humanScore == 5) {
        if (computerScore > humanScore) {
            resultsp.textContent = "You lose!";
        }

        else {
            resultsp.textContent = "You win!";
        }
        humanScore = 0;
        computerScore = 0;
        round = 0;
    }
}

// SELECT the buttons
// Monitor the buttons for a clicks
// Assign the human choice based on the button pushed
// Play one round with the human choice
const rockBtn = document.querySelector("#rock-button");
const paperBtn = document.querySelector("#paper-button");
const scissorsBtn = document.querySelector("#scissors-button");
const resultsp = document.querySelector(".choices");
const computerscoresp = document.querySelector(".computer-score");
const roundsp = document.querySelector(".round");
const humanscorep = document.querySelector(".human-score")

rockBtn.addEventListener("click", () => {
    const humanChoice = 'rock';
    playGame(humanChoice);
});

paperBtn.addEventListener("click", () => {
    const humanChoice = 'paper';
    playGame(humanChoice);
});

scissorsBtn.addEventListener("click", () => {
    const humanChoice = 'scissors';
    playGame(humanChoice);
});
