let valid = false;
while(valid === false) {
    var playerMove = prompt("Please enter rock, paper or scissors:");
    if(playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
        valid = true;
    }
}

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        console.log('Tie');
        return "0";
    }
    else if (playerMove === 'rock' && computerMove === 'paper' ||
            playerMove === 'paper' && computerMove === 'scissor' || playerMove === 'scissor' && computerMove === 'rock') {
        console.log('The computer wins');
        return "-1";
    }
    else {
        console.log('The player wins');
        return "1";
    }
}

let computerMove = ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];
let result = getWinner(playerMove, computerMove);
alert(`The player move is: ${playerMove}.
The computer move is: ${computerMove}.
Player one Score: ${result}!`);
