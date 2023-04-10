
function getComputerChoice() {
    const compChoice = ["Rock", "Paper", "Scissors"];
    let choice = compChoice[Math.floor(Math.random() * compChoice.length)];

    return choice;
}

console.log(getComputerChoice());