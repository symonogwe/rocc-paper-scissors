
function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    let choice = compChoice[Math.floor(Math.random() * compChoice.length)];

    return choice;
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper")
      return "You Loose! Paper beats Rock";   
}

console.log(getComputerChoice());