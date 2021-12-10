function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let rounds = 1;

    function computerPlay(){
        let choices = ["rock","paper","scissors"];
        return choices[Math.floor(Math.random()*choices.length)];
    }
    
    function playRound(playerSelection, computerSelection){
        playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        computerSelection = computerPlay();

        if(playerSelection === computerSelection){
            alert("Tie");
        } else if (playerSelection === "rock"){
            if(computerSelection === "paper"){
                alert("You Lose! Paper beats Rock");
                computerPoints++;
            } else if (computerSelection === "scissors"){
                alert("You Win! Rock beats Scissors");
                playerPoints++;
            }
        } else if (playerSelection === "paper"){
            if (computerSelection === "scissors"){
                alert("You Lose! Scissors beats Paper");
                computerPoints++;
            } else if (computerSelection === "rock"){
                alert("You Win! Paper beats Rock");
                playerPoints++;
            }
        } else if (playerSelection === "scissors"){
            if (computerSelection ==="rock"){
                alert("You Lose! Rock beats Scissors");
                computerPoints++;
            } else if (computerSelection === "paper"){
                alert("You Win! Scissors beats Paper");
                playerPoints++;
            }
        }
        document.write("Round: " + rounds);
        document.write("<br>Player Score: " + playerPoints);
        document.write("<br>Computer Score: " + computerPoints + "<br><br>");
    }

    for(;rounds < 7; rounds++){
        if (rounds === 6){
            if (playerPoints === computerPoints){
                alert("Final Score!\n"+ "Player Score: " + playerPoints + "\nComputer Score: " + computerPoints + "\nIt's a Tie!");
            } else if (playerPoints < computerPoints){
                alert("Final Score!\n"+ "Player Score: " + playerPoints + "\nComputer Score: " + computerPoints + "\nYou Lose!");
            } else if (playerPoints > computerPoints){
                alert("Final Score!\n"+ "Player Score: " + playerPoints + "\nComputer Score: " + computerPoints + "\nYou Win!");
            }
        } else {
            playRound();
        }
    }

}

game();