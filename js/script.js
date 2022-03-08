function computerPlay() {
  let min = 1;

  let max = 3;

  let computerChoice = null;

  let computedNumber = parseInt(Math.random() * (max - min) + min);

  if (computedNumber === 1 || computedNumber === 2 || computedNumber === 3) {
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
    return 'Player loses, nice try human. Rock loses to Paper.';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'Player wins, nicely done human. Rock beats Scissors.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'Player wins. Paper beats Rock.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
    return "It's a draw, paper does not win over paper.";
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'Player loses, nice try human. Paper loses to Scissors.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'Player loses, nice try human. Scissors loses to Rock.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
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

function game() {
  for (let i = 0; i < 5; i++) {
    let computerChoice = computerPlay();
    let playerChoice = prompt('Choose between Rock, Paper or Scissors.');

    console.log(singleRound(playerChoice, computerChoice));
  }
}

game();
