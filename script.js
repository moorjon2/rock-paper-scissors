const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    return prompt("What will you use? scissors, rock, or paper?").toLowerCase()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a TIE!")
        return;
    }

    switch(humanChoice) {
        case 'rock': {
            if (computerChoice === 'paper') {
                computerScore++;
                console.log(`You lose paper beats rock.`)
            } else if (computerChoice === 'scissors') {
                humanScore++;
                console.log(`You win rock beats scissors.`)
            }
            break;
        }
        case 'paper': {
            if (computerChoice === 'scissors') {
                computerScore++;
                console.log(`You lose scissors beat paper.`)
            } else if (computerChoice === 'rock') {
                humanScore++;
                console.log(`You win paper beats rock.`)
            }
            break;
        }
        case 'scissors': {
            if (computerChoice === 'rock') {
                computerScore++;
                console.log(`You lose rock beats scissors`);
            } else if (computerChoice === 'paper') {
                humanScore++;
                console.log(`You win scissors beat paper.`)
            }
            break;
        }
    }
}

function playGame() {
    let roundCounter = 1;
    while (roundCounter < 6) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        roundCounter++;
    }
}

playGame();
if (humanScore > computerScore) {
    console.log(`YOU WON!`)
} else {
    console.log(`THE COMPUTER WON!`)
}