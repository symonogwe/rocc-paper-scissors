

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
  return "That's a Tie!";
}





function game() {
  let playerScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll(".button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      let playerSelection = button.textContent;
      let computerSelection = getComputerChoice();
      let result = (playRound(playerSelection, computerSelection));
      let resultDiv = document.querySelector(".result");
      resultDiv.textContent = result;
    });
  })
  
  // if (result === "You Win! Paper beats Rock" || result === "You Win! rock beats Scissors" || result === "You Win! Scissors beats paper")
  //   playerScore++;
  // if (result === "You Loose! Paper beats Rock" || result === "You Loose! Rock beats scissors" || result === "You Loose! Scissors beats paper")
  //   computerScore++;


  
  // console.log("GAME OVER");
  // console.log("------------------------------------------");
  // if (playerScore > computerScore) return "Player Wins";
  // else if (playerScore < computerScore) return "Computer Wins";
  // return "That's a Tie";
}
game();





