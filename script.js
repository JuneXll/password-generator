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



// Ask length of password=> at least 8-128 characters
var userLength = 0;
var validLength = true;
for (var i=0; validLength; i++){
  var userLength = prompt("Choose a password length between 8 and 128 characters.")
  if((userLength < 8) || (userLength > 128)){
  alert("Your password is not between the right parameters, please choose a length between 8 and 128 characters.");
  console.log(userLength);
  } else if(isNaN(userLength)===true){
  alert("Please choose a valid number between 8 and 128");
  console.log(userLength);
  } else {
    break;
  }
} 

console.log(userLength);

// Ask character types=>lowercase, uppercase, numeric and/or special characters
var lowerCase = confirm("Would you like to have lowercase letters in your password?");
console.log(lowerCase);
var upperCase = confirm("Would you like to have uppercase letters in your password?");
console.log(upperCase);
var numbers = confirm("Would you like to have numbers in your password?");
console.log(numbers);
var specialChar = confirm("Would you like the following special characters in your password? (#, !, *, -)");
console.log(specialChar);

// Create random password
// var pwChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789#!*-"]
// function generateRandomNumber(maxValue){
//   var randomNumber = Math.random();
//   var result = Math.floor(randomNumber*maxValue);
//   return result;
// }

// var randomPosition = generateRandomNumber(pwChar.length);
// var randomLetter = pwChar[randomPosition];

// function randomElementFromArray(array){
//   var randomPosition=generateRandomNumber(array.length);
//   return array[randomPosition];
// }
// randomElementFromArray(array);

// Confirm that at least one character type has been picked
// Password is generated and shows on page
//

