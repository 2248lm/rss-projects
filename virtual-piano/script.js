//FullScreen
document.querySelector(".fullscreen").addEventListener("click", toggleScreen);
function toggleScreen () {
  if (!document.fullscreenElement) {document.documentElement.requestFullscreen();} else {if (document.fullscreenEnabled) {document.exitFullscreen();}}
}
//Keys and Buttons
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
//On Click
const playSound = (event) => {
  const key = event.target;
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  key.classList.remove("active");
}
//Mouse Over
const startSound = (event) => {
  const key = event.target;
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
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
