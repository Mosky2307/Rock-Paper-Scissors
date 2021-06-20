function computerPlay() {
    return rps[Math.floor(Math.random() * rps.length)];
}
let a = "rock"
let b ="paper"
let c = "scissors"
let rps = [a, b, c]
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === a && computerSelection === c) ||
    ((playerSelection === b && computerSelection) === a) ||
    (playerSelection === c && computerSelection === b))
    return alert("You win!") 
};
const playerSelection = c;
const computerSelection = computerPlay();