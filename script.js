const choices = ["rock","paper","scissor"];

let player;
let computer;

//computer choice
function computerChoice(){
    computer = choices[Math.floor(Math.random()*choices.length)];
    console.log(computer);
    return computer;
}

//player choice
function playerChoice(){
    player = prompt("give your choice");
    console.log(player);
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

    for(var i=0; i<5; i++){
        let playerSelection = playerChoice();
        let computerSelection = computerChoice();
      let result = playRound(computerSelection,playerSelection);
        console.log(result);
        if(result == "computer won"){
            computerScore++;
            console.log("computer Score",computerScore);
        }else if(result == "player won"){
            playerScore++;
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






