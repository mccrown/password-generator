// Assignment code here
const lower = "abcdefghijklmnopqrstuvwxyz";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const special = "!@#$%^&*?";

//function for choosing random chars from string variables
function randomChar(String) {
  return String[Math.floor(Math.random() * String.length)]
};

function generatePassword() {
  let emptyString = '';
  let passwordLength = window.prompt("What is your desired password length? Please enter a number between 8 and 128.");
  passwordLength = parseInt(passwordLength);

  //if length is an invalid length, prompt for password length again
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("That is not a valid number. Please enter a number between 8-128.");
    generatePassword();
  };
// confirm what const to use in the password
  let charChoice = {
    capitals: window.confirm("Confirm to add capital letters to your password."),
    lowers: window.confirm("Confirm to add lower case letters to your password."),
    incNumbers: window.confirm("Confirm to add numbers to your password."),
    specials: window.confirm("Confirm to add special characters to your password."),
  };
// alert user to select at least one option for password if none are selected
  if (!charChoice.capitals && !charChoice.lowers && !charChoice.incNumbers && !charChoice.specials) {
    window.alert("You must choose at least one option, try again.");
    return generatePassword();
  };
// loop to add const variables until length of password is satisfied
  for (i=0; i < (passwordLength); i++) {
    if (charChoice.capitals && emptyString.length < passwordLength) {
      let tempVar = randomChar(capital);
      emptyString += tempVar;
    }
    if (charChoice.lowers && emptyString.length < passwordLength) {
      let tempVar = randomChar(lower);
      emptyString += tempVar;
    }
    if (charChoice.incNumbers && emptyString.length < passwordLength) {
      let tempVar = randomChar(numbers);
      emptyString += tempVar;
    }
    if (charChoice.specials && emptyString.length < passwordLength) {
      let tempVar = randomChar(special);
      emptyString += tempVar;
    }
    //randomize const variables in string
    emptyString = emptyString.split('').sort(function(){return 0.5-Math.random()}).join('');
  };
return emptyString;
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
