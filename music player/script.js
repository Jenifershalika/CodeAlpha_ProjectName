const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "Pause";
  } else {
    audio.pause();
    playBtn.textContent = "Play";
  }
}

function stop() {
  audio.pause();
  audio.currentTime = 0;
  playBtn.textContent = "Play";
}
