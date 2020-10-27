// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var length = prompt("How many characters would you like your password to contain?");

    if(length === null) {
      return;
    } else if (isNaN(length)) {
      alert("It is not a number. Please enter any number.");
    }
    else if (length < 8 || length > 128) {
      alert("Password length should be at least 8 characters and no more than 128 characters.");
    } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
