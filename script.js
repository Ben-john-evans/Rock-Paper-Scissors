function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

function getHumanChoice() {
    let ask = prompt("Enter your choice: Rock, Paper, or Scissors?").trim();
    ask = ask.charAt(0).toUpperCase() + ask.slice(1).toLowerCase();
    
    const validChoices = ["Rock", "Paper", "Scissors"];
    
    while (!validChoices.includes(ask)) {
      ask = prompt("Invalid choice. Please enter Rock, Paper, or Scissors:").trim();
      ask = ask.charAt(0).toUpperCase() + ask.slice(1).toLowerCase();
    }

    return ask;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
   }

  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
     ) { 
     return "You win!";
    } else {
     return "Computer wins!";
    }
}

function playGame() {
   let humanScore = 0;
   let computerScore = 0;
   const rounds = 5;

  for (let i = 0; i < rounds; i++) {
   const humanChoice = getHumanChoice();
   const computerChoice = getComputerChoice();

   console.log(`Round ${i + 1}`);
   console.log("Human Choice:", humanChoice);
   console.log("Computer Choice:", computerChoice);

   const result = playRound(humanChoice, computerChoice)
   console.log(result);
   
   if (result === "You win!") {
    humanScore++;
   } else if (result === "Computer wins!") {
    computerScore++;
   }

   console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
   }

   console.log("Final Scores:");
   console.log(`Human: ${humanScore}`);
   console.log(`Computer: ${computerScore}`);
   
   if (humanScore > computerScore) { 
    console.log("Congratulations! You are the overall winner!")
   } else if (computerScore > humanScore) {
    console.log("Computer is the overall winner. Better luck next time!")
   } else {
    console.log("The game is a tie!")
   }

  }

playGame();
