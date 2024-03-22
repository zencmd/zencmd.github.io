const audio = document.getElementById("myAudio");
const muteButton = document.getElementById("muteButton");

var unmuteIcon = '<i class="fas fa-volume-up"></i>'
var muteIcon = '<i class="fas fa-volume-mute"></i>'
audio.muted = false;
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    audio.muted = true;
    muteButton.innerHTML = `<i class="fas fa-volume-off"></i>`;
  }
}



muteButton.addEventListener("click", toggleMute);