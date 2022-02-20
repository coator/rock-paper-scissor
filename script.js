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
    switch (playerSelection) {
        case 'rock':
            console.log(playerSelection)
            console.log(computerSelection)
            switch (computerSelection){
                case 'rock':
                    results.textContent= tie;
                    break;   
                case 'paper':
                    results.textContent= lose;
                    break;   
                case 'scissors':
                    results.textContent= win;
                    console.log('player win')
                    break;   
                round=round+1;
                break;        
            }
        case 'paper':
            switch (computerSelection){
                case 'rock':
                    results.textContent= win;
                case 'paper':
                    results.textContent= tie;
                case 'scissors':
                    results.textContent= lose;
                round=round+1;
                return        
            }
        case 'scissors':
            switch (computerSelection){
                case 'rock':
                    results.textContent= lose;
                case 'paper':
                    results.textContent= win;
                case 'scissors':
                    results.textContent= tie;
                round=round+1;
                return        
            }
        default:
            results.textContent='';
    }
}


function runGame(playerChoice){
    let computerSelection = computerPlay();
    playRound(playerChoice, computerSelection)
    return
}

