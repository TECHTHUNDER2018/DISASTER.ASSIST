document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggle = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");
    dropdownToggle.addEventListener("click", (event) => {
        event.preventDefault(); 
        dropdownContent.classList.toggle("show");
    });

    
    document.addEventListener("click", (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".services-slider");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    const totalItems = slider.children.length;
    const itemWidth = slider.children[0].offsetWidth + 20;
    
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });

    
    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });
});