const playButton = document.getElementById("playButton");

playButton.addEventListener("click", play);

function play() {
  var audio = new Audio("perfectringtone.mp3");
  audio.play();
}
