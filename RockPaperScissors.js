
//This game let's you play RPS (Rok Pap Scis) with the computer.
//You as player write in your coice as parameter in playGame() function
//computer makes random choice. 

//User input choice. Check if eligable
const getUserChoice = userInput => {
  if (userInput === 'rock' || userInput === 'paper') {
      return userInput;
  } else if (userInput === 'scissors') {
      return userInput;
  } else if (userInput === 'bomb') {
      return userInput;
  } 
  
  else {
    console.log('Error 5069');
  }
}

//Randomize computer choice for game.
function getComputerChoice() {
  let randomNum = (Math.floor(Math.random() * 3));
  switch (randomNum) {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

//One big nested control flow evaluating results, deciding winner.
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game is a tie';
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer has won';
      } else {
        return 'You have won!';
      }
  } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer has won.';
      } else if (computerChoice === 'rock') {
          return 'You have won!';
      }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer has won';
      } else if (computerChoice === 'paper') {
          return 'You have won!';
      }
  } else if (userChoice === 'bomb') {
      return 'YOU HAVE WON HAHA!';
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  console.log(userChoice);

  let computerChoice = getComputerChoice();
  console.log(computerChoice);

  console.log(determineWinner(userChoice, computerChoice));

}

playGame();

//Testing deterining winner function.
//determineWinner('scissors', 'paper'); 

//Testing if function works.
//getUserChoice('rock');
