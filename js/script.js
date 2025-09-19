document.addEventListener('DOMContentLoaded', function() {
    // The button we press to open/close the mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    // All the links inside the navigation menu
    const navLinks = document.querySelectorAll('.nav-link');
    //<a> tags(the actual clickable words) inside those links
    const navItems = document.querySelectorAll('.nav-link a');
    // All the big sections on the page -Home, About, Contact etc
    const sections = document.querySelectorAll('section');

    //When we click the menu button, open/close the menu
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // If 'active' is off, turn it on, If it's on, turn it off
            document.body.classList.toggle('active');
            
            // NEW: Toggle nav-links visibility for mobile
            document.querySelector('.nav-links').classList.toggle('active'); 
        });
    }

    // Watch when we scroll the page
    window.addEventListener('scroll', function() {
        let current = '';       // keep tracking of which section we are looking at

        sections.forEach(section => {
            const sectionTop = section.offsetTop;  // Where this section starts
            const sectionHeight = section.clientHeight; // How tall this section is

            // If we have scrolled past one third of the section, set it as 'current'
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');   // Remember its (id)
            }
        });

        // Turn OFF all link highlights first
        navItems.forEach(item => {
            item.classList.remove('active');
            // Then turn ON the link that matches the current section(where we are in the page)
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // If someone clicks a link in the menu
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Close the mobile menu after choosing a link
            document.body.classList.remove('active');

            // NEW: Also close nav-links menu
            document.querySelector('.nav-links').classList.remove('active'); 
        });
    });
});

// Form submission and animation
// Wait until the page is ready
document.addEventListener('DOMContentLoaded', function() {
    // The 2 forms - Conatct form and Newsletter form
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.getElementById('newsletter-form');

    // If the contact form exists on this page
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from sending itself right away

            // Grab all the input boxes
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const subjectInput = document.getElementById('subject');

            let isValid = true; // Assume everything is fine first

            // Ckeck if the name box is empty
            if (nameInput.value.trim() === '') {
                isValid = false;
                alert('Please enter your name.');
                nameInput.focus();      // Put the cusor in the name box
                return;
            }

            // Check if the mail box is empty or looks real (has '@')
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                isValid = false;
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }
            // Check subject box
            if (subjectInput.value.trim() === '') {
                isValid = false;
                alert('Please enter a subject.');
                subjectInput.focus();
                return;
            }
            // Check message box
            if (messageInput.value.trim() === '') {
                isValid = false;
                alert('Please enter your message.');
                messageInput.focus();
                return;
            }

            // If everything is ok, show a thank you message and clean the form
            if (isValid) {
                // alert(`Thank you, ${nameInput.value} for your message! I will get to you soon.`); 
                // contactForm.reset(); // Clear all the boxes
                window.location.href = 'thank-you.html'; // Redirect to thank you page
            }
        });

    }

    // Newsletter Form
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the form from sending itself right away (auto-send)
            const emailInput = this.querySelector('input[type="email"]');   // Get the email box
            // Check if the email box is empty or looks real (has '@')
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                alert('Please enter a valid email address.');
                emailInput.focus();
                return;
            }

            // If everything is ok, show a thank you message and clean the form
            alert(`Thank you for subscribing with ${emailInput.value}!`);
            newsletterForm.reset(); // Clear all the boxes
        });
    }

    // Fade-in animation for sections when they come into view
    const faders = document.querySelectorAll('.fade-in');

    function checkFade() {
        faders.forEach(fader => {
            const elementTop = fader.getBoundingClientRect().top;
            const elementBottom = fader.getBoundingClientRect().bottom;

            // If the element is visible in the window, make it appear
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                fader.style.opacity = 1;
                fader.style.transform = 'translateY(0)';
            }
        });
    }

    // check right now when page loads
    checkFade();

    // Also check every time we scroll
    window.addEventListener('scroll', checkFade);

    // Progress bar animation
    const progressBars = document.querySelectorAll('.skill-progress-fill');
    progressBars.forEach(bar => {
        const width = bar.style.width;  // Get the width set in HTML (e.g., '80%') and save it
        bar.style.width = '0';  // Start from 0 width
        setTimeout(() => {
            bar.style.width = width;    // Animate to the saved width
        }, 500); // Start the animation after half a second
    });
});








