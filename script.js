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

// Character randomization
// Add character randomization to password
function generatePassword() {
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
 var specialChar = confirm("Would you like the following special characters in your password? (!@#$%^&*)");
 console.log(specialChar);

  // Create random password
  var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];//uppercase
  var numeric = [0,1,2,3,4,5,6,7,8,9];
  var special = ["!","@","#","$","%","^","&","*"];

  function generateRandomNumber(userLength){
  var randomNumber = Math.random();
  var result = Math.floor(randomNumber*userLength);
  return result;
  }

  var passwordArray =[];
  
  for (var j=0; j < userLength;j++){
    var randomAlpha = generateRandomNumber(alpha.length);
    var randomLetter = alpha[randomAlpha];

    var randomCapAlpha = generateRandomNumber(alpha.length);
    var randomCapLetter = alpha[randomCapAlpha].toUpperCase();

    var randomNum = generateRandomNumber(numeric.length);
    var randomNumberPW = numeric[randomNum];

    var randomSpecial = generateRandomNumber(special.length);
    var randomSpecialPW = special[randomSpecial];
    
    if (lowerCase===true){
      passwordArray.push(randomLetter);
    } 
    if (upperCase===true){
      passwordArray.push(randomCapLetter);
    }
    if (numbers===true){
      passwordArray.push(randomNumberPW);
    }
    if (specialChar===true){
      passwordArray.push(randomSpecialPW);
    }
    if (passwordArray.length===userLength){
      break;
    }
  }

  passwordArray=passwordArray.splice((userLength-1),(userLength*1));
  passwordArray= passwordArray.join('');
  return passwordArray;
}

console.log(generatePassword());

// Password is generated and shows on page

