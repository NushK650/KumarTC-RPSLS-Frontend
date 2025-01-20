const rulesBtn = document.getElementById("rulesBtn");
const rulesPopup = document.getElementById("rulesPopup");
const hide = document.getElementById("hide");
const playAgain = document.getElementById("playAgain");
const pickOne = document.getElementById("pickOne");
const display = document.getElementById("display");

rulesBtn.addEventListener("click", function () {
  rulesPopup.classList.remove("hidden");
});

rulesBtn.addEventListener("blur", function () {
  rulesPopup.classList.add("hidden");
});

playAgain.addEventListener("click", function () {
  playAgain.classList.add("hidden");
  hide.classList.remove("hidden");
  display.classList.add("hidden");
  pickOne.innerText = "Pick One";
});

const playerScoreSpan = document.getElementById("playerScore");
const cpuScoreSpan = document.getElementById("cpuScore");

let playerScore = 0;
let cpuScore = 0;

async function getComputerChoice() {
  try {
    const response = await fetch("https://api.example.com/get-choice"); // Replace this URL with your actual API endpoint
    const data = await response.json();
    return data.choice; // Assuming the API returns an object with a "choice" property
  } catch (error) {
    console.error("Error fetching CPU choice:", error);
    return "Rock"; // Default fallback in case of error
  }
}

function updateCpuChoiceImage(computerChoice) {
  const cpuIMG = document.getElementById("cpuIMG");

  switch (computerChoice) {
    case "Rock":
      cpuIMG.innerHTML = `
      <h3>CPU</h3>
      <img
      class="img-fluid"
      src="./Assets/vecteezy_stones-or-rocks-natural-object-pixel-art-retro-vintage_.jpg"
      alt="rock"
    /> 
    <p>${computerChoice}</p> `;
      break;
    case "Paper":
      cpuIMG.innerHTML = `
      <h3>CPU</h3>
      <img
      class="img-fluid"
      src="./Assets/vecteezy_paper-sheet-pixel_10968271.jpg"
      alt="paper"
    />
    <p>${computerChoice}</p>`;
      break;
    case "Scissors":
      cpuIMG.innerHTML = `
      <h3>CPU</h3>
      <img
      class="img-fluid"
      src="./Assets/vecteezy_pixel-art-illustration-scissors-pixelated-scissors-tools_24773302.jpg"
      alt="scissors"
    />
    <p>${computerChoice}</p>`;
      break;
    case "Lizard":
      cpuIMG.innerHTML = `
      <h3>CPU</h3>
      <img
      class="img-fluid"
      src="./Assets/pixel-art-illustration-komodo-dragon-pixelated-komodo-komodo-dragon-lizard-reptile-animal-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-free-vector.jpg"
      alt="Lizard"
    />
    <p>${computerChoice}</p>`;
      break;
    case "Spock":
      cpuIMG.innerHTML = `
      <h3>CPU</h3>
      <img class="img-fluid" src="./Assets/Spock.webp" alt="spock" />
      <p>${computerChoice}</p>`;
      break;
  }
}

function updateUserChoice(playerChoice) {
  const userIMG = document.getElementById("userIMG");

  switch (playerChoice) {
    case "Rock":
      userIMG.innerHTML = `
      <h3>YOU</h3>
      <img
      class="img-fluid"
      src="./Assets/vecteezy_stones-or-rocks-natural-object-pixel-art-retro-vintage_.jpg"
      alt="rock"
    /> 
    <p>${playerChoice}</p> `;
      break;
    case "Paper":
      userIMG.innerHTML = `
      <h3>YOU</h3>
      <img
      class="img-fluid"
      src="./Assets/vecteezy_paper-sheet-pixel_10968271.jpg"
      alt="paper"
    />
    <p>${playerChoice}</p>`;
      break;
    case "Scissors":
      userIMG.innerHTML = `
      <h3>YOU</h3>
      <img
      class="img-fluid"
      src="./Assets/vecteezy_pixel-art-illustration-scissors-pixelated-scissors-tools_24773302.jpg"
      alt="scissors"
    />
    <p>${playerChoice}</p>`;
      break;
    case "Lizard":
      userIMG.innerHTML = `
      <h3>YOU</h3>
      <img
      class="img-fluid"
      src="./Assets/pixel-art-illustration-komodo-dragon-pixelated-komodo-komodo-dragon-lizard-reptile-animal-icon-pixelated-for-the-pixel-art-game-and-icon-for-website-and-video-game-old-school-retro-free-vector.jpg"
      alt="Lizard"
    />
    <p>${playerChoice}</p>`;
      break;
    case "Spock":
      userIMG.innerHTML = `
      <h3>YOU</h3>
      <img class="img-fluid" src="./Assets/Spock.webp" alt="spock" />
      <p>${playerChoice}</p>`;
      break;
  }
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

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

function updateScore(result) {
  if (result === "You win!") {
    playerScore++;
    pickOne.innerText = "YOU WIN";
  } else if (result === "You lose!") {
    cpuScore++;
    pickOne.innerText = "YOU LOSE";
  } else {
    pickOne.innerText = "DRAW";
  }

  playerScoreSpan.textContent = playerScore;
  cpuScoreSpan.textContent = cpuScore;
}

document.getElementById("rock").addEventListener("click", function () {
  const playerChoice = "Rock";
  getComputerChoice().then((computerChoice) => {
    hide.classList.add("hidden");
    playAgain.classList.remove("hidden");
    display.classList.remove("hidden");
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    updateCpuChoiceImage(computerChoice);
    updateUserChoice(playerChoice);
  });
});

document.getElementById("paper").addEventListener("click", function () {
  const playerChoice = "Paper";
  getComputerChoice().then((computerChoice) => {
    hide.classList.add("hidden");
    playAgain.classList.remove("hidden");
    display.classList.remove("hidden");
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    updateCpuChoiceImage(computerChoice);
    updateUserChoice(playerChoice);
  });
});

document.getElementById("scissors").addEventListener("click", function () {
  const playerChoice = "Scissors";
  getComputerChoice().then((computerChoice) => {
    hide.classList.add("hidden");
    playAgain.classList.remove("hidden");
    display.classList.remove("hidden");
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    updateCpuChoiceImage(computerChoice);
    updateUserChoice(playerChoice);
  });
});

document.getElementById("Lizard").addEventListener("click", function () {
  const playerChoice = "Lizard";
  getComputerChoice().then((computerChoice) => {
    hide.classList.add("hidden");
    playAgain.classList.remove("hidden");
    display.classList.remove("hidden");
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    updateCpuChoiceImage(computerChoice);
    updateUserChoice(playerChoice);
  });
});

document.getElementById("spock").addEventListener("click", function () {
  const playerChoice = "Spock";
  getComputerChoice().then((computerChoice) => {
    hide.classList.add("hidden");
    playAgain.classList.remove("hidden");
    display.classList.remove("hidden");
    const result = determineWinner(playerChoice, computerChoice);
    updateScore(result);
    updateCpuChoiceImage(computerChoice);
    updateUserChoice(playerChoice);
  });
});
