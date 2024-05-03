document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); 
        setTimeout(function() {
            document.getElementById('successMessage').classList.remove('d-none'); 
            document.getElementById('contactForm').reset();
            positionSuccessMessage(); 
            setTimeout(function() {
                document.getElementById('successMessage').classList.add('d-none'); 
            }, 5000); 
        }, 1000); 
    });
});

function positionSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.style.position = 'fixed';
    successMessage.style.top = '175px'; 
    successMessage.style.left = '50%';
    successMessage.style.transform = 'translateX(-50%)';
}
