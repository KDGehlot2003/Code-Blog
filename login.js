function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var eyeOpen = document.getElementById("eyeOpen");
    var eyeClosed = document.getElementById("eyeClosed");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeOpen.style.display = "block";
        eyeClosed.style.display = "none";
    } else {
        passwordInput.type = "password";
        eyeOpen.style.display = "none";
        eyeClosed.style.display = "block";
    }
}

