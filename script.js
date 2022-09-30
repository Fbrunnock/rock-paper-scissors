function getComputerChoice () {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else if (randomNumber === 2) {
        return "scissors";
    };
};

function playRound (playerSelection, computerSelection) {
    var playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return "Draw";
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return "You lose!";
    } else {
        return "You win!";
    };
}

function game () {
    var result = playRound(prompt("Input your choice"), getComputerChoice());
    console.log(result);
}