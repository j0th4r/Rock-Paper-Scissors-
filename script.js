//Get Random Choice from Computer
let getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

//Get Input from User
let getHumanChoice = () => {
  const humanChoice = prompt('Please choose either rock, paper, or scissors.').toLowerCase();
  if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
    return humanChoice;
  } else {
    alert('You entered an invalid option. Please try again.');
  }
};

//Play One Round
let playRound = (humanChoice, computerChoice) => {
  if(humanChoice === 'rock') {
    if(computerChoice === 'paper') {
      console.log('You lose Paper beats Rock');
      return "lose";
    } else if(computerChoice === 'scissors') {
      console.log("You WIN");
      return "win";
    } else {
      console.log("Rock vs. Rock is a tie");
      return null;
    }
  } else if(humanChoice === 'paper') {
    if(computerChoice === 'scissors') {
      console.log('You lose Scissors beats Paper');
      return "lose";
    } else if(computerChoice === 'rock') {
      console.log("You WIN");
      return "win";
    } else {
      console.log("Paper vs. Paper a tie");
      return null;
    }
  } else if(humanChoice === 'scissors') {
    if(computerChoice === 'rock') {
      console.log('You lose Rock beats Scissors');
      return "lose";
    } else if(computerChoice === 'paper') {
      console.log("You WIN");
      return "win";
    } else {
      console.log("Scissors vs. Scissors is a tie");
      return null;
    }
  }
};

//Play the Round 5 times
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let index = 1; index <= 5; index++) {
    let winOrLose = playRound(getHumanChoice(), getComputerChoice()); 

    if(winOrLose === 'win'){
      humanScore++;
    } else if (winOrLose == 'lose'){
      computerScore++;
    }
  }

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

//Start the Game
playGame()
