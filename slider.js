document.querySelector('.next').addEventListener('click', () => {
    const slider = document.querySelector('.product-slider');
    slider.scrollLeft += slider.offsetWidth;
});

let isDown = false;
let startX;
let scrollLeft;

const slider = document.querySelector('.product-slider');
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('grabbing');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('grabbing');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('grabbing');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
