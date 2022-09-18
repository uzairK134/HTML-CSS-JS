// 

const form = document.getElementById('form');
const error = document.getElementById('error');
const input = document.getElementById('input');


form.addEventListener('submit', e => {

    e.preventDefault();

    const email = form['email'].value;

    if (email === '' || !isValid(email)){
        error.innerText = "Please provide a valid email address";
        input.style.border = '1.25px solid red'
    } else{
        error.innerText = "";
        input.style.border = "1px solid rgba(0, 0, 0, 0.25)"
    }
    

})

function isValid(email){
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}

