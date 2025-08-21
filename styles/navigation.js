const hamburger = document.querySelector('.hamburger');
const navbarLink = document.querySelector('.navbar-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbarLink.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.navbar-link a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navbarLink.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navbarLink.contains(e.target)) {
        hamburger.classList.remove('active');
        navbarLink.classList.remove('active');
    }
});