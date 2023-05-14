const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

let open = true;

btn.addEventListener("click", () => {
  if (open == true) {
    search.classList.add("active");
    input.focus();
  } else {
    search.classList.remove("active");
  }
  open = !open;
});
