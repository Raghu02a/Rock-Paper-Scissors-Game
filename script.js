let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getEmoji(choice) {
  switch(choice) {
    case 'rock': return '👊';
    case 'paper': return '✋';
    case 'scissors': return '✌️';
    default: return '';
  }
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'draw';
  }
  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  playerChoiceDisplay.innerHTML = getEmoji(playerChoice);
  computerChoiceDisplay.innerHTML = getEmoji(computerChoice);
  playerChoiceDisplay.style.opacity = '1';
  computerChoiceDisplay.style.opacity = '1';

  switch (winner) {
    case 'player':
      playerScore++;
      resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
      resultElement.className = 'result win';
      break;
    case 'computer':
      computerScore++;
      resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
      resultElement.className = 'result lose';
      break;
    case 'draw':
      resultElement.textContent = `It's a draw! Both chose ${playerChoice}`;
      resultElement.className = 'result draw';
      break;
  }
  updateScore();
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScore();
  resultElement.textContent = 'Choose your weapon!';
  resultElement.className = 'result';
  playerChoiceDisplay.style.opacity = '0';
  computerChoiceDisplay.style.opacity = '0';
}

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
document.getElementById('reset').addEventListener('click', resetGame);

resetGame();
