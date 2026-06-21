const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;

let board = ["", "", "", "", "", "", "", "", ""];

const winConditions = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

const yaySound = new Audio("yay.mp3");

document.body.addEventListener("click", () => {
  yaySound.load();
}, { once: true });

function playWinSound() {
  yaySound.currentTime = 0;
  yaySound.play() 
}

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.getAttribute("data-index");

    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

function checkWinner() {
  for (let condition of winConditions) {
    const [a,b,c] = condition;

    if (
      board[a] &&
      board[a] === board[b] &&
      board[a] === board[c]
    ) {
      statusText.textContent = `${board[a]} Wins! 🌸`;
      gameActive = false;

      highlightWin(condition);
      spawnFlowers();

      playWinSound();
      return;
    }
  }

  if (!board.includes("")) {
    statusText.textContent = "Draw!";
    gameActive = false;
  }
}

function highlightWin(condition) {
  condition.forEach(i => {
    cells[i].classList.add("win");
  });
}

function spawnFlowers() {
  const flowers = document.getElementById("flowers");

  for (let i = 0; i < 30; i++) {
    const f = document.createElement("div");
    f.classList.add("flower");
    f.textContent = "🌸";

    f.style.left = Math.random() * window.innerWidth + "px";
    f.style.top = Math.random() * window.innerHeight + "px";

    flowers.appendChild(f);

    setTimeout(() => f.remove(), 2000);
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";

  cells.forEach(c => {
    c.textContent = "";
    c.classList.remove("win");
  });

  statusText.textContent = "";
  document.getElementById("flowers").innerHTML = "";
}
