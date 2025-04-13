
document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelector('.download-checklist').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Download Checklist functionality not implemented yet.');
    });
    document.querySelector('.feedback button').addEventListener('click', function() {
        alert('Submit Feedback functionality not implemented yet.');
    });
    document.querySelectorAll('.quick-links a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(link.textContent + ' functionality not implemented yet.');
        });
    });
    document.querySelector('.emergency-contacts p').addEventListener('click', function() {
        alert('Emergency contact functionality not implemented yet.');
    });
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });
    });
});




