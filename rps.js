function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
};
let a = "rock";
let b ="paper";
let c = "scissors";
let rps = [a, b, c];
function playRound() {
    computerPlay();
    computerSelection = computerPlay();
    if ((playerSelection.toLowerCase() === a && computerSelection === c) ||
    (playerSelection.toLowerCase() === b && computerSelection === a) ||
    (playerSelection.toLowerCase() === c && computerSelection === b))
    {alert("You win!"); }  else if
    (playerSelection.toLowerCase() === computerSelection) 
    { alert("Draw!"); } else
     alert("You lose!");
};
function game() {
    let playerWins = 0;
    {
       playRound(); if ((playerSelection.toLowerCase() === a && computerSelection === c) ||
       (playerSelection.toLowerCase() === b && computerSelection === a) ||
       (playerSelection.toLowerCase() === c && computerSelection === b)) {
           playerWins++
       }
    };
  if (playerWins >= 3) {
         alert("You reign supreme!")} else
        { alert("Better luck next time!")
    }
}

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    playerSelection = a;
  playRound()
});
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
    playerSelection = b;
  playRound()
});
const scsrsBtn = document.querySelector('#scsrsBtn');
scsrsBtn.addEventListener('click', () => {
    playerSelection = c;
  playRound()
});