// JavaScript for Scrolling Animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    const navbar = document.getElementById('navbar');
    const statsSection = document.querySelector('.stats-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, { threshold: 0.1 });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Navbar Animation on Touch
    navbar.addEventListener('click', () => {
        navbar.classList.toggle('rotate');
        statsSection.classList.toggle('animate');
    });

    // Sticky Navbar on Scroll
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            navbar.classList.add('sticky-navbar');
        } else {
            navbar.classList.remove('sticky-navbar');
        }
    };
});

// JavaScript for Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form elements
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Clear previous messages
            formMessage.style.display = 'none';
            formMessage.textContent = '';

            // Validate Name
            if (!name) {
                formMessage.textContent = 'Please enter your name.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            // Validate Email
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!email || !emailPattern.test(email)) {
                formMessage.textContent = 'Please enter a valid email address.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            // Validate Message
            if (!message) {
                formMessage.textContent = 'Please enter your message.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
                return;
            }

            // Success
            formMessage.textContent = 'Form submitted successfully!';
            formMessage.className = 'form-message success';
            formMessage.style.display = 'block';

            // Reset the form
            contactForm.reset();
        });
    }
});

// JavaScript for Toggle Menu Visibility
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show'); // Toggle the 'show' class to display the menu
}

// JavaScript for controlling the popup
window.onload = function() {
    const popup = document.getElementById('popup-modal');
    const closeButton = document.getElementById('close-popup');

    // Show the popup on page load
    popup.style.display = 'block';

    // Close the popup when the close button is clicked
    closeButton.onclick = function() {
        popup.style.display = 'none';
    };
};
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.getElementById('nav-links');
    const navbar = document.getElementById('navbar');

    // Show the menu when hovering over the menu icon
    menuIcon.addEventListener('mouseenter', () => {
        navLinks.classList.add('show');
    });

    // Keep the menu open when hovering over the nav-links
    navLinks.addEventListener('mouseenter', () => {
        navLinks.classList.add('show');
    });

    // Close the menu when clicking outside the navbar or nav-links
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('show');
        }
    });
});
