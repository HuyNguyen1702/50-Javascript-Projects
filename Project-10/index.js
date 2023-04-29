const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

async function generateJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const jokeData = await response.json();

  console.log(jokeData);

  jokeText.innerHTML = jokeData.joke;
}

generateJoke();

jokeBtn.addEventListener("click", () => {
  generateJoke();
});
