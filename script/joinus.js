document.addEventListener('DOMContentLoaded', () => {
    const joinForm = document.getElementById('joinForm');
    const successPopup = document.getElementById('successPopup');
    const closeBtn = document.querySelector('.close-btn');

    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        const formData = {
            firstName: document.getElementById('firstName').value,
            secondName: document.getElementById('secondName').value,
            contact: document.getElementById('contact').value,
            motivation: document.getElementById('motivation').value
        };

       
        successPopup.style.display = 'flex';
        
    
        joinForm.reset();
    });

   
    closeBtn.addEventListener('click', () => {
        successPopup.style.display = 'none';
    });

   
    window.addEventListener('click', (e) => {
        if (e.target === successPopup) {
            successPopup.style.display = 'none';
        }
    });
});