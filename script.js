// Assignment Code
// Target generates ID
var generateBtn = document.querySelector("#generate"); {

  var numbers = "0123456789".split("");
  var lowerCase = "abcdefghiklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split("");
  var specialChars = "!@#$%^&*()_+~-./:;<=>?[`|".split("");
}
  var password = document.getElementById("password");
  function generatePassword() {
  var charsToUse = "";

  var password = "";
  
// creates user prompt to select password length
 // Prompt by window to get length of password
let passwordLength = window.prompt("Length of password must be between 8 and 128 characters");
    if (!passwordLength) {
      window.alert("Try again")
        return "generate password";
      }
//  Canceling ends generator

if (passwordLength < 8 || passwordLength > 128) {
  window.alert("The password must be between 8 and 128 characters");
  return;
}
}
// Next 4 steps creates a confirm boolean, yes or no, or else
var lowerCase = window.confirm("please add some lower case letters");
if (lowerCase) {
  password += lowerCase
} else { window.alert("you would not like to do lower case letters?")}


var upperCase = window.confirm("please add some upper case letters");
if (upperCase) {
  password += upperCase
} else { window.alert("you would not like to do upper case letters?")}

var numbers = window.confirm("please add some numbers");
if (numbers) {
  password += numbers
} else { window.alert("you would not like to add numbers?")}

var lowerCase = window.confirm("please add some special characters");
if (specialChars) {
  password += specialChars
} else { window.alert("you would not like to do special characters?")}


// randomizes characters in password and makes them whole numbers
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * charsToUse.length);
   password += charsToUse.substring(randomNumber,randomNumber +1);

 }
 return password;





// Write password to the #password input -- calls password function

function writePassword() {
  // Stores generated password in password
  var password = generatePassword();
  // refers to password on string
  var passwordText = document.querySelector("#password");
// password value is on screen
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


