const btnEl = document.querySelector(".js-btn");
const btnReset = document.querySelector(".js-btn-reset");
const numberEl = document.querySelector(".js-number");
const clueEl = document.querySelector(".js-clue");
const attemptsEl = document.querySelector(".js-attempts");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const random = getRandomNumber(100);
console.log(`Mi número aleatorio es ${random}`);

function guessNumber() {
  const realNumber = parseInt(numberEl.value);

  if (realNumber < 0) {
    writeClue("El número debe estar entre 1 y 100");
  } else if (realNumber > 500) {
    writeClue("Quo vadis?");
  } else if (realNumber > 100) {
    writeClue("El número debe estar entre 1 y 100");
  } else if (realNumber > random) {
    writeClue("Demasiado alto");
  } else if (realNumber < random) {
    writeClue("Demasiado bajo");
  } else if (realNumber === random) {
    writeClue("Has ganado, campeona");
    // location.reload();
  } else if (numberEl !== realNumber) {
    writeClue("Introduce un numero");
  }
  NumbersAttempts();
}

let attemptsMessage = 0;
function NumbersAttempts() {
  attemptsMessage++;
  attemptsEl.innerHTML = `Número de intentos: ${attemptsMessage}`;
}

function writeClue(clue) {
  clueEl.innerHTML = clue;
}

const resetNumber = () => {
  location.reload();
};

btnEl.addEventListener("click", guessNumber);
btnReset.addEventListener("click", resetNumber);
numberEl.addEventListener("keydown", function (e) {
  const keycode = e.keyCode || e.which;
  if (keycode === 13) {
    e.preventDefault();
    return false;
  }
});
