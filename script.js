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
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.textContent;

            btn.textContent = 'TRANSMITTING...';
            btn.disabled = true;
            btn.style.background = '#333';

            setTimeout(() => {
                btn.textContent = 'SENT';
                btn.style.background = '#00ff00'; // Success Green
                btn.style.color = '#000';

                document.querySelector('.success-msg').style.display = 'block';
                contactForm.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.background = ''; // Reset to default accent
                    btn.style.color = '';
                    document.querySelector('.success-msg').style.display = 'none';
                }, 3000);
            }, 1500);
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
