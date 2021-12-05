function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        console.log('Tie');
        ties += 1;
        return "0";
    }
    else if (playerMove === 'rock' && computerMove === 'paper' ||
            playerMove === 'paper' && computerMove === 'scissors' || playerMove === 'scissors' && computerMove === 'rock') {
        console.log('The computer wins');
        losses += 1;
        return "-1";
    }
    else {
        console.log('The player wins');
        wins += 1;
        return "1";
    }
}

let isConfirmed = true;
let exit = false;
let result = 0;
let wins = 0;
let losses = 0;
let ties = 0;



while (isConfirmed === true) {
    let valid = false;
    while(valid === false) {
        var playerMove = prompt("Please enter rock, paper or scissors:");
        if(playerMove === "rock" || playerMove === "paper" || playerMove === "scissors") {
            valid = true;
        }
        else if (playerMove === null){
            exit = true;
            valid = true;
        }
    }
        if (exit === true){
        break;}

    let computerMove = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    result = Number(getWinner(playerMove, computerMove))+result;
    isConfirmed = confirm((`The player move is: ${playerMove}.
The computer move is: ${computerMove}.
Player one Total Score: ${result}!
Total wins: ${wins}
Total losses: ${losses}
Total ties: ${ties}

Do you want to continue playing?`)
    );
}

let rock = document.querySelector('#rock');
console.log(rock);
let idsPlayer = ['#therock','#clippy','#scissorhands'];
let idsCpu = ['#theRockCpu', '#clippyCpu', '#scissorHandsCpu'];
function clickHandler(event) {
    for (const i in idsCpu) {
        document.querySelector(idsCpu[i]).style.display = 'none';
    }
    for (const i in idsPlayer) {
        document.querySelector(idsPlayer[i]).style.display = 'none';
    }
    document.querySelector('#therock').style.display = 'block';
    document.querySelector(idsCpu[Math.floor(Math.random() * 3)]).style.display = 'block';
}
rock.addEventListener('click', clickHandler);


let paper = document.querySelector('#paper');
console.log(paper);
function clickHandler2(event) {
    for (const i in idsCpu) {
        document.querySelector(idsCpu[i]).style.display = 'none';
    }
    for (const i in idsPlayer) {
        document.querySelector(idsPlayer[i]).style.display = 'none';
    }
    document.querySelector('#clippy').style.display = 'block';
    document.querySelector(idsCpu[Math.floor(Math.random() * 3)]).style.display = 'block';
}
paper.addEventListener('click', clickHandler2);

let scissors = document.querySelector('#scissors');
console.log(scissors);
function clickHandler3(event) {
    for (const i in idsCpu) {
        document.querySelector(idsCpu[i]).style.display = 'none';
    }
    for (const i in idsPlayer) {
        document.querySelector(idsPlayer[i]).style.display = 'none';
    }
    document.querySelector('#scissorhands').style.display = 'block';
    document.querySelector(idsCpu[Math.floor(Math.random() * 3)]).style.display = 'block';
}
scissors.addEventListener('click', clickHandler3);


