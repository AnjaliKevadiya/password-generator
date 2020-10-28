// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var length = prompt("How many characters would you like your password to contain?");
    var isSpecial, isNumeric, isLowercase, isUppercase;

    if(length === null) {
      return;
    } else if (isNaN(length)) {
      alert("It is not a number. Please enter any number.");
    }
    else if (length < 8 || length > 128) {
      alert("Password length should be at least 8 characters and no more than 128 characters.");
    } 

    var special = confirm("Click ok to confirm including special characters");

    if (special) {
      isSpecial = true;
    } else {
      isSpecial = false;
    }

    var numeric = confirm("Click ok to confirm including numeric characters");

    if (numeric) {
      isNumeric = true;
    } else {
      isNumeric = false;
    }

    var lowercase = confirm("Click ok to confirm including lowercase characters");

    if (lowercase) {
      isLowercase = true;
    } else {
      isLowercase = false;
    }

    var uppercase = confirm("Click ok to confirm including uppercase characters");

    if (uppercase) {
      isUppercase = true;
    } else {
      isUppercase = false;
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
