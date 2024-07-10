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

// Scoreboard
let humanScore = 0;
let computerScore = 0;

// Add elements using DOM methods
const buttons = document.querySelectorAll("button");

const container = document.querySelector("#container");

const div = document.createElement('div');
container.appendChild(div);


const score = document.createElement('p');
score.setAttribute('id', 'scoreboard');
div.appendChild(score);

const para = document.createElement('p');
para.setAttribute('id', 'result');
div.appendChild(para);

//Play One Round
let playRound = (humanChoice, computerChoice) => {
  if(humanChoice === 'rock') {
    if(computerChoice === 'paper') {
      para.textContent ='You lose! Paper beats Rock';
      return "lose";
    } else if(computerChoice === 'scissors') {
      para.textContent ="You win! Rock beats scissors";
      return "win";
    } else {
      para.textContent ="It's a tie";
      return null;
    }
  } else if(humanChoice === 'paper') {
    if(computerChoice === 'scissors') {
      para.textContent ='You lose! Scissors beats Paper';
      return "lose";
    } else if(computerChoice === 'rock') {
      para.textContent = "You win! Paper beats rock";
      return "win";
    } else {
      para.textContent = "It's a tie";
      return null;
    }
  } else if(humanChoice === 'scissors') {
    if(computerChoice === 'rock') {
      para.textContent = 'You lose! Rock beats Scissors';
      return "lose";
    } else if(computerChoice === 'paper') {
      para.textContent = "You win! Scissors beats paper";
      return "win";
    } else {
      para.textContent = "It's a tie";
      return null;
    }
  }
};


// Add button functionality
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let winOrLose = playRound(button.id, getComputerChoice()); 

    if(winOrLose === 'win'){
      humanScore++;
    } else if (winOrLose == 'lose'){
      computerScore++;
    }

    score.textContent = `${humanScore} - ${computerScore}`;
    
    if(humanScore === 5) {
      para.textContent ="Game over! You win";
      buttons.forEach((button) => {
        button.disabled = true;
      });
    } else if (computerScore === 5) {
      para.textContent ="Game over! You lose";
      buttons.forEach((button) => {
        button.disabled = true;
      });
    }

  });
});
