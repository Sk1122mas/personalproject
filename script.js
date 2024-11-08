var myImage = document.querySelector("#imghero");

function FirstImage() {
    myImage.src = "https://www.macaranga.org/wp-content/uploads/2022/09/RubbishTrail_2_1_UsharDaniele.jpg";
}

function SecondImage() {
    myImage.src = "https://media2.malaymail.com/uploads/articles/2021/2021-06/shah_alam_water_pollution_23062021.jpg";
}

function ThirdImage() {
    myImage.src = "https://upload.wikimedia.org/wikipedia/commons/1/17/Haze_in_Kuala_Lumpur.jpg";
}

const navLinkEls = document.querySelectorAll('.feature')
navLinkEls.forEach(navLinkEls => {
    navLinkEls.addEventListener('click', () => {
        document.querySelector('.active').classList.remove('active');
        navLinkEls.classList.add('active');
    })
})

const slides1 = document.getElementById('slides1');
const totalSlides1 = slides1.children.length;
let currentIndex1 = 0;

document.getElementById('nextBtn1').addEventListener('click', () => {
    currentIndex1 = (currentIndex1 + 1) % totalSlides1;
    updateSlidePosition(slides1, currentIndex1);
});

document.getElementById('prevBtn1').addEventListener('click', () => {
    currentIndex1 = (currentIndex1 - 1 + totalSlides1) % totalSlides1;
    updateSlidePosition(slides1, currentIndex1);
});

const slides2 = document.getElementById('slides2');
const totalSlides2 = slides2.children.length;
let currentIndex2 = 0;

document.getElementById('nextBtn2').addEventListener('click', () => {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    updateSlidePosition(slides2, currentIndex2);
});

document.getElementById('prevBtn2').addEventListener('click', () => {
    currentIndex2 = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
    updateSlidePosition(slides2, currentIndex2);
});

function updateSlidePosition(slides, currentIndex) {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}
