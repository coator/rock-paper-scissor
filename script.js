"use strict"


let round = 0;
let playerScore = 0;
let computerScore = 0;
let winner = false;

const btnScissors = document.getElementById('btnScissors');
const btnPaper = document.getElementById('btnPaper');
const btnRock = document.getElementById('btnRock');



function playRound(playerSelection, computerSelection) {
    const results = document.querySelector('#results');
    const roundCounter = document.querySelector('p.roundCount');
    const currentRoundStr = 'round '+round+ ' Player Score:' + playerScore + ' Computer Score:'+ computerScore;

    function gameOutcome(roundResult) {

        function endGame(){

            if (playerScore > 4 ) {
                roundCounter.textContent ='Player Wins!';
                results.textContent ='Player Wins!';
                winner = true
            }
            else if (computerScore > 4){
                roundCounter.textContent='Computer Wins!';
                results.textContent='Computer Wins!';
                winner = true
                }
            else{roundCounter.textContent=currentRoundStr;
            results.textContent= 'Player chose '+playerSelection+'. Computer chose '+computerSelection+'. '}
            }

        switch (roundResult){
            case 'win':
                round++;
                playerScore++
                endGame()
                break

            case 'lose':
                round++;
                computerScore++
                endGame()
                break

            case 'tie':
                round++;
                endGame()
                break
            default:
                break
            }
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
            } break
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
            } break
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
            } break
        default:
            results.textContent='';
    }
}

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



function runGame(playerChoice){
    if (winner == false){
        let computerSelection = computerPlay();
        playRound(playerChoice, computerSelection)
        return
    }
    else{
        return
    }
}
