const audio = document.getElementById("myaudio");
const muteButton = document.getElementById("muteButton");
const pages = document.getElementById("pagesButton");
const dropdownBox = document.getElementById("dropdown-content");
const dropdownButton = document.getElementById("dropdown")
const dropdownChildren = document.getElementById("dropdownthing")
const planetText = document.getElementById("planettext")
const planetImage = document.getElementById("planet")

var unmuteIcon = '<i class="fas fa-volume-up"></i>'
var muteIcon = '<i class="fas fa-volume-mute"></i>'

function toggleMute() {
  if (audio.playing = true) {
    if (audio.muted) {
      audio.muted = false;
      muteButton.innerHTML = `<i class="fas fa-volume-up"></i>`;
    } else {
      audio.muted = true;
      muteButton.innerHTML = `<i class="fas fa-volume-off"></i>`;
    }
  }
}

audio.addEventListener('ended', function() {
  audio.currentTime = 0;
  audio.play();
});
window.onload = function() {
  resizePage()
  onmouseover = (event) => {
    audio.play()
  };
};
audio.muted = true;
audio.muted = false;

dropdownBox.style.display = "none";
function toggleDropdown() {
  if (dropdownBox.style.display == "none")  {
    dropdownBox.style.display = "inline-block";
    dropdownButton.style.display = "none";
    dropdownButton.style.display = "block";
    dropdownButton.innerHTML = `<i class="fas fa-chevron-up"></i>`;
  } else {
      dropdownBox.style.display = "none";
      dropdownButton.innerHTML = `<i class="fas fa-chevron-down"></i>`;
    }
}

const planetTexts = document.querySelectorAll('.planettext');
if (document.URL.includes("index.html")) {
  planetTexts.forEach(function(planetText) {
    planetText.style.opacity = "0%"
   planetText.onmouseover = (event) => {
     planetText.style.opacity = "100%";
   }
   planetText.onmouseout = (event) => {
      planetText.style.opacity = "0%"
    }
  })
}

function resizePage() {
  if (screen.width < screen.height) {
    console.log("erm");
    if (document.URL.includes("index.html")) {
      planetTexts.forEach(function(planetText) {
        planetText.style.opacity = "100%";
      })
    }
    dropdownBox.style.margin = "10%";
  } else {
    console.log("uh");
    if (document.URL.includes("index.html")) {
      planetTexts.forEach(function(planetText) {
        planetText.style.opacity = "0%";
      })
     planetText.style.opacity = "0%";
    }
    dropdownBox.style.margin = "0%";
  }
}

window.addEventListener("resize", resizePage);
muteButton.addEventListener("click", toggleMute);
dropdownButton.addEventListener("click", toggleDropdown)