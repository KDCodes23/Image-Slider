const carouselImages = document.getElementById("carouselImages");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const totalImages = document.querySelectorAll(".carousel-image").length;

// Function to update the image display
// Note: This function needs to take a parameter to determine whether we are moving forward or backward
function updateCarousel() {
    const offset = -currentIndex * 100; // Moves the images horizontally
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function getNewIndex(currentIndex, type="next"){
    if (type == "next"){
        currentIndex++;
    }
    if (type == "prev"){
        currentIndex--;
    }
    if (currentIndex > totalImages - 1) {currentIndex = 0;}
    if (currentIndex < 0) {currentIndex = totalImages - 1;}
    return currentIndex;
}

// Next button event listener
nextBtn.addEventListener("click", () => {
    // Good approach but for infinite iteration, current index would become too big.
    // So lets reset it
    currentIndex = getNewIndex(currentIndex, type="next"); // Loop back to the start
    updateCarousel();
});

// Previous button event listener
prevBtn.addEventListener("click", () => {
    currentIndex = getNewIndex(currentIndex, type="prev"); // Loop to the last image
    updateCarousel();
});

// Optional: Auto slide every 3 seconds
setInterval(() => {
    newIndex = getNewIndex(currentIndex, "next");
    updateCarousel(newIndex);
    currentIndex = newIndex;
}, 3000);
