        // Mobile Menu Toggle
function toggleMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.classList.toggle('active');
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  }
  
        // Toggle mobile menu
document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});
// Mobile Menu Toggle
document.getElementById('menu-button').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    const button = this;

    // Toggle mobile menu visibility
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'flex' : 'none';

    // Add or remove the 'active' class to the button
    button.classList.toggle('active');
});
// Close menu when clicking outside
window.addEventListener('click', function(event) {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-button');

    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none'; // Hide menu
        button.classList.remove('active'); // Remove active class from button
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
        //flip book */
        // Add event listeners to the checkboxes
document.querySelectorAll('.flip-book input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        // Toggle the flip effect
        checkbox.nextElementSibling.classList.toggle('flipped');
    });
});
