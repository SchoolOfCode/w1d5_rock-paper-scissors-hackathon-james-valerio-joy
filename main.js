function getWinner(playerMove, computerMove) {

    if (playerMove === computerMove) {
        console.log('Tie')
        return "0";
    }
    else if (playerMove === 'rock' && computerMove === 'paper' ||
            playerMove === 'paper' && computerMove === 'scissor' || playerMove === 'scissor' && computerMove === 'rock') {
        console.log('The computer wins');
        return "-1";
    }
    else {
        console.log('The player wins')
        return "1";
    }
  }
  
  let result = getWinner("paper", "paper");
 
