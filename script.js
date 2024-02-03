
//computer choice
const choices = ["rock","paper","scissor"];
const computerChoice = choices[Math.floor(Math.random()*choices.length)];
function getComputerChoice(){
    
return computerChoice;
}

console.log("computer choice: " + computerChoice);
const value = prompt("give your choice");
function playerChoice(){
   
    return value;
}


console.log("player choice: " + value);
document.getElementById("pla").innerHTML = value;
document.getElementById("com").innerHTML = computerChoice;
function playRound(playerSelection,computerSelection){
return (playerSelection == "rock" && computerSelection == "scissor") ?
"player won" : (playerSelection == "paper" && computerSelection == "rock") ?
"player won" : (playerSelection == "scissor" && computerSelection == "paper") ?
"player won" : (playerSelection === "rock" && computerSelection === "paper") ?
"computer won" : (playerSelection === "paper" && computerSelection === "scissor") ?
"computer won" : (playerSelection === "scissor" && computerSelection === "rock") ?
"computer won" : "It's a Tie" ;
}


const result = playRound(value,computerChoice);
document.getElementById("res").innerHTML = result;
console.log(result);

