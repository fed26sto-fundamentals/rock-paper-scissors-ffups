function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = document.getElementById('game-result');
    const playerChoiceText = document.getElementById('player-choice');
    const computerChoiceText = document.getElementById('computer-choice');

    playerChoiceText.innerText = `Player Choice: ${playerChoice}`;
    computerChoiceText.innerText = `Computer Choice: ${computerChoice}`;

    if (playerChoice === computerChoice) {
        resultText.innerText = 'Result: It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText.innerText = 'Result: You win!';
    } else {
        resultText.innerText = 'Result: You lose!';
    }
}