const cells = yaySound = new Audio("yay.mp3"); 
yaySound.volume = 3;
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const flowers = document.getElementById("flowers");

let currentPlayer = "X";
let gameActive = true;

const winConditions = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

let board = ["", "", "", "", "", "", "", "", ""];

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
      yaySound.play();

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
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.textContent = "🌸";

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.top = Math.random() * window.innerHeight + "px";

    flower.style.fontSize = (Math.random() * 20 + 10) + "px";

    flowers.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 2000);
  }
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  statusText.textContent = "";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("win");
  });

  flowers.innerHTML = "";
}

