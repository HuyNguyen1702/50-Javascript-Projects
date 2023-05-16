const contents = document.querySelectorAll(".content");
const navList = document.querySelectorAll("nav ul li");

navList.forEach((nav, idx) => {
  nav.addEventListener("click", () => {
    hideAllContents();
    hideAllItems();

    nav.classList.add("active");
    contents[idx].classList.add("show");
  });
});

function hideAllContents() {
  contents.forEach((content) => content.classList.remove("show"));
}

function hideAllItems() {
  navList.forEach((nav) => nav.classList.remove("active"));
}
