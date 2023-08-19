let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerChoice) {
  const computerChoice = computerPlay();

  // Compare choices and update scores accordingly
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }

  // Update player and computer scores in the HTML
  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  // Update round result in the HTML
  const roundResultDisplay = document.getElementById("round-result");
  roundResultDisplay.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;

  // Check for the overall winner and display the final result
  if (playerScore === 5 || computerScore === 5) {
    const finalResultDisplay = document.getElementById("final-result");
    const finalResult =
      playerScore === 5 ? "You win the game!" : "Computer wins the game!";
    finalResultDisplay.textContent = finalResult;

    // Disable the game buttons after the game ends
    const gameButtons = document.querySelectorAll(".choices button");
    gameButtons.forEach((button) =>
      button.removeEventListener("click", gameHandler)
    );
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;

  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  const roundResultDisplay = document.getElementById("round-result");
  const finalResultDisplay = document.getElementById("final-result");

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  roundResultDisplay.textContent = "Choose your move!";
  finalResultDisplay.textContent = "";

  // Enable the game buttons
  const gameButtons = document.querySelectorAll(".choices button");
  gameButtons.forEach((button) =>
    button.addEventListener("click", gameHandler)
  );
}

function gameHandler(event) {
  const playerChoice = event.target.id;
  playRound(playerChoice);
}

// Add event listeners to the game buttons
const gameButtons = document.querySelectorAll(".choices button");
gameButtons.forEach((button) => button.addEventListener("click", gameHandler));

// Add event listener to the reset button
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);
