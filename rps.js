let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let ans = Math.random();
    let select = "";
    if (ans < 0.33) {
        select = "rock";
    } else if (ans < 0.66) {
        select = "paper";
    } else {
        select = "scissors";
    }
    return select;
}

function getHumanChoice () {
    let HC = prompt("Choose your weapon");
    while (HC.toLowerCase() != "rock" && HC.toLowerCase() != "paper" && HC.toLowerCase() != "scissors") {
        HC = prompt("Try again folk. You can only choose between rock, paper or scissors. It is not so difficult.")
    }
    return HC.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let winner = "";
    if (humanChoice == computerChoice) {
        console.log("No one Wins =(")
    } else {
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            winner = "human";
        } else {
            console.log("You lost :( " + humanChoice + " is beaten by " + computerChoice + ". You suck.");
            winner = "computer";
        }
    }
    return winner;
}

function playGame () {
    for (let i = 0; i<5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let winner = playRound(humanChoice, computerChoice);
        if (winner == "human") {
            humanScore++;
        } else if (winner == "computer") {
            computerScore++;
        }
    console.log("Results\n" + "Human " + humanScore + " - " + computerScore + " NPC");
    }
    if (humanScore > computerScore) {
        console.log("You are the winner. Congratulations!!\nThe final score was:\n Human " + humanScore + " - " + computerScore);
    } else if(computerScore > humanScore) {
        console.log("You are a looser. Your mother doesn't love you\nThe final score was:\n Human " + humanScore + " - " + computerScore);
    } else {
        console.log("There's been a tie. C'mon you can improve it.")
    }
}



playGame();