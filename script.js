let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

let bestScore = localStorage.getItem("bestScore") || "--";

document.getElementById("bestScore").innerText =
  "Best Score: " + bestScore;

function checkGuess() {

  const guess =
    Number(document.getElementById("guessInput").value);

  const message =
    document.getElementById("message");

  if (!guess || guess < 1 || guess > 100) {

    message.innerHTML =
      "⚠ Enter a number between 1 and 100";

    message.style.color = "#fff200";

    return;
  }

  attempts++;

  document.getElementById("attempts").innerText =
    "Attempts: " + attempts;

  if (guess === randomNumber) {

    message.innerHTML =
      "🎉 Correct! You guessed it!";

    message.style.color = "#d4ff72";

    if (
      bestScore === "--" ||
      attempts < Number(bestScore)
    ) {

      localStorage.setItem(
        "bestScore",
        attempts
      );

      document.getElementById("bestScore").innerText =
        "Best Score: " + attempts;
    }

  }

  else if (guess > randomNumber) {

    message.innerHTML = "📈 Too High!";

    message.style.color = "#ffe082";

  }

  else {

    message.innerHTML = "📉 Too Low!";

    message.style.color = "#b3e5fc";

  }

  document.getElementById("guessInput").value = "";

}

function restartGame() {

  randomNumber =
    Math.floor(Math.random() * 100) + 1;

  attempts = 0;

  document.getElementById("message").innerHTML = "";

  document.getElementById("attempts").innerText =
    "Attempts: 0";

  document.getElementById("guessInput").value = "";

}