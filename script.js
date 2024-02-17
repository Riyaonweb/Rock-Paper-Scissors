const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
var computer;

function computerChoice() {
    const computerId = document.getElementById('computerid');
    computer = choices[Math.floor(Math.random() * choices.length)];
    computerId.innerHTML = computer;
    console.log(computer);
    return computer;
}

function playRound(computerSel, playerSel) {
    return (computerSel === playerSel) ? "It's a Tie" :
       ((computerSel === "rock" && playerSel === "scissors") ||
       (computerSel === "paper" && playerSel === "rock") ||
       (computerSel === "scissors" && playerSel === "paper"))  ? "Computer" : "Player";
    }

var playerSelection;
var computerSelection;
function playGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
             playerSelection = e.target.textContent;
             console.log(playerSelection);
            const playerId = document.getElementById('playerid');
            playerId.innerHTML = playerSelection;
             computerSelection = computerChoice();
            const result = playRound(computerSelection, playerSelection);
            console.log(result);
            updateScore(result);
            
        });
    });
}

function updateScore(result) {
    const playerscore = document.getElementById('playerscore');
    const computerscore = document.getElementById('computerscore');
   
    if (result === "Player") {
        playerScore++;
    } else if (result === "Computer") {
        computerScore++;
    }
    playerscore.innerText = playerScore;
    computerscore.innerText = computerScore;
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    const winner = (playerScore > computerScore) ? "Player" : "Computer";
    console.log(`The winner is ${winner}`);
}

playGame();