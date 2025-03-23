
function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var passwordHelpBlock = document.getElementById("passwordHelpBlock");

    if (password !== confirmPassword) {
        passwordHelpBlock.classList.remove("d-none");
        return false;
    } else {
        passwordHelpBlock.classList.add("d-none");
        // balik sa login page after mag register
        window.location.href = "login.html";
        return false; 
    }
}
