        // Mobile Menu Toggle
        document.getElementById('menu-button').addEventListener('click', function() {
            var menu = document.getElementById('mobile-menu');
            menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
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
        // Toggle mobile menu
document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
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