const choices = ["rock","paper","scissor"];
let computer;
let player;
//computer choice
function computerChoice(){
    
    const computerId = document.getElementById('computerid');
    computer = choices[Math.floor(Math.random()*choices.length)];
    computerId.innerHTML = computer;
    console.log(computer);
    return computer;
}

//player choice
function playerChoice(){

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        player = e.target.textContent;
        const playerId = document.getElementById('playerid');
        playerId.innerHTML = player;
       console.log(player);
    })
})
return player;
}

//Round
function playRound(computerSel,playerSel){
    return (playerSel == computerSel) ? "Its a Tie" :
    ((computerSel == "rock" && playerSel == "paper") ||
    (computerSel == "paper" && playerSel == "rock") ||
    (computerSel == "scissor" && playerSel == "rock")) ? "computer won" : "player won";
}

// 5 Round


function playGame(){

    let playerScore = 0;
    let computerScore = 0;
let playerscore = document.getElementById('playerscore');
let computerscore = document.getElementById('computerscore');
// const res = document.getElementById('res');
    for(let i=0; i<5; i++){
        let computerSelection = computerChoice();
        let playerSelection = playerChoice();
      let result = playRound(computerSelection,playerSelection);
        console.log(result);
        if(result == "computer won"){
            computerScore++;
            computerscore.innerText = computerScore;
            console.log("computer Score",computerScore);
        }else if(result == "player won"){
            playerScore++;
            playerscore.innerText = playerScore;
            console.log("playerscore",playerScore);
        }
    }
    //result announcement
    if(computerScore > playerScore){
        console.log("The Winner is Computer");
    }else if (computerScore < playerScore){
        console.log("The Winner is Player");
    }else{
        console.log("Its a tie")
    }

}
playGame();






