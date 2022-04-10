let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.round(Math.random()*9);
  }
  
  const compareGuesses = (human, computer, secret) => {
  
  let dif_human = Math.abs(secret - human);
  let dif_comp = Math.abs(secret - computer);
  
  if(dif_human < dif_comp){
    return true;
  } else{
    return false;
  }
    
  }
  
  const updateScore = winner => {
  
    if(winner === 'human'){
      humanScore = humanScore + 1;
    } else if(winner === 'computer'){
      computerScore = computerScore + 1;
    }
  }
  
  const advanceRound = () => {
  
    currentRoundNumber = currentRoundNumber + 1;
  }