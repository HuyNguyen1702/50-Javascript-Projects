const slideContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const downBtn = document.querySelector(".down-button");
const upBtn = document.querySelector(".up-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

// Because slideLeft is a list of "div" with css of 100vh, and the list of "div" and the list of "image" is opposite => so we can use the lenght of "image" list - 1 to get the number of vh we want to change.
// Ex: For the div of "Eagle" is 300vh from the viewport, so we need to -300vh to match with the image.

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

function changeSlide(direction) {
  // For dynamic and for all device view height, use slideContainer.clientHeight for move up/down with transform all the current view height
  const sliderHeight = slideContainer.clientHeight;
  if (direction == "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction == "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
}
