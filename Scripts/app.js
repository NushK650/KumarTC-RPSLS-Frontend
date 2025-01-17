const rulesBtn = document.getElementById('rulesBtn');
const rulesPopup = document.getElementById('rulesPopup');
const hide = document.getElementById('hide')

rulesBtn.addEventListener('click', function(){
  rulesPopup.classList.remove('hidden');
});

rulesBtn.addEventListener('blur',function(){
  rulesPopup.classList.add('hidden');
});
// Select HTML elements
const playerScoreSpan = document.getElementById('playerScore');
const cpuScoreSpan = document.getElementById('cpuScore');
const resultMessage = document.getElementById('resultMessage');

// Variables to store scores
let playerScore = 0;
let cpuScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check win conditions using if statements
  if (playerChoice === "Rock") {
    if (computerChoice === "Scissors" || computerChoice === "Lizard") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (playerChoice === "Paper") {
    if (computerChoice === "Rock" || computerChoice === "Spock") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (playerChoice === "Scissors") {
    if (computerChoice === "Paper" || computerChoice === "Lizard") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (playerChoice === "Lizard") {
    if (computerChoice === "Paper" || computerChoice === "Spock") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }

  if (playerChoice === "Spock") {
    if (computerChoice === "Scissors" || computerChoice === "Rock") {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
}

// Function to update the score on the webpage
function updateScore(result) {
  if (result === "You win!") {
    playerScore++;
  } else if (result === "You lose!") {
    cpuScore++;
  }

  playerScoreSpan.textContent = playerScore;
  cpuScoreSpan.textContent = cpuScore;
}




// Event listener for each option (using IDs for each button)
document.getElementById('rock').addEventListener('click', () => {
  const playerChoice = "Rock";
  const computerChoice = getComputerChoice();
  hide.classList.remove('hidden');
  const result = determineWinner(playerChoice, computerChoice);
  updateScore(result);
 
});

document.getElementById('paper').addEventListener('click', () => {
  const playerChoice = "Paper";
  const computerChoice = getComputerChoice();
  hide.classList.add('hidden');
  const result = determineWinner(playerChoice, computerChoice);
  updateScore(result);
  
});

document.getElementById('scissors').addEventListener('click', () => {
  const playerChoice = "Scissors";
  const computerChoice = getComputerChoice();
  hide.classList.add('hidden');
  const result = determineWinner(playerChoice, computerChoice);
  updateScore(result);
  
});

document.getElementById('lizard').addEventListener('click', () => {
  const playerChoice = "Lizard";
  const computerChoice = getComputerChoice();
  hide.classList.add('hidden');
  const result = determineWinner(playerChoice, computerChoice);
  updateScore(result);
 
});

document.getElementById('spock').addEventListener('click', () => {
  const playerChoice = "Spock";
  const computerChoice = getComputerChoice();
  hide.classList.add('hidden');
  const result = determineWinner(playerChoice, computerChoice);
  updateScore(result);
 
});
