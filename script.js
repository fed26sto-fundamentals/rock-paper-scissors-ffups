let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function playGame(playerChoice) {
    if (playerScore >= winningScore || computerScore >= winningScore) return;

    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const roundResultText = document.getElementById('round-result');
    const playerChoiceText = document.getElementById('player-choice');
    const computerChoiceText = document.getElementById('computer-choice');
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const gameWinnerElement = document.getElementById('game-winner');
    const resetButton = document.getElementById('reset-button');

    playerChoiceText.innerText = `Player Choice: ${playerChoice}`;
    computerChoiceText.innerText = `Computer Choice: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        roundResultText.innerText = 'Result: It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        roundResultText.innerText = 'Result: You win this round!';
        playerScore++;
    } else {
        roundResultText.innerText = 'Result: You lose this round!';
        computerScore++;
    }

    playerScoreElement.innerText = playerScore;
    computerScoreElement.innerText = computerScore;

    if (playerScore >= winningScore) {
        gameWinnerElement.innerText = 'Congratulations! You won the game!';
        resetButton.style.display = 'inline-block';
    } else if (computerScore >= winningScore) {
        gameWinnerElement.innerText = 'Game over! The computer won the game.';
        resetButton.style.display = 'inline-block';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').innerText = '0';
    document.getElementById('computer-score').innerText = '0';
    document.getElementById('player-choice').innerText = 'Player Choice: ';
    document.getElementById('computer-choice').innerText = 'Computer Choice: ';
    document.getElementById('round-result').innerText = 'Result: ';
    document.getElementById('game-winner').innerText = '';
    document.getElementById('reset-button').style.display = 'none';
}