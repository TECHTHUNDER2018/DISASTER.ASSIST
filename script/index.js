document.addEventListener('DOMContentLoaded', () => {
    
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userEmail = localStorage.getItem('loggedInUser');
    
    
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (isLoggedIn === 'true' && userEmail) {
                
                document.getElementById('services').scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                
                window.location.href = 'login.html';
            }
        });
    }
});