const backGround = document.getElementById("background");

const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", (e) => {
  const valueLength = e.target.value.length;
  const blurValue = 20 - valueLength * 2;
  backGround.style.filter = `blur(${blurValue}px)`;
});
