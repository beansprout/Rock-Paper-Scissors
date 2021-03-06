const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const choice = document.getElementById('choice');
const revealChoice = document.getElementById('revealchoice');
const revealComputerChoice = document.getElementById('revealcomputerchoice');
const computerChoice = document.getElementById('computerchoice');
const winner = document.getElementById('winner');
const finalWinner = document.getElementById('finalwinner');
const startover = document.getElementById('startover');
const againId = document.getElementById('again');
const playerScoreText = document.getElementById('playerscore');
const computerScoreText = document.getElementById('computerscore');
const roundNum = document.getElementById('roundnum');
const roundId = document.getElementById('round');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;

const showChoices = (playerSelection, computerSelection) => {
  checkRound();
  if (checkRound() === 4) {
    roundId.style.display = 'none';
    finalWinner.style.color = 'red';
    finalWinner.style.fontSize = '30px';
    finalWinner.style.display = 'none';
      if (playerScore === computerScore) {
        finalWinner.innerHTML = 'Tie Game - Everyone Wins!!';
      }
      if (playerScore > computerScore) {
        finalWinner.innerHTML = 'You win best out of 5. Computer is sad.';
      }
      if (playerScore < computerScore) {
        finalWinner.innerHTML = 'Computer wins best out of 5!!! Computer Rejoices!';
      }
      setTimeout(() => {
        finalWinner.style.display = 'block';
        startOver();
      }, 3000);
    }
  revealChoice.style.display = 'block';
  choice.innerHTML = ` ${playerSelection}.`;
  setTimeout(() => {
    revealComputerChoice.style.display = 'block';
  }, 1000);
  setTimeout(() => {
    computerChoice.innerHTML=`${computerSelection}`
  }, 1000);
  setTimeout(() => {
    playRound(playerSelection, computerSelection)
  }, 2000);
}

const computerChooses = () => {
  computerSelection = computerPlay();
  return computerSelection;
}

const choose = (id) => {
  computerChooses()
  hidePlayerChoices();
  playerSelection = id;
  showChoices(playerSelection, computerSelection);
}

const hidePlayerChoices = () => {
  rock.style.display = 'none';
  paper.style.display = 'none';
  scissors.style.display = 'none';
}

const showPlayerChoices = () => {
  rock.style.display = 'inline-block';
  paper.style.display = 'inline-block';
  scissors.style.display = 'inline-block';
}

const computerPlay = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  return randomChoice < 1 ? 'rock' : randomChoice < 2 ? 'paper' : 'scissors';
}

playerScores = (x) => {
  // increase score by 1
  playerScore = playerScore + 1;
  //show score
  playerScoreText.innerHTML = `${playerScore}`;
}

computerScores = (x) => {
  // increase score by 1
  computerScore = computerScore + 1;
   //show score
  computerScoreText.innerHTML = `${computerScore}`;
}

const checkRound = () => {
  if (round !== 4) {
    setTimeout(() => {
      again();
    }, 2500);
  }
  return round;
}

const playRound = (playerSelection, computerSelection) => {
  winner.style.display = 'block';
  roundId.style.display = 'block';
    round = round + 1;
  roundNum.innerHTML = `${round}`;
  if (playerSelection === 'rock') {
    if (computerSelection  === 'rock') {
      return winner.innerHTML='Tie';
    }
    if (computerSelection === 'scissors') {
      playerScores(1);
      return winner.innerHTML='Rock breaks scissors! Player gets the point.'
    }
    if (computerSelection === 'paper') {
      computerScores(1);
      return winner.innerHTML='Paper covers rock.  Computer gets the point.'
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection  === 'rock') {
      playerScores(1);
      return winner.innerHTML='Paper covers rock!  Player gets the point';
    }
    if (computerSelection === 'scissors') {
      computerScores(1);
      return winner.innerHTML='Scissors cuts paper.  Computer gets the point.'
    }
    if (computerSelection === 'paper') {
      return winner.innerHTML='Tie'
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection  === 'rock') {
      computerScores(1);
      return winner.innerHTML='Rock breaks scissors.  Computer gets the point.';
    }
    if (computerSelection === 'scissors') {
      return winner.innerHTML='Tie'
    }
    if (computerSelection === 'paper') {
      playerScores(1);
      return winner.innerHTML='Scissors cuts paper!  Player gets the point.'
    }
  }
}

const again = () => {
  againId.style.display='block';
}

const againClicked = () => {
  startover.style.display='none';
  revealChoice.style.display = 'none';
  revealComputerChoice.style.display = 'none';
  winner.style.display = 'none';
  againId.style.display='none';
  showPlayerChoices();
}

// when 5 rounds have been played
const startOver = () => {
  startover.style.display='block';
}

const startOverClicked = () => {
  startover.style.display='none';
  revealChoice.style.display = 'none';
  revealComputerChoice.style.display = 'none';
  winner.style.display = 'none';
  roundId.style.display = 'none';
  againId.style.display='none';
  finalWinner.style.display='none';
  round = 0;
  playerScore = 0;
  computerScore = 0;
  playerScoreText.innerHTML = `${playerScore}`;
  computerScoreText.innerHTML = `${computerScore}`;
  showPlayerChoices();
}




