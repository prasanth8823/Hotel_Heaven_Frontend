//function for namevalidation.
function nameValidation() {

    //get name value from html.
    let firstName = document.querySelector("#fName").value;
    let secondName = document.querySelector("#sName").value;

    //set Regular expression for name validation.
    let nameRegex = /^[a-zA-Z.\s]+$/;

    //validating firstName.
    if (nameRegex.test(firstName) == false) {
        console.log("invalid name");
    }

    //validating secondName.
    if (nameRegex.test(secondName) == false) {
        console.log("invalid name");
    }
}

//function for date of birth validation.
function dobValidation() {
    
    //get dob value from html.
    let dateOfBirth = document.querySelector("#dob").value;

    //set Regular expression for dob validation.
    let dobRegex = /^\d{2}-\d{2}-\d{4}$/;
    
    //change the dateOfBirth to standerd form and seprate date, month, year.
    let date = [];
    date = dateOfBirth.split('-').reverse();
    
    //joining the reversed date for checking the currentdate matching the inputdate.
    let inputdate = date.join("-");
    
    //seprating current date.
    let cdate = new Date().getDate();
    let cmonth = new Date().getMonth();
    let cYear = new Date().getFullYear();
    
    //reversing and joining currentdate for checking the inputdate matching the currentdate.
    let currentdate = cYear + "-" + String(Number(cmonth + 1)) + "-" + cdate;

    // Check if year is a leap year
    let isLeap = (Number(date[0]) % 4 == 0 && Number(date[0]) % 100 != 0) || (Number(date[0]) % 400 == 0);

    //validating the inputdate and formate of the inputdate.
    if (pattern.test(dateOfBirth) == false || inputdate.match(currentdate) || Number(date[2]) <= 0 || Number(date[2]) > 31 || Number(date[1]) <= 0 || Number(date[1]) > 12 || Number(date[0]) > cYear || Number(date[0]) < cYear - 120 || (Number(date[1]) == 2 && Number(date[2]) > (isLeap ? 29 : 28)) || ((Number(date[1]) == 4 || Number(date[1]) == 6 || Number(date[1]) == 9 || Number(date[1]) == 11) && Number(date[2]) > 30)) {
        console.log("invalid date format");
    }
}

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

//function for phone number validation.
function phoneNumberValidation() {
    
    //get phone number form html.
    let phoneNumber = document.querySelector("#phone").value;
    
    //set Regular expression for phone number.
    let phoneNumberRegex = /^[0-9]+$/;

    //validating the password.
    if (phoneNumberRegex.test(phoneNumber) == false || phoneNumber.length > 10) {
        console.log("invalid phoneNumber");
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
    nameValidation();
    dobValidation();
    emailValidation();
    phoneNumberValidation();
    passwordValidation();
}

