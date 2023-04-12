

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

function userInput() {
  let input = false;
  while (input == false) {
    const choice = prompt("Rock Paper Scissors");
    if(choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (choiceInLower == "scissors" || choiceInLower == "rock" || choiceInLower == "paper") {
      input = true;
      return choiceInLower;
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = userInput();
    let computerSelection = getComputerChoice();
    let result = (playRound(playerSelection, computerSelection));
    console.log(result);
    console.log("---------------------------------------");
    if (result === "You Win! Paper beats Rock" || result === "You Win! rock beats Scissors" || result === "You Win! Scissors beats paper")
      playerScore++;
    if (result === "You Loose! Paper beats Rock" || result === "You Loose! Rock beats scissors" || result === "You Loose! Scissors beats paper")
      computerScore++;
  }
  console.log("GAME OVER");
  console.log("------------------------------------------");
  if (playerScore > computerScore) return "Player Wins";
  else if (playerScore < computerScore) return "Computer Wins";
  else return "That's a Tie";
}


console.log(game());



