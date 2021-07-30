let playerMove = "rock";
let computerMove = "scissor";

if (playerMove === computerMove) {
    console.log('Tie');
}
else if (playerMove === 'rock' && computerMove === 'paper' ||
        playerMove === 'paper' && computerMove === 'scissor' || playerMove === 'scissor' && computerMove === 'rock') {
    console.log('The computer wins');
}
else {
    console.log('The player wins')
}
