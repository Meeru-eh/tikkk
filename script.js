body {
  font-family: Arial;
  text-align: center;
  background: #0b0f1a;
  color: white;
  margin: 0;
  padding: 0;
}

/* Title glow */
h1 {
  margin-top: 20px;
  color: #00f7ff;
  text-shadow: 0 0 10px #00f7ff, 0 0 20px #00f7ff;
}

/* Turn text */
h2 {
  color: #ff4df0;
  text-shadow: 0 0 10px #ff4df0;
}

/* Board */
.board {
  display: grid;
  grid-template-columns: repeat(3, 110px);
  justify-content: center;
  gap: 10px;
  margin: 30px auto;
}

/* Cells (THIS is the glow part) */
.cell {
  width: 110px;
  height: 110px;
  background: #111827;
  border-radius: 12px;
  border: 2px solid #00f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  cursor: pointer;

  transition: 0.2s;
  box-shadow: 0 0 10px #00f7ff;
}

/* Hover glow effect */
.cell:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #ff4df0, 0 0 40px #00f7ff;
}

/* Button glow */
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  background: transparent;
  border: 2px solid #ff4df0;
  color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px #ff4df0;
  transition: 0.3s;
}

button:hover {
  background: #ff4df0;
  color: black;
}
