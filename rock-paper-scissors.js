const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const choice = document.getElementById('choice');
const revealChoice = document.getElementById('revealchoice');
const revealComputerChoice = document.getElementById('revealcomputerchoice');
const computerChoice = document.getElementById('computerchoice');
const winner = document.getElementById('winner');
const startover = document.getElementById('startover');
const playerScoreText = document.getElementById('playerscore');
const computerScoreText = document.getElementById('computerscore');
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;

const computerPlay = () => {
  const randomChoice = Math.floor(Math.random() * 3);
  return randomChoice < 1 ? 'rock' : randomChoice < 2 ? 'paper' : 'scissors';
}

const choose = (id) => {
  computerChooses()
  playerSelection = id;
  showChoices(playerSelection, computerSelection);
}

const computerChooses = () => {
  computerSelection = computerPlay();
  return computerSelection;
}

const showChoices = (playerSelection, computerSelection) => {
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
  setTimeout(() => {
    startOver();
  }, 2500);

}

const playRound = (playerSelection, computerSelection) => {
  winner.style.display = 'block';
  if (playerSelection === 'rock') {
    if (computerSelection  === 'rock') {
      return winner.innerHTML='Tie';
    }
    if (computerSelection === 'scissors') {
      return winner.innerHTML='Rock breaks scissors! You LOSE computer!'
    }
    if (computerSelection === 'paper') {
      return winner.innerHTML='Paper covers rock.  Waaaahhhhh!!! Computer Wins'
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection  === 'rock') {
      return winner.innerHTML='Paper covers rock!  You LOSE computer!';
    }
    if (computerSelection === 'scissors') {
      return winner.innerHTML='Scissors cuts paper.  Waaaahhhhh!!! Computer Wins'
    }
    if (computerSelection === 'paper') {
      return winner.innerHTML='Tie'
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection  === 'rock') {
      return winner.innerHTML='Rock breaks scissors.  Waaaahhhhh!!! Computer Wins';
    }
    if (computerSelection === 'scissors') {
      return winner.innerHTML='Tie'
    }
    if (computerSelection === 'paper') {
      return winner.innerHTML='Scissors cuts paper!  You LOSE computer!'
    }
  }
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
}




