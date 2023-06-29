const array=["rock","paper","scissor"]
let playerScore=0,computerScore=0;
// const prompt = require ("prompt-sync")({sigint: true});



for(let i=0;i<5;i++)
{
    const playerSelection = prompt("Enter your choice from rock paper scissor");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    
}
function getComputerChoice()
{
  const randomIndex = Math.floor(Math.random() * array.length);

  const item = array[randomIndex];

  return item;

}

function playRound(playerSelection, computerSelection) {

    if(playerSelection==="rock")
    {
        if(computerSelection==="paper")
            computerScore++;
        if( computerSelection==="scissor")
            playerScore++;
    }   
    else if(playerSelection==="paper" )
    {
        if( computerSelection==="scissor")
            computerScore++;
        if(  computerSelection==="rock")
            playerScore++;
    }
    else if(playerSelection==="scissor")
    {
        if( computerSelection==="rock")
            computerScore++;
        if( computerSelection==="paper")
            playerScore++;
    }
    else if(playerSelection===computerSelection)
        console.log("Tie");
    else
        playerScore++;
    console.log(`Player Score ${playerScore}`);
    console.log(`Computer Score ${computerScore}`);
    console.log(`Player chose ${playerSelection}  Computer chose ${computerSelection}`);
  }




   
  
  