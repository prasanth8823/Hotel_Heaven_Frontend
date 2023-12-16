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

function inputvalidation() {
    //calling all validating function.
    emailValidation();
}