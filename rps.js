function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
};
const a = "rock";
const b ="paper";
const c = "scissors";
const rps = [a, b, c];
let playerWins = 0;
let computerWins = 0;
function playRound(playerSelection) {
    computerPlay();
    computerSelection = computerPlay();
    if ((playerSelection === a && computerSelection === c) ||
    (playerSelection === b && computerSelection === a) ||
    (playerSelection === c && computerSelection === b))
    { playerWins++;
      wins.textContent = "Wins : " + (playerWins);
      lastGame.textContent = "You Won!";
    }  else if
    (playerSelection === computerSelection) 
    {
      lastGame.textContent = "Draw!"; 
    } else
    {computerWins++;
    losses.textContent = "Losses : " + (computerWins);
    lastGame.textContent = "You Lost!";
    }
    if (playerWins === 5) {
      finalResults.textContent = "You reign supreme!";
      document.getElementById("rockBtn").disabled = true;
      document.getElementById("paperBtn").disabled = true;
      document.getElementById("scsrsBtn").disabled = true;
      flexbox.appendChild(playAgain);
    } else if  (computerWins === 5) {
      finalResults.textContent = "Better luck next time!"
      document.getElementById("rockBtn").disabled = true;
      document.getElementById("paperBtn").disabled = true;
      document.getElementById("scsrsBtn").disabled = true;
      flexbox.appendChild(playAgain);
      
    }
    else {

    }
};


const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    playRound(a) ;
   
    humanLast.textContent = "You chose " + a
    cpuLast.textContent = "CPU chose " + computerSelection
});
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  playRound(b);
  humanLast.textContent = "You chose " + b
    cpuLast.textContent = "CPU chose " + computerSelection
});
const scsrsBtn = document.querySelector('#scsrsBtn');
scsrsBtn.addEventListener('click', () => {
   playRound(c);
   humanLast.textContent = "You chose " + c
    cpuLast.textContent = "CPU chose " + computerSelection
});

const winCount = document.querySelector('#winCount');
const wins = document.createElement('li');
wins.classList.add("wins");
wins.textContent = "Wins : " + (playerWins);
winCount.appendChild(wins);
const losses = document.createElement('li');
losses.classList.add("losses");
losses.textContent = "Losses : " + (computerWins);
winCount.appendChild(losses);
const flexbox = document.querySelector('#flexbox');
const lastGame = document.createElement('div');
lastGame.classList.add("lastGame");
lastGame.textContent = "";
flexbox.appendChild(lastGame);
const finalResults = document.createElement('div');
finalResults.classList.add("finalResults");
finalResults.textContent = "";
flexbox.appendChild(finalResults);
const buttons = document.querySelector('#buttons');
const playAgain = document.createElement('button');
playAgain.classList.add("playAgain");
playAgain.textContent = "Play again!"
playAgain.addEventListener('click', () => {
  playerWins = 0;
  computerWins = 0;
  wins.textContent = "Wins : " + (playerWins);
  losses.textContent = "Losses : " + (computerWins);
  lastGame.textContent = "";
  finalResults.textContent = "";
  document.getElementById("rockBtn").disabled = false;
      document.getElementById("paperBtn").disabled = false;
      document.getElementById("scsrsBtn").disabled = false;
      humanLast.textContent = ""
    cpuLast.textContent = "" 
});

const playerChoice = document.querySelector('#playerChoice');

let cpuChoice = undefined
const humanLast = document.createElement('li');
const cpuLast = document.createElement('li');
playerChoice.appendChild(humanLast);
playerChoice.appendChild(cpuLast);


