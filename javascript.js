function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}

function getHumanChoice() {
    let person = window.prompt("Please enter your choice");
    return person;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        const valid = ["rock", "paper", "scissors"];
        if (!valid.includes(humanChoice)) {
            return "Invalid choice. Please choose rock, paper or scissors.";
        }
        if (humanChoice === computerChoice) {
            return "It's a tie!!";
        }
        if
            (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "rock" && computerChoice === "scissors")
        ) {
            humanScore++;
            return " You won!!!!";
        }
        else {
            computerScore++;
            return "You lost!";
        }
    }


    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        /**alert(
            playRound(humanSelection, computerSelection)*/
        const result = playRound(humanSelection, computerSelection);


        alert(`Round ${[i]}:\nYou chose:${humanSelection}\nComputer chose: ${computerSelection}\n${result}`);
        console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        return "You won the game!!";
    }
    else if (humanScore < computerScore) {
        return "You lost this time!!";
    }
    else { return "It's a tie"; }
}

playGame();


