document.addEventListener("DOMContentLoaded", () => {
    const sliderContainer = document.querySelector(".slider-container");
    const slides = document.querySelectorAll(".slider-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dots = document.querySelectorAll(".dot");
    
    let currentIndex = 0;
    
    function updateSlider(index) {
        const offset = -index * 100 + "%";
        sliderContainer.style.transform = `translateX(${offset})`;
    
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider(currentIndex);
    });
    
    sliderContainer.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex); 
    })
        
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider(currentIndex);
    });
    

    dots.forEach(dot => {
        dot.addEventListener("click", (event) => {
            currentIndex = parseInt(event.target.dataset.index);
            updateSlider(currentIndex);
        });
    });
    
    // Initialisation
    updateSlider(currentIndex);
});