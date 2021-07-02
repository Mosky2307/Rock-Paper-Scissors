function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
};
let a = "rock";
let b ="paper";
let c = "scissors";
let rps = [a, b, c];
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
};


const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    playRound(a) 
});
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  playRound(b)
});
const scsrsBtn = document.querySelector('#scsrsBtn');
scsrsBtn.addEventListener('click', () => {
   playRound(c)
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
flexbox.appendChild(lastGame)

