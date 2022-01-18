function game(){
    let playerPoints = 0;
    let computerPoints = 0;

    const results = document.querySelector('.results');
    const final = document.createElement('p');
    final.setAttribute('style', 'white-space: pre;');
    const outcome = document.createElement('p');
    outcome.setAttribute('style', 'white-space: pre;');

    const btn = document.createElement('button');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => button.addEventListener('click', () => {
        playerSelection = button.textContent;
        computerSelection = computerPlay();
        
        playRound(playerSelection, computerSelection);
        if (playerPoints === 5 || computerPoints === 5) {
            outcome.textContent = '';
            buttons.forEach(button => button.remove());
            btn.textContent = 'Reset';
            btn.addEventListener('click', () => {window.location.reload();});

            if(playerPoints > computerPoints){
                final.textContent = `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}\r\n`;
                final.textContent += "You Win!\r\n\n";
            }else{
                final.textContent = `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}\r\n`;
                final.textContent += "You Lose!\r\n\n";
            };

            final.textContent += "Play Again?";
            results.appendChild(final);
            results.appendChild(btn);
        };

        results.appendChild(outcome);
    }));

    function computerPlay(){
        let choices = ["rock","paper","scissors"];
        return choices[Math.floor(Math.random()*choices.length)];
    }
    
    function playRound(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();

        if(playerSelection === computerSelection){
            outcome.textContent = "Tie\r\n";
            outcome.textContent += `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}`;
        } else if (playerSelection === "rock"){
            if(computerSelection === "paper"){
                outcome.textContent = "You Lose! Paper beats Rock\r\n";
                outcome.textContent += `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}`;
                computerPoints++;
            } else if (computerSelection === "scissors"){
                outcome.textContent = "You Win! Rock beats Scissors\r\n";
                outcome.textContent += `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}`;
                playerPoints++;
            }
        } else if (playerSelection === "paper"){
            if (computerSelection === "scissors"){
                outcome.textContent = "You Lose! Scissors beats Paper\r\n";
                outcome.textContent += `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}`;
                computerPoints++;
            } else if (computerSelection === "rock"){
                outcome.textContent = "You Win! Paper beats Rock\r\n";
                outcome.textContent += `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}`;
                playerPoints++;
            }
        } else if (playerSelection === "scissors"){
            if (computerSelection ==="rock"){
                outcome.textContent = "You Lose! Rock beats Scissors\r\n";
                outcome.textContent += `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}`;
                computerPoints++;
            } else if (computerSelection === "paper"){
                outcome.textContent = "You Win! Scissors beats Paper\r\n";
                outcome.textContent += `Player Score: ${playerPoints}\r\nComputer Score: ${computerPoints}`;
                playerPoints++;
            }
        }
    }

}

game();