//FullScreen
document.querySelector(".fullscreen").addEventListener("click", toggleScreen);
function toggleScreen () {
  if (!document.fullscreenElement) {document.documentElement.requestFullscreen();} else {if (document.fullscreenEnabled) {document.exitFullscreen();}}
}
//Piano
const piano = document.querySelector(".piano");
const keys = document.querySelectorAll(".piano-key");
//On Click
const playSound = (event) => {
  const key = event.target;
  const note = document.getElementById(key.dataset.note);
  key.classList.add("active");
  note.currentTime = 0;
  note.play();
  key.classList.remove("active");
}
//Mouse Over
const startSound = (event) => {
  const key = event.target;
  key.classList.add("active");
  const note = document.getElementById(key.dataset.note);
  note.currentTime = 0;
  note.play();
}
const stopSound = (event) => {
  event.target.classList.remove("active");
}
const startCorrespondOver = (event) => {
  if (event.target.classList.contains("piano-key")) {
    event.target.classList.add("active");
  }  
  keys.forEach((elem) => {
    elem.addEventListener("click", playSound);
    elem.addEventListener("mouseover", startSound);
    elem.addEventListener("mouseout", stopSound);
  });
}
const stopCorrespondOver = () => {
  keys.forEach((elem) => {
    elem.classList.remove("active");
    elem.removeEventListener("mouseover", startSound);
    elem.removeEventListener("mouseout", stopSound);
  });
}
piano.addEventListener("mousedown", startCorrespondOver, false);
piano.addEventListener("mouseup", stopCorrespondOver);
