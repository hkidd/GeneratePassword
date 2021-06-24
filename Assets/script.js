// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Available characters and numbers
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '<', '>', '?', '/'];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Main generator function
function generatePassword() {

  // User is asked to input a number between 8 and 128.  Strings will be passed in as integers.
  var charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8));
  console.log(charLength)

  // If user does not imput a number between 8 and 128 they will be asked again
  if (isNaN(charLength)) {
    alert("Sorry, you must provide a number of characters");
    charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8));
  } else if (charLength < 8 || charLength > 128) {
    alert("Sorry, you must provide a number of characters between 8 and 128");
    charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8));
  } 

  // Initialize the password array for characters/numbers to be passed into
  var passwordArray = [];

  // Write if statements to check what needs to be included in password
  // ex if upper = true, add the upperCase array to the passwordArr array

  // For uppercase
  var upper = confirm("Would you like uppercase characters?");
    if (upper === true) {
      passwordArray = passwordArray.concat(upperCase)
    } 
    // console.log(passwordArray)

    // For lowercase
  var lower = confirm("Would you like lowercase characters?");
    if (lower === true && passwordArray.length >= 0) {
      passwordArray = passwordArray.concat(lowerCase)
    } else if (lower === true && passwordArray.length === 0) {
      passwordArray += lowerCase
    }
    // console.log(passwordArray)

    // For special characters
  var special = confirm("Would you like special characters?");
    if (special === true && passwordArray.length >= 0) {
      passwordArray = passwordArray.concat(specialChar)
    } else if (special === true && passwordArray.length === 0) {
      passwordArray += specialChar
    } 
    // console.log(passwordArray)

    // For numbers (will include numbers in the array if everything else is false)
  var num = confirm("Would you like numbers?");
    if (num === true && passwordArray.length >= 0) {
      passwordArray = passwordArray.concat(number)
    } else if (num === false && passwordArray.length === 0) {
      passwordArray += number
    } 
    // console.log(passwordArray)
    
  // Random password variable actually generated
  var randomPassword = [];

  // Loop through designated array length (charLength.length times), and pass in random characters or numbers depending on what variables are true (confirm statements)

  for (var i = 0; i < charLength; i++) {
    var index = Math.floor(Math.random() * passwordArray.length)
     randomPassword += passwordArray[index];
  }
  return randomPassword;
}



