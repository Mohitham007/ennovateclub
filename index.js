// Mobile Menu Toggle
function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.classList.toggle('active');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  }
  
// Close menu when clicking outside
window.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.remove('menu-visible'); // Hide menu
        setTimeout(() => {
            menu.style.display = 'none'; // Remove from view after animation
        }, 300); // Match the duration of the transition
        button.classList.remove('active'); // Remove active class from button
    }
});

// Show/Hide Register Button on Scroll
window.addEventListener('scroll', function() {
    var popupButton = document.getElementById('popup-button');
    if (window.scrollY > document.getElementById('home').offsetHeight) {
        popupButton.style.display = 'block';
    } else {
        popupButton.style.display = 'none';
    }
});

// Automatic Slider
let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides .slide').length;

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds

// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 200; 

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 10); 
            } else {
                counter.innerText = target;
            }
        };

        updateCounter();
    });
});

