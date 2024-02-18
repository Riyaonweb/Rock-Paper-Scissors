const choices = ["Rock","Paper","Scissor"];
const buttons = document.querySelectorAll("button");
let playerid = document.getElementById("playerid"); 
let computerid = document.getElementById("computerid");
const playermarks = document.getElementById("playerscore");
const computermarks = document.getElementById("computerscore");
const res = document.getElementById("res");
let computer;
let computerSelection;
let playerSelection;
//computer choice
function computerChoice(){
    computerSelection = choices[Math.floor(Math.random()*choices.length)];
    computerid.innerHTML = computerSelection;
    console.log("computerSelection",computerSelection);
}

buttons.forEach((btn) => {
    btn.addEventListener("click",(playerChoice));
})
//player choice
function playerChoice(e){
   playerSelection= e.target.innerHTML;
            playerid.innerHTML =playerSelection;
            console.log(" playerSelection", playerSelection);
            computerChoice();
            playGame();
            if (round === 5) {
                endGame(computerScore, playerScore);
             }
            
}


//Round
function playRound(computerSel,playerSel){

    return (playerSel == computerSel) ? "Its a Tie" :
    ((computerSel == "Rock" && playerSel == "Paper") ||
    (computerSel == "Paper" && playerSel == "Rock") ||
    (computerSel == "Scissor" && playerSel == "Rock")) ? "computer won" : "player won";
}

// 5 Round



let playerScore = 0;
let computerScore = 0;
let round=0
function playGame(){
    
   
    if(round < 5){
        let result = playRound(computerSelection,playerSelection);
        console.log("result",result);
        if(result == "computer won"){
            computerScore++;
            computermarks.innerHTML = computerScore;
            console.log("computer Score",computerScore);
        }else if(result == "player won"){
             playerScore++;
             playermarks.innerHTML = playerScore;
            console.log("playerscore",playerScore);
        }
        round++;
    }
    
    }
    
function endGame(cs,ps){
    if(cs > ps){
        res.innerHTML = "The Winner is Computer";
        console.log("The Winner is Computer");
    }else if (cs < ps){
        console.log("The Winner is Computer");
        res.innerHTML = "The Winner is Computer";
    }else{
        console.log("Its a tie")
        res.innerHTML = "Its a tie";
    }
    
    setTimeout(()=>{
        playerScore = 0;
        computerScore = 0;
        round = 0;        
        playermarks.innerHTML = 0;
        computermarks.innerHTML = 0;
        playerid.innerHTML = "";
        computerid.innerHTML = "";
        res.innerHTML = "";
    },4000);
}
