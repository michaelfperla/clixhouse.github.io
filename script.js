document.addEventListener('DOMContentLoaded', () => {

    // --- Menu Overlay Logic ---
    const navToggle = document.querySelector('.nav-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-links a');

    if (navToggle && menuOverlay) {
        navToggle.addEventListener('click', () => {
            menuOverlay.classList.toggle('active');
            navToggle.textContent = menuOverlay.classList.contains('active') ? 'CLOSE' : 'MENU';

            // Invert colors when menu is open for contrast
            if (menuOverlay.classList.contains('active')) {
                navToggle.style.background = '#fff';
                navToggle.style.color = '#000';
            } else {
                navToggle.style.background = 'transparent';
                navToggle.style.color = 'inherit';
            }
        });
    }

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuOverlay.classList.remove('active');
            navToggle.textContent = 'MENU';
            navToggle.style.background = 'transparent';
            navToggle.style.color = 'inherit';
        });
    });

    // --- Form Validation (Brutalist Style) ---
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            const successMsg = document.querySelector('.success-msg');

            btn.textContent = 'TRANSMITTING...';
            btn.disabled = true;
            btn.style.background = '#333';

            try {
                const formData = new FormData(contactForm);
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.textContent = 'SENT';
                    btn.style.background = '#00ff00'; // Success Green
                    btn.style.color = '#000';
                    successMsg.style.display = 'block';
                    contactForm.reset();

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.background = ''; // Reset to default accent
                        btn.style.color = '';
                        successMsg.style.display = 'none';
                    }, 5000);
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Error:', error);
                btn.textContent = 'ERROR';
                btn.style.background = 'red';
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                }, 3000);
            }
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
