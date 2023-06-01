const error_message = document.querySelector('.error_message');
const btn = document.querySelector('.btn');
const supreme = document.querySelector('.supreme');
const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const supreme1 = document.querySelector('.supreme1');

btn.addEventListener("click",fnc);

function fnc(){
    const email_input = document.querySelector('.email_input');
    const email = email_input.value;;
    var regx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var isValid = regx.test(email);
    if(!isValid){
        error_message.innerHTML = 'Valid email required'
        email_input.style.color = 'hsl(4, 100%, 67%)';
        email_input.style.borderColor = 'hsl(4, 100%, 67%)';
    }
    else{
        supreme.style.display = 'none';
        supreme1.style.display = 'block';
    }
}
