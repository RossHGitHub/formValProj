const email = document.getElementById('email');
const emailError = document.getElementById('emailError')
const postcode = document.getElementById('postcode');
const postcodeError = document.getElementById('postcodeError')
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const passwordConfirm = document.getElementById('passwordConfirm');


email.addEventListener('input', (event)=>{

    if (email.validity.valid) {
        emailError.innerHTML='';}

        else {showEmailError()}
})

function showEmailError(){
    if (email.validity.typeMismatch) {
        emailError.innerHTML='Please Enter a valid email format'
    }

    else if (email.validity.valueMissing) {
        emailError.innerHTML='Please enter an email address.'
    }

    else {return}
}



postcode.addEventListener('input', (event)=>{
    const regEx = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s*\d[A-Z]{2}$/i;

    if (regEx.test(postcode.value)){
        postcodeError.innerHTML='';
        return}

        else {postcodeError.innerHTML='Please enter a valid UK postcode';
        postcode.validity=false;
        }
})





password.addEventListener('input', (event)=>{
    
        passwordErr()

})

function passwordErr(){
   const passReg = /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passReg.test(password.value)){
        passwordError.innerHTML='';
        return
    } else {passwordError.innerHTML='Must include one special character'
password.validity=false};

    if (password.validity.valueMissing){
        passwordError.innerHTML='Must include one special character'
    }

    else if (password.validity.tooShort){
        passwordError.innerHTML='Password is too short.'
    }

  
}