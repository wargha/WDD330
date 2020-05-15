let currentPlayer;

const player1 = "X";
const player2 = "O";
currentPlayer = player1;
const playTurn = (ev) => {
  if (ev.target.innerText !== "") return;
  ev.target.innerText = currentPlayer;
  currentPlayer = currentPlayer === "X" ? player2 : player1;
  let won = checkForWin();
};

document.getElementById("btn").addEventListener("click", () => {
  const els = document.getElementsByClassName("single-block");
  for (let i = 0; i < els.length; i++) {
    els[i].innerText = "";
  }
});

const checkForWin = () => {
  const els = document.getElementsByClassName("single-block");
  let rows = checkRows(els);
  let count = 0;
  for (let i = 0; i < els.length; i++) {
    if (els[i].innerText !== "") count++;
  }
  if (count < 9) {
    console.log("still playing");
  } else {
    console.log("game finished");
    return false;
  }
};

function checkRows(elements) {
  for (let i = 0; i < elements.length; i += 3) {
    for (let j = 0; j < 3; j++) {
      if (elements[i].innerText === elements[j + 1].innerText) {
        console.log(elements[j + 1].innerText);
      }

      if (elements[i] !== elements[j]) continue;
    }
  }
}
