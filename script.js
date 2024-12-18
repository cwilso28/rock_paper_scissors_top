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

//