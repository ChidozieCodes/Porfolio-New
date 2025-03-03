// window.alert('hi')
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

const eyes = document.querySelectorAll('.eye-ball');

document.addEventListener('mousemove', (event) => {
    const { innerWidth: width, innerHeight: height } = window;
    const a = (event.clientX / width) * 100;
    const b = (event.clientY / height) * 100;

    eyes.forEach(eye => {
        eye.style.left = `${a}%`;
        eye.style.top = `${b}%`;
        eye.style.transform = `translate(-${a}%, -${b}%)`;
    });
});

//Accordion Tabs
$(".faq_text_description").hide();

$(".faq_title_holder").on('click', function(){
    $(this).next().slideToggle();
    $(this).parent().toggleClass('active');

    $(".faq_title_holder").not(this).next().slideUp();

    $(".faq_title_holder").not(this).parent().removeClass('active');
})

let header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (this.scrollY > 500) {
        header.classList.add('addtop');
        header.classList.add('animate__fadeInDown');
    } else {
        header.classList.remove('addtop');
        header.classList.remove('animate__fadeInDown');
    }
});


let hideboxs = document.querySelectorAll('.hidden');
let seeMoreBtn = document.querySelector('#seemore');

seeMoreBtn.addEventListener('click', function(){
    hideboxs.forEach(hidebox => {
        hidebox.classList.toggle('hidden');
    });

    if(seeMoreBtn.textContent === 'See More'){
        seeMoreBtn.textContent = 'See Less'
    }else{
        seeMoreBtn.textContent = 'See More'
    }
})

// testimonial-script.js

const sliderContainer = document.querySelector('#slider-container');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

let currentSlideIndex = 0; // Tracks the current slide index
const totalSlides = 2; // We have two slides

function updateSlider() {
  const offset = -(currentSlideIndex * 50); // Move by 50% for each slide
  sliderContainer.style.transform = `translateX(${offset}%)`;
}

// Previous button functionality
prevBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === 0) ? totalSlides - 1 : currentSlideIndex - 1;
  updateSlider();
});

// Next button functionality
nextBtn.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex === totalSlides - 1) ? 0 : currentSlideIndex + 1;
  updateSlider();
});

// Initialize slider position
updateSlider();

