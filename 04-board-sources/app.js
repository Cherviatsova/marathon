const board = document.querySelector("#board");
const colors = [
  "#b44444",
  "#b12121",
  "#b60707",
  "#b65607",
  "#b46525",
  "#af7443",
  "##990b3f",
  "#99330b",
  "#9c4e2f",
  "#9c624b",
  "#9e8277",
];
const SQUARES_NUMBERS = 300;

for (let i = 0; i < SQUARES_NUMBERS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
