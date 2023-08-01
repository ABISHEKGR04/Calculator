const textElement = document.getElementById("textToChange");
const colorButton = document.getElementById("colorButton");

function changeTextColor() {
  const randomColor = getRandomColor();

  textElement.style.color = randomColor;
}

colorButton.addEventListener("click", changeTextColor);

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
