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
// var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '}', '<', '>', '?', '/'];
// var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Function to generate the different character codes instead of listing them all out
function lowToHighArray(low, high) {
  var array = [];
  for (var i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
};

var upperCase = lowToHighArray(65, 90);
var lowerCase = lowToHighArray(97, 122);
var specialChar = lowToHighArray(48, 57);
var number = lowToHighArray(33, 47).concat(lowToHighArray(58,64)).concat(lowToHighArray(123, 126));


// Main generator function
function generatePassword() {

  // User inputs number of characters for their passwaord
  var charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8));
  console.log(charLength)

  // If user inputs something that is not a number, they will be asked to 
  if (isNaN(charLength)) {
      charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8));
  } else if (charLength < 8 || charLength > 128) {
    charLength = parseInt (prompt("How many total characters would you like? Min = 8, Max = 128", 8))
  } 










  // Initialize the password array for characters/numbers to be passed into
  // let passwordArr = [];

  // Write if statements to check what needs to be included in password
  // ex if upper = true, grab random uppercase character












//   // For uppercase
  var upper = confirm("Would you like uppercase characters?");
//     if (upper === true) {
//       passwordArr = upperCase
//     } 
//     // For lowercase
  var lower = confirm("Would you like lowercase characters?");
//     if (lower === true && passwordArr.length > 0) {
//       passwordArr.concat(lowerCase)
//     } else if (lower || passwordArr.length < 1) {
//       passwordArr = lowerCase
//     }
//     // For special characters
  var special = confirm("Would you like special characters?");
//     if (special === true && passwordArr.length > 0) {
//       passwordArr.concat(specialChar)
//     } else if (special || passwordArr.length < 1) {
//       passwordArr = specialChar
//     } 
//     // For numbers (will include numbers in the array if everything else is false)
  var num = confirm("Would you like numbers?");
//     if (num === true && passwordArr.length > 0) {
//       passwordArr.concat(number)
//     } else if (num || passwordArr.length === 0) {
//       passwordArr = number
//       console.log(passwordArr)
//     } 

//     // Which are true?
//     var trueTypes = upper + lower + special + num;
//     console.log(trueTypes);

//   // Loop through designated array length (charLength.length times), and pass in random characters or numbers depending on what variables are true (confirm statements)

  
// // Random password actually generated
function randomPassword(charLength, upper, lower, special) {
  
  // Creating storage variable to random password
  var pw = numbers;
  
  // Checking for true types of characters
  if (upper) {
    pw = pw.concat(upperCase);
  }
  if (lower) {
    pw = pw.concat(lowerCase);
  }
  if (special) {
    pw = pw.concat(special);
  }

  // initializing random password array
  var passwordArr = [];


}









//   var randomPassword = "";

//   for (var i = 0; i < charLength; i++) {
//     var index = Math.floor(Math.random() * passwordArr.length)
//     randomPassword += passwordArr[index];
//   }
//   return randomPassword;


}
