// Assignment code here
const lower = "abcdefghijklmnopqrstuvwxyz";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "!@#$%^&*?";

//function for choosing random chars from string variables
function randomChar (String) {
  return String[Math.floor(Math.random() * String.length)]
};

function generatePassword() {
  let emptyArray = [];
  let passwordLength = window.prompt("What is your desired password length? Please enter a number between 8 and 128.");
  passwordLength = parseInt(passwordLength);
  //if length is an invalid length, prompt for password length again
  if (passwordLength < 8 || passwordLength > 128){
  window.alert("That is not a valid number. Please enter a number between 8-128.");
  generatePassword();
  };

  let charChoice = {
    capitals: window.confirm("Confirm to add capital letters to your password."),
    lowers: window.confirm("Confirm to add lower case letters to your password."),
    incNumbers: window.confirm("Confirm to add numbers to your password."),
    specials: window.confirm("Confirm to add special characters to your password."),
  };

  if (!charChoice.capitals && !charChoice.lowers && !charChoice.incNumbers && !charChoice.specials){
    window.prompt("You must choose at least one option, try again.");
    return generatePassword();
  }

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
