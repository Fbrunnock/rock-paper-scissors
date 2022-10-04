var playerWins = 0
var compWins = 0
const btn = document.querySelector('button')
const history = document.querySelector("#history");
const matchRecord = document.createElement('div');
matchRecord.classList.add('matchRecord')
matchRecord.textContent = `Player: ${playerWins}` + `Computer: ${compWins}`;

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
    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        compWins++;
    } else {
        playerWins++;
    };
    
}

const playerSelection = btn.addEventListener("click", function(e){
    document.getElementById("result").innerHTML = playRound(e.currentTarget.id, getComputerChoice());
    const matchRecord = document.createElement('div');
    matchRecord.classList.add('matchRecord');
    matchRecord.textContent = `Player: ${playerWins}` + ` Computer: ${compWins}`;
    history.appendChild(matchRecord);
    if (playerWins === 5) {
        matchRecord.textContent = "Player wins!";
        history.appendChild(matchRecord);
        playerWins = 0;
        compWins = 0;
    }
    if (compWins === 5) {
        matchRecord.textContent = "Computer wins!";
        history.appendChild(matchRecord);
        playerWins = 0;
        compWins = 0;
    }
});