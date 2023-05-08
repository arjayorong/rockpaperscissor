const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("#choices button");
const resultDiv = document.querySelector("#result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result, playerSelection, computerSelection);
  });
});

function computerPlay() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function displayResult(result, playerSelection, computerSelection) {
  resultDiv.textContent = `${result} You chose ${playerSelection}. Your Opponent chooses ${computerSelection}.`;
}
