const btn = document.getElementById("button");
const container = document.getElementById("toasts");

const messageNumber = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const typeList = ["success", "info", "error"];

btn.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  container.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messageNumber[Math.floor(Math.random() * messageNumber.length)];
}

function getRandomType() {
  return typeList[Math.floor(Math.random() * typeList.length)];
}
