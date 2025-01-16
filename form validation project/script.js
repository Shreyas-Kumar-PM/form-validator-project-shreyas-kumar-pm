
const nameInput=document.querySelector(".name-input");//event handler for name input
nameInput.addEventListener('input',checkNameInput);

const emailInput=document.querySelector(".email-input");//event handler for email input
emailInput.addEventListener('input',checkEmailInput);

const numberInput=document.querySelector(".number-input");//event handler for number input
numberInput.addEventListener('input',checkNumberInput);

const newPasswordInput=document.querySelector(".newpassword-input");//event handler for new password input
newPasswordInput.addEventListener("input",checkNewpasswordInput);

const confirmPasswordInput=document.querySelector(".confirm-input");//event handler for confirm password input
confirmPasswordInput.addEventListener("input",checkConfirmInput);

const submitButton=document.querySelector(".submit-button");//event handler for the submit button
submitButton.addEventListener("submit",checkValidity);

//function to handle errors occuring in confirm password fields

function checkConfirmInput()
{
    const password1= document.querySelector(".newpassword-input").value; //getting new password field value.
    const password2= document.querySelector(".confirm-input").value; //getting confirm password field value.
//checking if the passwords are matching.
    if(password1===password2){
        document.querySelector(".confirmpassword-error").textContent=""
        document.querySelector(".submit-button").disabled=false;    //submit button enabled if equal.
    }
    else{
        document.querySelector(".confirmpassword-error").textContent="*passwords do not match";
        document.querySelector(".submit-button").disabled=true; //submit button disabled.
    }
}

//function to handle errors occuring in new password fields.
function checkNewpasswordInput()
{
    const input1=document.querySelector(".newpassword-input").value;//getting values entered in new password field
    const name=document.querySelector(".name-input").value;//getting value entered in name field
    const length=input1.length;//getting length of the password field
    if(length<8){//checking if length less than 8
        document.querySelector(".newpassword-error").textContent="*Password should be atleast 8 characters long.";//error message for password field
        document.querySelector(".submit-button").disabled=true;//submit button disabled
    }
    else if(input1===name){//checking if password is equal to name entered
        document.querySelector(".newpassword-error").textContent="*Password should not be same as your name.";
        document.querySelector(".submit-button").disabled=true;//submit button disabled
    }
    else if(input1==="password"){//checking if password entered is password
        document.querySelector(".newpassword-error").textContent="*Password should be strong.";
        document.querySelector(".submit-button").disabled=true;//submit button disabled
    }
    else{
        document.querySelector(".newpassword-error").textContent="";
        document.querySelector(".submit-button").disabled=false;//submit button enabled
    }
}


//function to validate number phone entered
function checkNumberInput()
{
    const num=document.querySelector(".number-input").value;//getting value entered in the number field
    if(num==1234567890 || num<1000000000 || num>9999999999){//validating conditions for number input
        document.querySelector(".number-error").textContent="*Enter a valid 10 digit number.";
        document.querySelector(".submit-button").disabled=true;//submit button disabled
    }
    else{
        document.querySelector(".number-error").textContent="";
        document.querySelector(".submit-button").disabled=false;//submit button enabled
    }
}

//function to validate name entered
function checkNameInput()
{
    const name=document.querySelector(".name-input").value;//getting value entered in name field
    let length=name.length;//getting length of name entered
    if(length<5){//checking if name is less than 5 characters or not
        document.querySelector(".name-error").textContent="*Name should be atleast 5 characters long.";
        document.querySelector(".submit-button").disabled=true;//submit button disabled
    }
    else{
        document.querySelector(".name-error").textContent="";
        document.querySelector(".submit-button").disabled=false;//submit button enabled
    }
}

//function to validate conditions for email entered
function checkEmailInput()
{
    const email=document.querySelector(".email-input").value;//getting value entered in the email field

    if(email.includes('@')){//cheking if the mail has @ character
        document.querySelector(".email-error").textContent="";
        document.querySelector(".submit-button").disabled=false;//submit button enabled
    }
    else{
        document.querySelector(".email-error").textContent="*Enter the correct email address.";//error field for email content
        document.querySelector(".submit-button").disabled=true;//submit button disabled
    }
}


//function to prevent default submission of the submit button.
function checkValidity(event)
{
    event.preventDefault();
}