const announcementButton = document.getElementById('announcementButton');
const postButton = document.getElementById('postButton');
const cancelButton = document.getElementById('cancelButton');
const announcementSection = document.getElementById('makeAnnoucementSection');

// click events
announcementButton.addEventListener('click', () => {
    // if announcement is visible
    announcementSection.style.display = 'flex'; // show 

});
postButton.addEventListener('click', () => {
    // if announcement is visible
    clearAnnouncementInputs();
    announcementSection.style.display = 'none'; // hide
});
cancelButton.addEventListener('click', () => {
    clearAnnouncementInputs();
    announcementSection.style.display = 'none'; // hide
});

function clearAnnouncementInputs() {
    const inputs = announcementSection.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');
}
