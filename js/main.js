const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slides = document.querySelectorAll('.slide');
const sliderWrapper = document.querySelectorAll('.slider-wrapper');
const dots = document.querySelectorAll('.dot');
console.log(dots);

let index = 0;

const activeSlider = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurentSlide = ind => {
    activeSlider(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurentSlide(index);
    } else {
        index++;
        prepareCurentSlide(index);
    }
    clearInterval(interval);
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurentSlide(index);
    } else {
        index--;
        prepareCurentSlide(index);
    }
    clearInterval(interval);
}

const nextSlideAuto = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurentSlide(index);
    } else {
        index++;
        prepareCurentSlide(index);
    }
}


dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurentSlide(index);
        clearInterval(interval);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlideAuto, 2500);




