const audio = document.getElementById("myaudio");
const muteButton = document.getElementById("muteButton");

var unmuteIcon = '<i class="fas fa-volume-up"></i>'
var muteIcon = '<i class="fas fa-volume-mute"></i>'
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteButton.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    audio.muted  = true;
    muteButton.innerHTML = `<i class="fas fa-volume-off"></i>`;
  }
}



muteButton.addEventListener("click", toggleMute);


function play() {
  audio.play();
}

body.addEventListener('mousemove', play);