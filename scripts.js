let currentIndex = 0;

function changeSlide(direction){
    const items = document.querySelectorAll('.carousel-item');
    currentIndex= (currentIndex + direction + items.length) % items.length;
    updateCarousel();

}

    function currentSlide(index){
        currentIndex = index;
        updateCarousel();
    }

    function updateCarousel(){
        const items = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.dot');
        const offset = -currentIndex * 100;
        items.forEach(items =>{
            items.style.transform = `translateX(${offset}%)`;
        });
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    //Initialize carousel with the first dot active
    document.addEventListener('DOMContentLoaded', () => {
        updateCarousel();
    });
