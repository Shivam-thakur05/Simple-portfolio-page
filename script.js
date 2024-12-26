// script.js
document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.getElementById('nav-links');
    navbar.classList.toggle('show');
});
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out!');
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
