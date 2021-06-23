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

// All available characters and numbers
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '<', '>', '?', '/'];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Main generator function
function generatePassword() {
  var charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8));
  console.log(charLength)

  if (isNaN(charLength)) {
      charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8));
  } else if (charLength < 8 || charLength > 128) {
    charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8))
  } 

  // Initialize the password array for characters/numbers to be passed into
  let passwordArr = [];

  // Write if statements to check what needs to be included in password
  // ex if upper = true, grab random uppercase character
  var upper = confirm("Would you like uppercase characters?");
    if (upper === true) {
      passwordArr = upperCase
    } 
  var lower = confirm("Would you like lowercase characters?");
    if (lower === true && passwordArr.length > 0) {
      passwordArr.concat(lowerCase)
    } else if (lower) {
      passwordArr = lowerCase
    }
  var special = confirm("Would you like special characters?");
    if (special === true && passwordArr.length > 0) {
      passwordArr.concat(specialChar)
    } else if (special) {
      passwordArr = specialChar
    } 
  var num = confirm("Would you like numbers?");
    if (num === true && passwordArr.length > 0) {
      passwordArr.concat(number)
    } else if (num || passwordArr.length == 0) {
      passwordArr = number
      console.log(passwordArr)
    } 

  console.log(upper, lower, special, num);

  // Loop through designated array length (charLength.length times), and pass in random characters or numbers depending on what variables are true (confirm statements)
}

