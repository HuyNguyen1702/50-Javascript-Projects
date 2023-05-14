const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(e) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good == e) {
      fast.checked = false;
    }
    if (cheap == e) {
      good.checked = false;
    }
    if (fast == e) {
      cheap.checked = false;
    }
  }
}
