const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const displayResult = document.querySelector('.result');
const finalScore = document.querySelector('.finalScore');

let scorePlayer = 0;
let scoreComputer = 0;

function computerPlay() {
  let min = 1;
  let max = 3;
  let computerChoice = null;

  let computedNumber = Math.floor(Math.random() * (max - min + min));

  if (computedNumber === 0 || computedNumber === 1 || computedNumber === 2) {
    switch (computedNumber) {
      case 0:
        computerChoice = 'Rock';
        return computerChoice;
        break;
      case 1:
        computerChoice = 'Paper';
        return computerChoice;
        break;
      case 2:
        computerChoice = 'Scissors';
        return computerChoice;
        break;
      default:
        computerChoice = 'Error: computedNumber diferent from 0, 1 and 2';
        return computerChoice;
    }
  }
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Rock') {
    return "It's a draw, rock does not win over rock.";
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    scoreComputer++;
    return 'Player loses, nice try human. Rock loses to Paper.';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    scorePlayer++;
    return 'Player wins, nicely done human. Rock beats Scissors.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    scorePlayer++;
    return 'Player wins. Paper beats Rock.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    return "It's a draw, paper does not win over paper.";
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    scoreComputer++;
    return 'Player loses, nice try human. Paper loses to Scissors.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    scoreComputer++;
    return 'Player loses, nice try human. Scissors loses to Rock.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    scorePlayer++;
    return 'Player wins. Scissors win over paper.';
  } else if (
    playerSelection === 'Scissors' &&
    computerSelection === 'Scissors'
  ) {
    return "It's a draw, scissors does not win over scissors.";
  } else {
    return 'Computer probably chosed another choice than Rock, Paper and Scissors.';
  }
}

function checkScore() {
  if (scorePlayer === 5) {
    finalScore.textContent = 'Player wins!!!';
    scorePlayer = 0;
    scoreComputer = 0;
  } else if (scoreComputer === 5) {
    finalScore.textContent = 'Computer wins!!!';
    scorePlayer = 0;
    scoreComputer = 0;
  } else {
    finalScore.textContent = '';
  }
}

btnRock.addEventListener('click', function playerChoseRock() {
  displayResult.textContent = singleRound('Rock', computerPlay());
  checkScore();
});

btnPaper.addEventListener('click', function playerChosePaper() {
  displayResult.textContent = singleRound('Paper', computerPlay());
  checkScore();
});

btnScissors.addEventListener('click', function playerChoseScissors() {
  displayResult.textContent = singleRound('Scissors', computerPlay());
  checkScore();
});
