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
  // Still need to figure out how to end the function if a number is never given

  // Initialize the password array for characters/numbers to be passed into
  var passwordArray = [];

  // Write if statements to check what needs to be included in password
  // ex if upper = true, add the upperCase array to the passwordArr array

  // For uppercase:
  var upper = confirm("Would you like uppercase characters?");
    if (upper === true) {
      // This concatenates the uppercase letters onto the originally empty passwordArray if true
      passwordArray = passwordArray.concat(upperCase)
    }
    
    // For lowercase:
  var lower = confirm("Would you like lowercase characters?");
    // This concatenates the lowercase letters onto the existing passwordArray, or, onto an empty array
    if (lower === true && passwordArray.length >= 0) {
      passwordArray = passwordArray.concat(lowerCase)
    } else if (lower === true && passwordArray.length === 0) {
      passwordArray += lowerCase
    }

    // For special characters:
  var special = confirm("Would you like special characters?");
    // This concatenates the special characters onto the existing passwordArray, or, onto an empty array
    if (special === true && passwordArray.length >= 0) { 
      passwordArray = passwordArray.concat(specialChar)
    } else if (special === true && passwordArray.length === 0) {
      passwordArray += specialChar
    }

    // For numbers: (will include numbers in the array if everything else is false)
  var num = confirm("Would you like numbers?");
    // This concatenates the numbers onto the existing passwordArray, or, onto the empty passwordArray even if they say no, so that something is given
    if (num === true && passwordArray.length >= 0) {
      passwordArray = passwordArray.concat(number)
    } else if (num === false && passwordArray.length === 0) {
      passwordArray = passwordArray.concat(number)
    }

  // Random password variable generated
  var randomPassword = [];

  // Loop through designated array length (charLength times), and pass in random characters or numbers depending on what variables are true (confirmed statements)
  for (var i = 0; i < charLength; i++) {
    var index = Math.floor(Math.random() * passwordArray.length)
     randomPassword += passwordArray[index];
  }
  return randomPassword;
}



