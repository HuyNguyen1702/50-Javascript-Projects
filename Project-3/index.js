const openBtn = document.getElementById("open");
const content = document.querySelector(".container");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
  content.classList.add("show-nav");
});

closeBtn.addEventListener("click", () => {
  content.classList.remove("show-nav");
});
