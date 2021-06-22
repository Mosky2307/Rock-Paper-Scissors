function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
};
let a = "rock";
let b ="paper";
let c = "scissors";
let rps = [a, b, c];
function playRound() {
    computerPlay()
    playerSelection = c
    computerSelection = computerPlay()
    if ((playerSelection === a && computerSelection === c) ||
    (playerSelection === b && computerSelection === a) ||
    (playerSelection === c && computerSelection === b))
    {return alert("You win!")}  else if
    (playerSelection === computerSelection) 
    {return alert("Draw!")} else
    return alert("You lose!")
};
function game() {
    playRound()
    playRound()
    playRound()
    playRound()
    playRound()
};
