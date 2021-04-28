function playDicee() {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;
  var imagePath1 = "images/dice" + random1 + ".png";
  var imagePath2 = "images/dice" + random2 + ".png";
  var dice1 = document.querySelectorAll("img")[0];
  var dice2 = document.querySelectorAll("img")[1];
  dice1.setAttribute("src", imagePath1);
  dice2.setAttribute("src", imagePath2);

  var heading = document.querySelector("h1");

  if (random1 > random2) {
    heading.innerHTML = "🏆 Player 1 win!";
  } else if (random1 < random2) {
    heading.innerHTML = "🏆 Player 2 win!";
  } else {
    heading.innerHTML = "😓 It's Tie!";
  }
}

var playButton = document.querySelector("button");
playButton.onclick = function () {
  playDicee();
  playButton.innerText = "Play Again"
};
