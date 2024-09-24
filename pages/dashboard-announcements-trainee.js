const announcementButton = document.getElementById('announcementButton');
const postButton = document.getElementById('postButton');
const cancelButton = document.getElementById('cancelButton');
const announcementSection = document.getElementById('makeAnnoucementSection');

// click events
announcementButton.addEventListener('click', () => {
    // if announcement is visible
    if (announcementSection.style.display === 'none' || announcementSection.style.display === '') {
        announcementSection.style.display = 'flex'; // show 
    } else {
        announcementSection.style.display = 'none'; // hide 
    }
});
postButton.addEventListener('click', () => {
    // if announcement is visible
    if (announcementSection.style.display === 'none') {
        announcementSection.style.display = 'flex'; // show
    } else {
        announcementSection.style.display = 'none'; // hide
    }
});
cancelButton.addEventListener('click', () => {
    // if announcement is visible
    if (announcementSection.style.display === 'none') {
        announcementSection.style.display = 'flex'; // show
    } else {
        announcementSection.style.display = 'none'; // hide
    }
});