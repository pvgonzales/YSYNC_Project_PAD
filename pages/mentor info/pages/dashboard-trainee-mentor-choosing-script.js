document.addEventListener('DOMContentLoaded', () => {
    const mentorCards = document.querySelectorAll('.mentor-card');
    const confirmButton = document.getElementById('confirmSelection');
    let selectedMentor = null;

    // Check if a mentor was previously selected (localStorage)
    if (localStorage.getItem('selectedMentor')) {
        selectedMentor = localStorage.getItem('selectedMentor');
        const selectedCard = document.querySelector(`[data-mentor="${selectedMentor}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active-mentor');
            confirmButton.disabled = false;  // Enable the confirm button
        }
    }

    // Event listener for selecting a mentor
    mentorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active state from all cards
            mentorCards.forEach(c => c.classList.remove('active-mentor'));

            // Add active state to the selected card
            card.classList.add('active-mentor');
            selectedMentor = card.dataset.mentor;

            // Store selected mentor in localStorage
            localStorage.setItem('selectedMentor', selectedMentor);

            // Enable the confirm button
            confirmButton.disabled = false;
        });
    });

    // Event listener for confirmation button
    confirmButton.addEventListener('click', () => {
        if (selectedMentor) {
            alert(`You have selected ${selectedMentor} as your mentor.`);
            // You can further add code to submit this data to a server, e.g., using fetch or Axios
            // fetch('/submit-selection', { method: 'POST', body: JSON.stringify({ mentor: selectedMentor }) });
        }
    });
});
