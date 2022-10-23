const scrollBtn = document.getElementById('scroll')

scrollBtn.addEventListener('click', (e) => {
    console.log('clicked');
    const parent = e.target.parentElement
    const height = parent.scrollHeight
    window.scrollBy(0, height)
})

const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel')
let current_slide_index = 0

setInterval(() => {
    const scroll_to = slides[current_slide_index].offsetLeft;
    carousel.scrollTo(scroll_to, 0)
    current_slide_index = (current_slide_index + 1) % slides.length
}, 2000);