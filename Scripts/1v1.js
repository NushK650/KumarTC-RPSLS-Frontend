// DOM Elements
const rulesBtn = document.getElementById("rulesBtn");
const rulesPopup = document.getElementById("rulesPopup");
const playerScoreSpan = document.getElementById("playerScore");
const player2ScoreSpan = document.getElementById("player2Score");
const pickOne = document.getElementById("pickOne");
const display = document.getElementById("display");
const hide = document.getElementById("hide");
const hide2 = document.getElementById("hide2");
const playAgain = document.getElementById("playAgain");
const userIMG = document.getElementById("userIMG");
const user2IMG = document.getElementById("user2IMG");

// Variables to track choices
let player1Choice = "";
let player2Choice = "";

// Scores
let playerScore = 0;
let player2Score = 0;

// Toggle rules popup
rulesBtn.addEventListener("click", function () {
  rulesPopup.classList.toggle("hidden");
});
rulesBtn.addEventListener("blur", function () {
  rulesPopup.classList.add("hidden");
});

// Update player choice visuals
function updateChoiceVisual(player, choice) {
  const choices = {
    Rock: '<img class="img-fluid" src="./Assets/vecteezy_stones-or-rocks-natural-object-pixel-art-retro-vintage_.jpg" alt="rock" />',
    Paper: '<img class="img-fluid" src="./Assets/vecteezy_paper-sheet-pixel_10968271.jpg" alt="paper" />',
    Scissors: '<img class="img-fluid" src="./Assets/vecteezy_pixel-art-illustration-scissors-pixelated-scissors-tools_24773302.jpg" alt="scissors" />',
    Lizard: '<img class="img-fluid" src="./Assets/pixel-art-illustration-komodo-dragon-pixelated-komodo-komodo-dragon-lizard-reptile-animal-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-free-vector.jpg" alt="lizard" />',
    Spock: '<img class="img-fluid" src="./Assets/Spock.webp" alt="spock" />'
  };

  const choiceHTML = '<h3>' + (player === 1 ? "Player 1" : "Player 2") + '</h3>' + choices[choice] + '<p>' + choice + '</p>';
  if (player === 1) {
    userIMG.innerHTML = choiceHTML;
  } else {
    user2IMG.innerHTML = choiceHTML;
  }
}

// Determine winner
function determineWinner(choice1, choice2) {
  if (choice1 === choice2) {
    return "Draw";
  }

  if (choice1 === "Rock") {
    if (choice2 === "Scissors" || choice2 === "Lizard") {
      return "Player 1";
    }
  }
  if (choice1 === "Paper") {
    if (choice2 === "Rock" || choice2 === "Spock") {
      return "Player 1";
    }
  }
  if (choice1 === "Scissors") {
    if (choice2 === "Paper" || choice2 === "Lizard") {
      return "Player 1";
    }
  }
  if (choice1 === "Lizard") {
    if (choice2 === "Paper" || choice2 === "Spock") {
      return "Player 1";
    }
  }
  if (choice1 === "Spock") {
    if (choice2 === "Scissors" || choice2 === "Rock") {
      return "Player 1";
    }
  }

  return "Player 2";
}

// Update the score
function updateScore(winner) {
  if (winner === "Player 1") {
    playerScore++;
    playerScoreSpan.innerText = playerScore;
    pickOne.innerText = "Player 1 Wins!";
  } else if (winner === "Player 2") {
    player2Score++;
    player2ScoreSpan.innerText = player2Score;
    pickOne.innerText = "Player 2 Wins!";
  } else {
    pickOne.innerText = "It's a Draw!";
  }
}

// Reset the game
function resetGame() {
  pickOne.innerText = "Player 1";
  hide.classList.remove("hidden");
  hide2.classList.add("hidden");
  playAgain.classList.add("hidden");
  display.classList.add("hidden");
  userIMG.innerHTML = "";
  user2IMG.innerHTML = "";
  player1Choice = "";
  player2Choice = "";
}

// Player 1's choice
function handlePlayer1Choice(choice) {
  player1Choice = choice;
  hide.classList.add("hidden");
  hide2.classList.remove("hidden");
  updateChoiceVisual(1, choice);
  pickOne.innerText = "Player 2";
}

// Player 2's choice
function handlePlayer2Choice(choice) {
  player2Choice = choice;
  updateChoiceVisual(2, choice);
  display.classList.remove("hidden");
  hide2.classList.add("hidden");
  playAgain.classList.remove("hidden");

  const winner = determineWinner(player1Choice, player2Choice);
  updateScore(winner);
}

// Event listeners for Player 1
document.getElementById("rock").addEventListener("click", function () {
  handlePlayer1Choice("Rock");
});
document.getElementById("paper").addEventListener("click", function () {
  handlePlayer1Choice("Paper");
});
document.getElementById("scissors").addEventListener("click", function () {
  handlePlayer1Choice("Scissors");
});
document.getElementById("Lizard").addEventListener("click", function () {
  handlePlayer1Choice("Lizard");
});
document.getElementById("spock").addEventListener("click", function () {
  handlePlayer1Choice("Spock");
});

// Event listeners for Player 2
document.getElementById("rock2").addEventListener("click", function () {
  handlePlayer2Choice("Rock");
});
document.getElementById("paper2").addEventListener("click", function () {
  handlePlayer2Choice("Paper");
});
document.getElementById("scissors2").addEventListener("click", function () {
  handlePlayer2Choice("Scissors");
});
document.getElementById("Lizard2").addEventListener("click", function () {
  handlePlayer2Choice("Lizard");
});
document.getElementById("spock2").addEventListener("click", function () {
  handlePlayer2Choice("Spock");
});

// Play again button
playAgain.addEventListener("click", resetGame);
 