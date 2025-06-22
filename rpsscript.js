document.addEventListener("DOMContentLoaded", () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const playButton = document.getElementById("playButton");
  const userChoiceSelect = document.getElementById("userChoice");
  const resultDiv = document.getElementById("result");
  const winsSpan = document.getElementById("wins");
  const lossesSpan = document.getElementById("losses");
  const drawsSpan = document.getElementById("draws");

  let wins = 0;
  let losses = 0;
  let draws = 0;

  playButton.addEventListener("click", () => {
    const userChoice = userChoiceSelect.value;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let resultMessage = `You chose ${userChoice} 🪨, Computer chose ${computerChoice} 📄. `;
    let resultClass = "";

    if (userChoice === computerChoice) {
      resultMessage += "It's a draw! 🤝";
      resultClass = "draw";
      draws++;
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      resultMessage += "You win! 🎉";
      resultClass = "win";
      wins++;
    } else {
      resultMessage += "You lose! 😢";
      resultClass = "lose";
      losses++;
    }

    resultDiv.textContent = resultMessage;
    resultDiv.className = `animate ${resultClass}`;
    updateScoreboard();
  });

  function updateScoreboard() {
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;
  }
});
