document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-card form');
    const signupForm = document.querySelector('.signup-card form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

       
        if (email && password) {
            
            localStorage.setItem('loggedInUser', email);
            localStorage.setItem('isLoggedIn', 'true');

            
            window.location.href = 'index.html';
        }
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email-signup').value;
        const password = document.getElementById('password-signup').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (fullName && email && password) {
            
            localStorage.setItem('loggedInUser', email);
            localStorage.setItem('userName', fullName);
            localStorage.setItem('isLoggedIn', 'true');

            
            window.location.href = 'index.html';
        }
    });
});