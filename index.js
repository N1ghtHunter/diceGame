function diceGame() {
var randomNumber1 = Math.floor((Math.random() * 5 + 1))
var randomNumber2 = Math.floor((Math.random() * 5 + 1))
var header = document.querySelector("h1");
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  header.textContent = "🚩Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
  header.textContent = "Player 2 wins!🚩"
} else {
  header.textContent = "DRAW!"
}
header.classList.remove("hidden");
}
