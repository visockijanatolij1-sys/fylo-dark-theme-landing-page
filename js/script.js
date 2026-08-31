const form = document.querySelector(".form-access");
const input = document.querySelector(".form-access_input");
const errorError = document.querySelector(".form-access_error");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError() {
    errorError.style.display = "block";
    input.setAttribute("aria-invalid", "true");
}

function hideError() {
    errorError.style.display = "none";
    input.removeAttribute("aria-invalid");
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email  = input.value.trim();

    if(email === ""){
        showError();
        return;
    }
    else if(!isValidEmail(email)){
        showError();
        return;
    }
    else{
        hideError();
        input.value = "";
    }
})