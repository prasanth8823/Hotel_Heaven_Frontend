//function for namevalidation.
function nameValidation() {

    //get name value from html.
    let firstName = document.querySelector("#fName").value;
    let secondName = document.querySelector("#sName").value;

    //set Regular expression for name validation.
    let numaricalRegex = /[0-9]/;
    let specialCharRegex = /[\W_]/;
    if(firstName==""){
        alert("pleace enter your first name")
        return false;
    }
    if(secondName == ""){
        alert("pleace enter your last nam")
        return false;
    }

    //validating firstName.
    if (firstName.match(numaricalRegex)) {
        alert("name should not have numbers")
        return false;
    }
    if (firstName.match(specialCharRegex)) {
        alert("neme should not have special character")
        return false;
    }

    //validating secondName.
    if (secondName.match(numaricalRegex)) {
        alert("name should not have numbers")
        return false;
    }
    if (secondName.match(specialCharRegex)) {
        alert("neme should not have special character")
        return false;
    }
    else {
        return true;
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
    if(dateOfBirth==""){
        alert("pleace enter date of birth")
        return false;
    }
    //validating the inputdate and formate of the inputdate.
    if (dobRegex.test(dateOfBirth) == false) {
        alert("invalid date format");
        return false
    }
    if (inputdate.match(currentdate)) {
        alert("you are enterd todays date");
        return false
    }
    if (Number(date[2]) <= 0 || Number(date[2]) > 31) {
        alert("incorrect date");
        return false
    }
    if (Number(date[1]) <= 0 || Number(date[1]) > 12) {
        alert("incorrect month");
        return false
    }
    if (Number(date[0]) > cYear || Number(date[0]) < cYear - 120) {
        alert("incorrect years");
        return false
    }
    if ((Number(date[1]) == 2 && Number(date[2]) > (isLeap ? 29 : 28))) {
        alert("we only have 28 to 29 days in february");
        return false
    }
    if (((Number(date[1]) == 4 || Number(date[1]) == 6 || Number(date[1]) == 9 || Number(date[1]) == 11) && Number(date[2]) > 30)) {
        alert("we only have 30 day in you mentioned month");
        return false
    }
    else {
        return true;
    }

}

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
//function for phone number validation.
function phoneNumberValidation() {

    //get phone number form html.
    let phoneNumber = document.querySelector("#phone").value;

    //set Regular expression for phone number.
    let phoneNumberRegex = /^[0-9]+$/;
     if(phoneNumber==""){
        alert("pleace enter phone number")
        return false;
     }
    //validating the password.
    if (phoneNumberRegex.test(phoneNumber) == false) {
        alert("invalid phoneNumber");
        return false;
    }
    if (phoneNumber.length > 10) {
        alert("phone number having more than 10 numbers")
        return false;
    }
    else {
        return true;
    }
}

//function for password validation.
function passwordValidation() {

    //get password and confrim password for html.
    let password = document.querySelector("#password").value;

    //set Regular expression for password. 
    let lowercaseRegex = /[a-z]/;
    let uppercaseRegex = /[A-Z]/;
    let numaricalRegex = /[0-9]/;
    let specialCharRegex = /[\W_]/;

    //validating password.
    if (password == "") {
        alert("pleace enter password")
        return false;
    }
    if (password.length < 8) {
        alert("password should have eight or more than eight charecter")
        return false;
    }
    if (!password.match(lowercaseRegex)) {
        alert("password should have lowercase");
        return false;
    }
    if (!password.match(uppercaseRegex)) {
        alert("password should have uppercase");
        return false;
    }
    if (!password.match(numaricalRegex)) {
        alert("password should have numbers");
        return false;
    }
    if (!password.match(specialCharRegex)) {
        alert("password should have spacial charecter");
        return false;
    }

    //checking the password match confrimPassword.
    if (password !== (ConfrimPassword)) {
        alert("password mismatch");
    }
    else {
        return true;
    }
}

//function contains all the validating function.
//it call all the function when user click on the submit butten in html.
function inputvalidation() {

    //calling all validating function.
    let result1 = nameValidation();
    let result2 = dobValidation();
    let result3 = emailValidation();
    let result4 = phoneNumberValidation();
    let result5 = passwordValidation();
    if((result1 && result2 && result3 && result4 && result5) == true ){
        return true;
    }
    else{
        return false;
    }
}

