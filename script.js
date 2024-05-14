const cardContainer = document.querySelector(".container")
const cardSuccess = document.querySelector(".container-success") 
const btnSubmit = document.querySelector(".btn__submit")
const email = document.querySelector(".email__span")
const errorMessage = document.querySelector(".paragraph__error_email")
const inputForm = document.querySelector(".input__item")



btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    if (inputForm.value === "" || !validarEmail(inputForm.value)) {
        inputForm.classList.add("error-form");
        errorMessage.classList.remove("hidden")
        
       
    } else {
        cardSuccess.classList.remove("hidden");
        cardContainer.classList.add("hidden");
        
        email.innerHTML = inputForm.value
    }
});

/* Função Validar Email */

function validarEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}