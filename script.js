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
    var player = 0
    var computer = 0
    for (i = 0; i < 5; i++){
        var result = playRound(prompt("Input your choice"), getComputerChoice());
        if (result === "You win!") {
            player += 1;
            console.log("Player: " + player + " Computer: " + computer);
        } else if (result === "You lose!") {
            computer += 1;
            console.log("Player: " + player + " Computer: " + computer);
        } else if (result === "Draw") {
        }
    }
    if (player > computer) {
        return "You win the game!"
    } else if (computer > player) {
        return "You lose the game!"
    } else if (computer = player) {
        return "You drew!"
    }
}