//FullScreen
document.querySelector(".fullscreen").addEventListener("click", toggleScreen);
function toggleScreen () {
  if (!document.fullscreenElement) {document.documentElement.requestFullscreen();} else {if (document.fullscreenEnabled) {document.exitFullscreen();}}
}
//Piano keys
const piano = document.querySelector(".piano");
const keys = document.querySelectorAll(".piano-key");
//Keybord
const playSoundKeyboard = (event) => {
  const key = document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!key) return;
  if (event.repeat) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
}
const stopSoundKeyboard = (event) => {
  const key = document.querySelector(`.piano-key[data-key="${event.keyCode}"]`);
  if (!key) return;
  key.classList.remove("active");
}
//Mouse
const startSound = (event) => {
  const key = event.target;
  key.classList.add("active");
  const audio = document.getElementById(key.dataset.note);
  audio.currentTime = 0;
  audio.play();
}
const stopSound = (event) => {
  event.target.classList.remove("active");
  if (event.repeat) return;
}
const startCorrespondOver = (event) => {
  const key = event.target;
  if (key.classList.contains("piano-key")) {
    key.classList.add("active");
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
  }
  keys.forEach((elem) => {
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
window.addEventListener("mouseup", stopCorrespondOver);
window.addEventListener("keydown", playSoundKeyboard);
window.addEventListener("keyup", stopSoundKeyboard);
//Notes-Letters Buttons
const btnNotes = document.querySelector(".btn-notes");
const btnLetters = document.querySelector(".btn-letters");
btnNotes.classList.add("active");
const onBtnNotes = (event) => {
  event.target.classList.add("active");
  keys.forEach((elem) => {
    elem.classList.remove("piano-key-letter");
  })
  btnLetters.classList.remove("active");
}
const onBtnLetters = (event) => {
  event.target.classList.add("active");
  keys.forEach((elem) => {
    elem.classList.add("piano-key-letter");
  })
  btnNotes.classList.remove("active");
}
btnNotes.addEventListener("click", onBtnNotes);
btnLetters.addEventListener("click", onBtnLetters);
