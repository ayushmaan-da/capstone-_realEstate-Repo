let email = document.getElementById('login-mail')
let emailerror = document.getElementById('emailError')

email.addEventListener('input', function(){
    if (email.value.includes("@")){
        emailerror.textContent = "";
    }
    else {
        emailerror.textContent = "Invalid Email"
    }
})