// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

    var length = prompt("How many characters would you like your password to contain?");
    var specialSet = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{}|~";
    var numericSet = "0123456789";
    var lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var characters = "";
    var password = "";
    var tempCharacters = "";

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
      characters += specialSet;
      tempCharacters += getRandomCharacters(specialSet);
    } 

    var numeric = confirm("Click ok to confirm including numeric characters");

    if (numeric) {
      characters += numericSet;
      tempCharacters += getRandomCharacters(numericSet);
    } 

    var lowercase = confirm("Click ok to confirm including lowercase characters");

    if (lowercase) {
      characters += lowercaseSet;
      tempCharacters += getRandomCharacters(lowercaseSet);
    } 

    var uppercase = confirm("Click ok to confirm including uppercase characters");

    if (uppercase) {
      characters += uppercaseSet;
      tempCharacters += getRandomCharacters(uppercaseSet);
    } 

    if (characters.length === 0) {
      alert("You have to select atleast one criteria. Try again!");
      return generatePassword();
    }

    password += tempCharacters;

    for(var i = 0; i < length - tempCharacters.length; i++) {
      var random = getRandomInt(characters.length);
      password += characters.charAt(random);
    }

    password = shuffle(password);
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

// function for shuffle password
function shuffle(myPassword) {
  var arr = myPassword.split('');
  
  for (var i = 0; i < arr.length - 1; i++) {

    var j = getRandomInt(arr.length);

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  myPassword = arr.join('');
  return myPassword;
}

// Function for getting random number
function getRandomCharacters(set) {
  var random = getRandomInt(set.length);
  return set.charAt(random);
}

// Function for getting random number
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}