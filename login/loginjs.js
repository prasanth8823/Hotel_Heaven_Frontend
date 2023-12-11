//function for email Id dobValidation.
function emailValidation() {

    // get email Id value form html.
    let email = document.querySelector("#emailId").value;

    //set Regular expression for emaiId validation.
    let emailRegex = /^[a-zA-Z0-9.]+@gmail\.com$/;

    //validating the email id.
    if (emailRegex.test(email) == false) {
        console.log("invalid email");
    }
}

//function for password validation.
function passwordValidation() {

    //get password and confrim password for html.
    let password = document.querySelector("#password").value;
    let ConfrimPassword = document.querySelector("#Cpassword").value;

    //set Regular expression for password. 
    let lowercaseRegex = /[a-z]/;
    let uppercaseRegex = /[A-Z]/;
    let numaricalRegex = /[0-9]/;
    let specialCharRegex = /[\W_]/;

    //validating password.
    if (!password.match(lowercaseRegex) || !password.match(uppercaseRegex) || !password.match(numaricalRegex) || !password.match(specialCharRegex) || password.length < 8) {
        console.log("invalid password");
    }

    //checking the password match confrimPassword.
    if (password !== (ConfrimPassword)) {
        console.log("password mismatch");
    }
}

//function contains all the validating function.
//it call all the function when user click on the submit butten in html.
function inputvalidation() {
   
    //calling all validating function.
    emailValidation();
    passwordValidation();
}