const SELECTOR_KEY = ".key";
const CLASS_PLAYING = "playing";
const ATTR_KEY = "data-key";

const audioElements = document.querySelectorAll("audio");
const keyElements = document.querySelectorAll(SELECTOR_KEY);

const playSound = (e) => {
  const audioElem = document.querySelector(`audio[${ATTR_KEY}="${e.keyCode}"]`);
  if (!audioElem) return;
  audioElem.currentTime = 0;
  audioElem.play();
};

const addPlayingState = (e) => {
  const keyElem = document.querySelector(`div[${ATTR_KEY}="${e.keyCode}"]`);
  if (!keyElem) return;
  keyElem.classList.add(CLASS_PLAYING);
};

const removePlayingState = (e) => {
  const keyElem = document.querySelector(`div[${ATTR_KEY}="${e.keyCode}"]`);
  if (!keyElem) return;
  keyElem.classList.remove(CLASS_PLAYING);
};

window.addEventListener("keydown", playSound);
window.addEventListener("keydown", addPlayingState);
window.addEventListener("keyup", removePlayingState);
