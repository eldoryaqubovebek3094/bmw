const showBtn = document.querySelector("#show-btn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-btn");
const overlay = document.querySelector("#overlay");

//add classlist hidden
const addHidden = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//remove classlist hidden

const removeHidden = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
    console.log("you are clicked escape");
  }
});
