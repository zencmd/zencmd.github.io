const audio = document.getElementById("myaudio");
const muteButton = document.getElementById("muteButton");

var unmuteIcon = '<i class="fas fa-volume-up"></i>'
var muteIcon = '<i class="fas fa-volume-mute"></i>'
function toggleMute() {
  if (audio.paused) {
    audio.play();
    muteButton.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    audio.pause();
    muteButton.innerHTML = `<i class="fas fa-volume-off"></i>`;
  }
}

audio.addEventListener('ended', function() {
  audio.currentTime = 0;
  audio.play();
});

audio.muted = true;
audio.play()
audio.muted = false;

muteButton.addEventListener("click", toggleMute);
