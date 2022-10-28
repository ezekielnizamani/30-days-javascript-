const keys = document.querySelectorAll(".key");

document.addEventListener("keydown", (e) => {
  document.querySelector(`audio[data-key="${e.which}"]`).play();
  document.querySelector(`div[data-key="${e.which}"]`).classList.add("playing");
  return;
});

keys.forEach((key) =>
  key.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;
    key.classList.remove("playing");
  })
);
