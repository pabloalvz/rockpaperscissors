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

function playGame(humanChoice, computerChoice) {
    console.log(humanChoice);
    let winner = "";
    if (humanChoice == computerChoice) {
        console.log("No one Wins =(")
        winner = "tie"
    } else {
        if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
            winner = "human";
            humanScore++;
        } else {
            console.log("You lost :( " + humanChoice + " is beaten by " + computerChoice + ". You suck.");
            winner = "computer";
            computerScore++;
        }
    }
    if (winner == "tie") {
        results.textContent = "No one wins. There's a tie.\n" + "Human " + humanScore + " - " + computerScore + " IA";
    } else if (winner == "human") {
        results.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".\n" + "Human " + humanScore + " - " + computerScore + " IA";
    } else {
        results.textContent = "You lost :( " + humanChoice + " is beaten by " + computerChoice + ". You suck.\n" + "Human " + humanScore + " - " + computerScore + " IA";
    }
    
    if ((humanScore == 5) || (computerScore == 5)) {
        results.textContent = "The game is over. The final result is: " + "Human " + humanScore + " - " + computerScore + " IA";
        humanScore = 0;
        computerScore = 0;
    }

    return winner;
}


//Buttons functionality
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playGame("rock", computerChoice);
});
rock.setAttribute("style", "margin: 10px");

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playGame("paper", computerChoice);
});
paper.setAttribute("style", "margin: 10px");

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    playGame("scissors", computerChoice);
});
scissors.setAttribute("style", "margin: 10px");

const body = document.querySelector("body")
const results = document.createElement("div");
results.classList.add("results");
results.textContent = "";
results.setAttribute("style", "margin: 10px");
body.appendChild(results);


//Old rounds system
/*function playGame () {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        let winner = playGame(humanChoice, computerChoice);
        if (winner == "human") {
            humanScore++;
        } else if (winner == "computer") {
            computerScore++;
        }
    console.log("Results\n" + "Human " + humanScore + " - " + computerScore + " NPC");
    
    if (humanScore > computerScore) {
        console.log("You are the winner. Congratulations!!\nThe final score was:\n Human " + humanScore + " - " + computerScore);
    } else if(computerScore > humanScore) {
        console.log("You are a looser. Your mother doesn't love you\nThe final score was:\n Human " + humanScore + " - " + computerScore);
    } else {
        console.log("There's been a tie. C'mon you can improve it.")
    }
}



playGame();*/