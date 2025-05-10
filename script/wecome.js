document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.register');
    const loginToggle = document.querySelector('.toggle a[href="#login"]');
    const registerToggle = document.querySelector('.toggle a[href="#register"]');

    loginToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('login').style.display = 'block';
        document.getElementById('register').style.display = 'none';
    });

    registerToggle.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = loginForm.querySelector('input[name="username"]').value.trim();
        const password = loginForm.querySelector('input[name="password"]').value.trim();
        let isValid = true;

        if (!username) {
            displayErrorMessage(loginForm, 'Username is required');
            isValid = false;
        }
        if (!password) {
            displayErrorMessage(loginForm, 'Password is required');
            isValid = false;
        }

        if (isValid) {
            console.log('Login form submitted:', username, password);
            alert(`Logging in with username: ${username} and password: ${password}.  Add real login functionality.`);
            window.location.href = './home.html';
        }
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = registerForm.querySelector('input[name="username"]').value.trim();
        const email = registerForm.querySelector('input[name="email"]').value.trim();
        const password = registerForm.querySelector('input[name="password"]').value.trim();
        const age = parseInt(registerForm.querySelector('input[name="age"]').value.trim(), 10);
        let isValid = true;

        if (!email) {
            displayErrorMessage(registerForm, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            displayErrorMessage(registerForm, 'Invalid email format');
            isValid = false;
        }

        if (isValid) {
            console.log('Register form submitted:', username, email, password, age);
            alert(`Registering with username: ${username}, email: ${email}, password: ${password}, and age: ${age}.  Add real registration functionality.`);
            window.location.href = './home.html';
        }
    });

    function displayErrorMessage(form, message) {
        let errorElement = form.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('p');
            errorElement.classList.add('error-message');
            form.insertBefore(errorElement, form.querySelector('button[type="submit"]'));
        }
        errorElement.textContent = message;
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
});