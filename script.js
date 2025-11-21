document.addEventListener('DOMContentLoaded', () => {
    // Attach basic client-side handlers for onboarding forms and links

    // Smooth scroll for local anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Sign-in form handling (if present on the page)
    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Minimal demo validation
            const email = signInForm.querySelector('input[name="email"]').value;
            if (!email || !email.includes('@')) {
                alert('Please enter a valid email.');
                return;
            }
            alert('Signed in (demo). Redirecting to dashboard...');
            signInForm.reset();
            // In a real app you'd authenticate and redirect.
        });
    }

    // Sign-up form handling
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = signUpForm.querySelector('input[name="email"]').value;
            const password = signUpForm.querySelector('input[name="password"]').value;
            if (!email || !email.includes('@')) { alert('Please enter a valid email.'); return; }
            if (!password || password.length < 6) { alert('Please choose a password at least 6 characters long.'); return; }
            alert('Account created (demo). Welcome!');
            signUpForm.reset();
            window.location.href = 'index.html';
        });
    }

    // Buttons that should lead to pages (some anchors are already links in HTML). No heavy JS required.
});