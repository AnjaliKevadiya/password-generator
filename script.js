// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var length = prompt("How many characters would you like your password to contain?");
    var isSpecial, isNumeric, isLowercase, isUppercase;
    var specialSet = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{}|~";
    var numericSet = "0123456789";
    var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var characters = "";
    var password = "";

    if(length === null) {
      return;
    } else if (isNaN(length)) {
      alert("It is not a number. Please enter any number.");
      return generatePassword();
    }
    else if (length < 8 || length > 128) {
      alert("Password length should be at least 8 characters and no more than 128 characters.");
      return generatePassword();
    } 

    var special = confirm("Click ok to confirm including special characters");

    if (special) {
      isSpecial = true;
      characters += specialSet;
    } else {
      isSpecial = false;
    }

    var numeric = confirm("Click ok to confirm including numeric characters");

    if (numeric) {
      isNumeric = true;
      characters += numericSet;
    } else {
      isNumeric = false;
    }

    var lowercase = confirm("Click ok to confirm including lowercase characters");

    if (lowercase) {
      isLowercase = true;
      characters += lowercaseSet;
    } else {
      isLowercase = false;
    }

    var uppercase = confirm("Click ok to confirm including uppercase characters");

    if (uppercase) {
      isUppercase = true;
      characters += uppercaseSet;
    } else {
      isUppercase = false;
    }

    for(var i = 0; i < length; i++) {
      var random = Math.floor(Math.random() * characters.length);
      password += characters.charAt(random);
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password !== undefined) {
    passwordText.value = password;
  }
}
