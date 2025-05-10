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
        window.location.href = './home.html';
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        window.location.href = './home.html';
    });
});