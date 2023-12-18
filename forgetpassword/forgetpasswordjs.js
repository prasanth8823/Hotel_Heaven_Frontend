//function for email Id dobValidation.
function emailValidation() {

    // get email Id value form html.
    let email = document.querySelector("#emailId").value;

    //set Regular expression for emaiId validation.
    let emailRegex = /^[a-zA-Z0-9.]+@gmail\.com$/;

    //validating the email id.
    if (email == "") {
        alert("pleace enter email id");
        return false;
    }
    if (emailRegex.test(email) == false) {
        alert("invalid email id");
        return false;
    }
    else {
        return true;
    }
}

function inputvalidation() {
    //calling all validating function.
    let result1 = emailValidation();
    if(result1 == true){
        return true;
    }
    else{
        false
    }
}