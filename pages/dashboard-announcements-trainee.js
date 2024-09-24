const announcementButton = document.getElementById('announcementButton');
const postButton = document.getElementById('postButton');
const cancelButton = document.getElementById('cancelButton');
const announcementSection = document.getElementById('makeAnnoucementSection');

// Add click event to the button
announcementButton.addEventListener('click', () => {
    // Check if the announcement section is currently visible
    if (announcementSection.style.display === 'none' || announcementSection.style.display === '') {
        // If hidden, show it
        announcementSection.style.display = 'flex';
    } else {
        // If visible, hide it
        announcementSection.style.display = 'none';
    }
});
postButton.addEventListener('click', () => {
    // Check if the announcement section is currently visible
    if (announcementSection.style.display === 'none') {
        // If hidden, show it
        announcementSection.style.display = 'flex';
    } else {
        // If visible, hide it
        announcementSection.style.display = 'none';
    }
});
cancelButton.addEventListener('click', () => {
    // Check if the announcement section is currently visible
    if (announcementSection.style.display === 'none') {
        // If hidden, show it
        announcementSection.style.display = 'flex';
    } else {
        // If visible, hide it
        announcementSection.style.display = 'none';
    }
});