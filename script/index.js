document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.services-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const slideWidth = 320; // Width of slide + gap
    const slidesPerView = Math.floor(slider.offsetWidth / slideWidth);
    let currentPosition = 0;
    const slides = document.querySelectorAll('.service-item');
    const maxPosition = (slides.length - slidesPerView) * slideWidth;

    
    slider.style.transform = `translateX(0)`;

     
    prevBtn.addEventListener('click', () => {
        currentPosition = Math.min(currentPosition + slideWidth, 0);
        slider.style.transform = `translateX(${currentPosition}px)`;
        updateButtonStates();
    });

    
    nextBtn.addEventListener('click', () => {
        currentPosition = Math.max(currentPosition - slideWidth, -maxPosition);
        slider.style.transform = `translateX(${currentPosition}px)`;
        updateButtonStates();
    });


    function updateButtonStates() {
        prevBtn.disabled = currentPosition === 0;
        nextBtn.disabled = currentPosition === -maxPosition;
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    }

    
    updateButtonStates();

    
    window.addEventListener('resize', () => {
        currentPosition = 0;
        slider.style.transform = `translateX(0)`;
        updateButtonStates();
    });
});