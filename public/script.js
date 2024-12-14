document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
event.preventDefault(); //prevent form submittion

const firstName = document.getElementById('firstname').value.trim();
const email = document.getElementById('email').value.trim();
const lastName = document.getElementById('lastname').value.trim();
email.toLowerCase();
// validation for empty input
if(!firstName){
    console.log('Please enter your firstname');
    return;
}

if(!lastName) {
    console.log('Please enter your lastname');
    return;
}

if (!validateEmail(email)) {
    console.log('Please enter a valid email')
    return;
 }

 // submit form if all input are validated
 console.log('Form successfully submitted!');
 form.submit();
 console.log(firstName && lastName && email);   
});

function validateEmail(email) {
    const validemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validemail.test((email).toLowerCase());
}

})