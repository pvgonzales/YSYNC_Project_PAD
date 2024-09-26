document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var emailInput = document.getElementById("email").value;
    var errorMessage = document.getElementById("errorMessage");

    var upEmailPattern = /^[a-zA-Z0-9._%+-]+@up\.edu\.ph$/;

    if (!upEmailPattern.test(emailInput)) {
        errorMessage.textContent = "Please enter a valid UPmail address (@up.edu.ph)";
    } else {
        errorMessage.textContent = "";
        window.location.href = "../../members-view/pages/dashboard/dashboard-announcements-trainee.html";
    }
});