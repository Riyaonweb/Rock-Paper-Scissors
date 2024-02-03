const choices = ["Rock", "Paper", "Scissor"];
let playerValue = 0;
let computerValue = 0;
let playerSelection = "";

// Computer choice function
function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const computerId = document.getElementById("computerid");
    computerId.textContent = computerChoice;
    console.log("Computer choice: " + computerChoice);
    return computerChoice;
}

getComputerChoice();

// Player choice function
function playerChoice() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const playerId = document.getElementById("playerid");
            playerId.textContent = e.target.textContent;
            playerSelection = e.target.textContent;
            console.log("Player choice: " + playerSelection);
            // buttons.forEach((btn) => {
            //     btn.disabled = true;
            // });
            const result = playRound(playerSelection, getComputerChoice());
            updateScore(result);
        });
    });
}

playerChoice();

// Play round function
function playRound(playerSelection, computerSelection) {
    return (playerSelection == "Rock" && computerSelection == "Scissor") ?
        "player won" : (playerSelection == "Paper" && computerSelection == "Rock") ?
        "player won" : (playerSelection == "Scissor" && computerSelection == "Paper") ?
        "player won" : (playerSelection === "Rock" && computerSelection === "Paper") ?
        "computer won" : (playerSelection === "Paper" && computerSelection === "Scissor") ?
        "computer won" : (playerSelection === "Scissor" && computerSelection === "Rock") ?
        "computer won" : "It's a Tie";
}

// Update score function
function updateScore(result) {
    const playerScore = document.getElementById("playerscore");
    const computerScore = document.getElementById("computerscore");
    if (result === "player won") {
        playerValue++;
    } else if (result === "computer won") {
        computerValue++;
    }
    playerScore.textContent = playerValue;
    computerScore.textContent = computerValue;
}

// Console log the result
const result = playRound(playerSelection, getComputerChoice());
console.log(result);
