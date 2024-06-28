const slides = [
    'slide1.jpg',
    'slide2.jpg',
    'slide3.jpg',
    'slide4.png'
];
const taglines = [
    'Impressions tous formats <span>en boutique et en ligne</span>',
    'Qualité professionnelle pour tous vos besoins',
    'Livraison rapide et fiable',
    'Des prix compétitifs pour toutes vos impressions'
];

let numero = 0;
let currentIndex = 0;

function showSlide(index) {
    const slide = document.getElementById('slide');
    const tagline = document.getElementById('tagline');
    
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    
    slide.src = "assets/images/slideshow/" + slides[currentIndex];
    tagline.innerHTML = taglines[currentIndex];
    updateDots();
}

function ChangeSlide(sens) {
    showSlide(currentIndex + sens);
}

function currentSlide(n) {
    showSlide(n - 1);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        }
    });
}

// Ajouter les event listeners pour les flèches et les dots
document.getElementById('precedent').addEventListener('click', () => ChangeSlide(-1));
document.getElementById('suivant').addEventListener('click', () => ChangeSlide(1));
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});

// Initialisation
showSlide(currentIndex);


