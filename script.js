const container = document.querySelector("#right-container");
const squareNum = document.querySelector("#square-numbers");
const clearBtn = document.querySelector(".clear");
const eraseBtn = document.querySelector(".eraser");

let i = 0;

let num = 16;
let eraseMode = false;
squareNum.addEventListener("input", function () {
  num = parseInt(squareNum.value);
  createGrid();
});
const createGrid = () => {
  containerWidth = container.offsetWidth;

  const cellSize = containerWidth / num;

  container.innerHTML = "";

  for (let i = 0; i < num; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 0; j < num; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${cellSize}%`;
      cell.style.paddingBottom = `${cellSize}%`;
      row.appendChild(cell);
    }
  }

  const squareCell = document.querySelectorAll(".cell");
  squareCell.forEach((cell) => {
    cell.style.background = "#ffffff";
    cell.addEventListener("mouseenter", function () {
      if (eraseMode) {
        cell.style.backgroundColor = "#ffffff";
      } else {
        cell.style.backgroundColor = "#000000";
      }
      cell.addEventListener("mousemove", function () {
        if (eraseMode) {
          cell.style.backgroundColor = "#ffffff";
        } else {
          cell.style.backgroundColor = "#000000";
        }
      });
    });
  });
};

eraseBtn.addEventListener("click", () => {
  eraseMode = !eraseMode;
  eraseBtn.classList.toggle("active");
});

function resetGame() {
  clearBtn.addEventListener("click", () => {
    location.reload();
  });
}

resetGame();

createGrid();
