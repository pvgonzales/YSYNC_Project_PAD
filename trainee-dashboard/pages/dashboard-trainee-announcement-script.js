
// Get all elements with the class 'heart-button'
const heartButtons = document.querySelectorAll('.heart-icon');

// Add event listeners to each button
heartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked button
        button.classList.toggle('active');
    });
});