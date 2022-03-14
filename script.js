// Assignment Code
// Target generates ID
var generateBtn = document.querySelector("#generate"); 
  var numbers = "0123456789";
  var lowerCase = "abcdefghiklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
  var specialChars = "!@#$%^&*()_+~-./:;<=>?[`|";

// calling on function to generate passwordd
  function generatePassword() {
// sets charsToUse to open or empty so that user can put in number of characters and password
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

// Next 4 steps creates a confirm boolean, yes or no
var lowerPrompt = window.confirm("please add some lower case letters");
if (lowerPrompt) {
  charsToUse += lowerCase
} 

var upperPrompt = window.confirm("please add some upper case letters");
if (upperPrompt) {
  charsToUse += upperCase
} 

var numbersPrompt = window.confirm("please add some numbers");
if (numbersPrompt) {
  charsToUse += numbers
} 

var specialPrompt = window.confirm("please add some special characters");
if (specialPrompt) {
  charsToUse += specialChars
} 
// logs to console the characters to use
console.log(charsToUse)
// randomizes characters in password 
 for (let i = 0; i < passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * charsToUse.length);
   password += charsToUse.substring(randomNumber,randomNumber +1);

 }
 return password;
}

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
