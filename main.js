const email = document.getElementById('email');
const emailError = document.getElementById('emailError')
const postcode = document.getElementById('postcode');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');


email.addEventListener('input', ()=>{
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address format.');
    }

    else if (email.validity.valueMissing) {
        emailError.innerHTML='Please enter a Valid email address'

    }
})