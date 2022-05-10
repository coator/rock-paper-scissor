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

let round = 0;
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    const results = document.querySelector('#results');
    const roundCounter = document.querySelector('p.roundCount');

    function gameOutcome(roundResult) {
        if (roundResult =='win'){
            results.textContent= 'Player chose '+playerSelection+' .Computer chose '+computerSelection+'. '+ 'Player Wins!';
            playerScore++;
            round++;
        }
        else if (roundResult =='lose'){
            results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+ 'Player Loses :(!'; 
            computerScore++;
            round++;
        }
        else if (roundResult =='tie'){
            results.textContent= 'Player chose '+playerSelection+'.Computer chose '+computerSelection+'. '+ 'Player ties!'; 
            round++;
        }
        else {
            results.textContent= 'An error has occurred.'
        }
        console.log(round)
        roundCounter.textContent='round '+round;
    }

    switch (playerSelection) {
        case 'rock':
            switch (computerSelection){
                case 'rock':
                  gameOutcome('tie')
                  break;
                case 'paper':
                  gameOutcome('lose')
                  break;  
                case 'scissors':
                  gameOutcome('win')
                  break;
            }
        case 'paper':
            switch (computerSelection){
                case 'rock':
                    gameOutcome('win')
                    break;
                case 'paper':
                  gameOutcome('tie')
                    break;
                case 'scissors':
                  gameOutcome('lose')
                    break;
            }
        case 'scissors':
            switch (computerSelection){
                case 'rock':
                  gameOutcome('lose')
                    break;
                case 'paper':
                    gameOutcome('win')
                    break;
                case 'scissors':
                  gameOutcome('tie')
                    break;
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

const btnScissors = document.querySelector('#btnScissors');
btnScissors.addEventListener('click', function (e) {
    console.log(e.target)
})

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', function (e) {
    console.log(e.target)
})

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', function (e) {
    console.log(e.target)
})