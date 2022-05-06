"use strict"

function computerPlay() {
    let select = Math.floor((Math.random() * 3))
    let result
    if (select == 0) {
        result = 'rock';
    } else if (select == 1) {
        result = 'paper';
    } else if (select == 2) {
        result = 'scissors';
    } else {
        console.log('an error has occurred');
    }
    return result
}

let tie = 'game is tied!';
let win = 'player wins!';
let lose = 'player loses!';
let round = 0;

function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('p.results');
    const roundCounter = document.querySelector('p.roundCount');
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection){
                case 'rock':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+tie;
                    break;   
                case 'paper':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+lose;
                    break;   
                case 'scissors':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+win;
                    break;   
            }
            round=round+1;
            roundCounter.textContent='round '+round;   
            break;
        case 'paper':
            switch (computerSelection){
                case 'rock':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+win;
                    break;
                case 'paper':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+tie;
                    break;
                case 'scissors':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+lose;
                    break;
            }
            round=round+1;
            roundCounter.textContent='round '+round;   
            break;
        case 'scissors':
            switch (computerSelection){
                case 'rock':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+lose;
                    break;
                case 'paper':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+win;
                    break;
                case 'scissors':
                    results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+tie;
                    break;
            }
            round=round+1;
            roundCounter.textContent='round '+round;   
            break;
        default:
            results.textContent='';
    }
}


function runGame(playerChoice){
    let computerSelection = computerPlay();
    playRound(playerChoice, computerSelection)
    return
}

const btnScissors = document.querySelector('#btn-scissor');
btnScissors.addEventListener('click', function (e) {
    console.log(e.target)
})

const btnPaper = document.querySelector('#btn-paper');
btnPaper.addEventListener('click', function (e) {
    console.log(e.target)
})

const btnRock = document.querySelector('#btn-rock');
btnRock.addEventListener('click', function (e) {
    console.log(e.target)
})