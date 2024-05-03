document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
        // Simulate form submission delay (for demonstration purposes)
        setTimeout(function() {
            document.getElementById('successMessage').classList.remove('d-none'); // Show success message
            document.getElementById('contactForm').reset(); // Reset the form
            positionSuccessMessage(); // Position the success message
            // Hide the success message after 5 seconds
            setTimeout(function() {
                document.getElementById('successMessage').classList.add('d-none'); // Hide success message
            }, 5000); // 5 seconds
        }, 1000); // 1 second delay (adjust as needed)
    });
});

function positionSuccessMessage() {
    var successMessage = document.getElementById('successMessage');
    successMessage.style.position = 'fixed';
    successMessage.style.top = '175px'; 
    successMessage.style.left = '50%';
    successMessage.style.transform = 'translateX(-50%)';
}
