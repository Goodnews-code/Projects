const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector('.color-options');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreDisplay = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let targetColor;
let score = 0;

// Predefined set of colors
const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5"
];

// Initialize the game
function initGame() {
  // Randomly select a target color
  targetColor = colors[Math.floor(Math.random() * colors.length)];
  colorBox.style.backgroundColor = targetColor;

  // Clear previous options
  colorOptions.innerHTML = '';

  // Create color buttons
  colors.forEach(color => {
    const button = document.createElement('button');
    button.style.backgroundColor = color;
    button.addEventListener('click', () => checkGuess(color));
    colorOptions.appendChild(button);
  });

  // Reset game status
  gameStatus.textContent = "Make your guess!";
  gameStatus.style.color = "#333";
}

// Check if the guess is correct
function checkGuess(guess) {
  if (guess === targetColor) {
    gameStatus.textContent = "Correct!";
    gameStatus.style.color = "green";
    gameStatus.classList.add('correct');
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    setTimeout(() => {
      initGame();
    }, 1000);
  } else {
    gameStatus.textContent = "Wrong! Try again.";
    gameStatus.style.color = "red";
    gameStatus.classList.add('wrong');
  }

  // Remove animation classes after they finish
  setTimeout(() => {
    gameStatus.classList.remove('correct', 'wrong');
  }, 500);
}

// Reset the game
newGameButton.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  initGame();
});

// Start the game
initGame();