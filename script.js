const carouselImages = document.getElementById("carouselImages");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalImages = document.querySelectorAll(".carousel-image").length;

// Function to update the image display
function updateCarousel() {
    const offset = -currentIndex * 100; // Moves the images horizontally
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Next button event listener
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to the start
    updateCarousel();
});

// Previous button event listener
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to the last image
    updateCarousel();
});

// Optional: Auto slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}, 10000);
