const form = document.getElementById('form');

const fnError = document.getElementById('fnameError');
const lnError = document.getElementById('lnameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

const input = document.getElementsByClassName('input');
const icon = document.getElementsByClassName('icon');

const fnameIn = document.getElementById('fname');
const lnameIn = document.getElementById('lname');
const emailIn = document.getElementById('email');
const passwordIn = document.getElementById('password');



form.addEventListener('submit', e => {
    

    const fname = form['fname'].value;
    const lname = form['lname'].value;
    const email = form['email'].value;
    const password = form['password'].value;


    if (fname === ''){
        displayError(fnError, 'First Name cannot be empty', fnameIn);
        
    } else {
        removeError(fnError, fnameIn);
    }

    if (lname === ''){
        displayError(lnError, 'Last Name cannot be empty', lnameIn);
    } else {
        removeError(lnError, lnameIn);
    } 

    if (email === '' || !(isValid(email))){
        if(email === ''){
            displayError(emailError, 'Email cannot be empty', emailIn);
        }
        else if (!(isValid(email))) {
            displayError(emailError, 'Looks like this is not an email', emailIn);
        }
    } else {
        removeError(emailError, emailIn);
    }

    if (password === ''){

        displayError(passError, 'Password cannot be empty', passwordIn);
    } else {
        removeError(passError, passwordIn);
    }

    
    e.preventDefault();
});

function displayError(inp, msg, idname){
    inp.innerText = msg;    
    idname.style.border = "2px solid hsla(0, 100%, 74%, 0.75)";
    idname.style.background = "url('images/icon-error.svg') no-repeat";
    idname.style.backgroundPosition = "95% 50%";
}

function removeError(inp, idname){
    inp.innerText = '';
    idname.style.border = "1px solid rgba(0, 0, 0, 0.15)";
    idname.style.background = "none";

}

function isValid(email){
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

