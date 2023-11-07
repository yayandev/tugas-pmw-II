const carousel = document.querySelector(".carousel");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateCarousel();
});

function updateCarousel() {
  const translateValue = currentIndex * -100;
  carousel.style.transform = `translateX(${translateValue}%)`;
}
