document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        const offset = currentIndex * slider.clientWidth;
        slider.scrollTo({ left: offset, behavior: 'smooth' });
    }

    setInterval(nextSlide, 10000); // Cambia de slide cada 10 segundos
});
