
function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    let choice = compChoice[Math.floor(Math.random() * compChoice.length)];

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock") && (computerSelection === "Paper"))
      return "You Loose! Paper beats Rock";   
    if ((playerSelection === "paper") && (computerSelection === "Rock"))
      return "You Win! Paper beats Rock";
    if ((playerSelection === "rock") && (computerSelection === "Scissors"))
      return "You Win! rock beats Scissors";
    if ((playerSelection === "scissors") && (computerSelection === "Rock"))
      return "You Loose! Rock beats scissors";
    if ((playerSelection === "scissors") && (computerSelection === "Paper"))
      return "You Win! Scissors beats paper";
    if ((playerSelection === "paper") && (computerSelection === "Scissors"))
      return "You Loose! Scissors beats paper";
    
}




