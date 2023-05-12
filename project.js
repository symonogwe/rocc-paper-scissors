
// computer choice
function getComputerChoice() {
  const compChoice = ["Rock", "Paper", "Scissors"];
  let choice = compChoice[Math.floor(Math.random() * compChoice.length)];
  return choice;
}

//result for a single round played
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


// game function
function game() {
  let playerScore = 0;
  let computerScore = 0;
  // Add onclick function to each button
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      let playerSelection = button.textContent;
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      //Change choice text to result of round
      const choice = document.querySelector(".choice");
      choice.textContent = result;
      // increment computer score if computer wins
      if (result === "You Loose! Paper beats Rock" || result === "You Loose! Rock beats scissors" || result === "You Loose! Scissors beats paper") {
        computerScore++;
        const computer = document.querySelector(".computer-score");
        computer.textContent = computerScore;
      }
      // increment player score if player wins
      if (result === "You Win! Paper beats Rock" || result === "You Win! rock beats Scissors" || result === "You Win! Scissors beats paper") {
        playerScore++;
        const player = document.querySelector(".player-score");
        player.textContent = playerScore;
      }
      // code for when player reaches 5 points
      if (playerScore === 5) {
        let hidden = document.querySelectorAll("button");
        hidden.forEach(button => {
          button.style.visibility = "hidden";
        });
        document.querySelector(".choice").style.visibility = "hidden";
        document.querySelector(".player-score").style.visibility = "hidden";
        document.querySelector(".computer-score").style.visibility = "hidden";
        let container = document.querySelector(".container");
        const playerWinner = document.createElement("div");
        playerWinner.textContent = "Player wins the Game!";
        container.appendChild(playerWinner);
        let replay = document.createElement("button");
        replay.textContent = "Play again";
        replay.addEventListener("click", () => {
          window.location.reload();
        });
        container.appendChild(replay);

      }
      // code for when computer reaches 5 points
      else if (computerScore === 5) {
        let hidden = document.querySelectorAll("button");
        hidden.forEach(button => {
          button.style.visibility = "hidden";
        });
        document.querySelector(".choice").style.visibility = "hidden";
        document.querySelector(".player-score").style.visibility = "hidden";
        document.querySelector(".computer-score").style.visibility = "hidden";
        let container = document.querySelector(".container");
        const computerWinner = document.createElement("div");
        computerWinner.textContent = "Computer wins the Game!";
        container.appendChild(computerWinner);
        let replay = document.createElement("button");
        replay.textContent = "Play Again";
        replay.addEventListener("click", () => {
          window.location.reload();
        });
        container.appendChild(replay);
      }
    });
  });
}

game ();


