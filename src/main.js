import "./style.css";

document.querySelector("#app").innerHTML = `
    <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">3</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>
`;

// variables de estado en JS y selectores DOMXS
const sectionPlayer0 = document.querySelector(".player--0");
const sectionPlayer1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const btnRoll = document.querySelector(".btn--roll");
const imgDice = document.querySelector(".dice");

let score, currentScore, activePlayer;

// Función para inicializar el juego
const initData = () => {
  score = [0, 0]; // Puntuación total de ambos jugadores
  currentScore = 0; // Puntuación actual del jugador activo
  activePlayer = 0; // Jugador 0 empieza por defecto

  imgDice.classList.add("hidden");
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  // Quitar posibles clases de ganador
  sectionPlayer0.classList.remove("player--winner");
  sectionPlayer1.classList.remove("player--winner");
  sectionPlayer0.classList.add("player--active");
  sectionPlayer1.classList.remove("player--active");
};

initData();

btnRoll.addEventListener("click", throwDice);

function throwDice() {
  const diceNumber = Math.trunc(Math.random() * 6 + 1);
  imgDice.classList.remove("hidden");
  imgDice.src = `dice-${diceNumber}.png`;

  if (diceNumber !== 1) {
    updateCurrentScore(diceNumber);
  } else {
    switchPlayer();
  }
}

function updateCurrentScore(diceNumber) {
  currentScore += diceNumber;
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

function switchPlayer() {
  resetCurrentScore();
  sectionPlayer0.classList.toggle("player--active");
  sectionPlayer1.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
}

function resetCurrentScore() {
  currentScore = 0;
  if (activePlayer === 0) currentScore0.textContent = currentScore;
  else currentScore1.textContent = currentScore;
}

// Lógica para el botón "Hold"
btnHold.addEventListener("click", () => {
  // Añadir la puntuación actual al total del jugador activo
  score[activePlayer] += currentScore;
  if (activePlayer === 0) {
    score0.textContent = score[0];
  } else {
    score1.textContent = score[1];
  }

  // Verificar si el jugador actual ha ganado
  if (score[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    imgDice.classList.add("hidden");
  } else {
    switchPlayer();
  }
});

// Reiniciar el juego al hacer clic en "New Game"
btnNew.addEventListener("click", initData);
