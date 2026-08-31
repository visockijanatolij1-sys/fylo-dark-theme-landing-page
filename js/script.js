const form = document.querySelector(".form-access");
const input = document.querySelector(".form-access_input");
const errorError = document.querySelector(".form-access_error");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(){
    errorError.style.display = "block";
}

function hideError(){
    errorError.style.display = "none";
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
        email.value = "";
    }
})