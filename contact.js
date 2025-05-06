const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        event.preventDefault();
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

function isValidEmail(email) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
}
