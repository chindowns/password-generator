// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var specialChar = ["~", "!", "@", "#", "$", "%<^", "&", "*", "(", ")", "-", "_", "+", "<", ">"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var passwd = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Set the length of your password.  It must be at least 8 characters and no more than 128.
function askPassLength() {
  passLength = 0;
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Set the length of your randomly generated password.\nIt has to be between 8 and 128.");

    // Cancels the operation when the user selects cancel and alerts the user the operation was canceled
    if (passLength === null) { 
      alert("You cancelled the generation of your secure password.");
      break;
    }
         
    else if (passLength < 8 || passLength > 128) {
      passLength = prompt("You must enter a number between 8 and 128!");
    }
  }
  return;
}

function generatePassword(){
  // Ask for password length
  
  askPassLength();

  // Cancels generation request if the user selects cancel in askPassLength function
  if (passLength === null) { 
    return;
  }

  // Hides the beginning instruction block on the application display and shows the password block
  document.getElementById("begin").style.display = "none";
  document.getElementById("password").style.display = "block";

  // Clearing passwd
  passwd = "";

  createPassword();
  
  // Shuffle password string to ensure the characters are random
  shufflePasswdStr();
  return passwd;
}

function createPassword() {
  // Prompt for character set options
  var confSpecial = confirm("Use Special Characters?");
  var confNumbers = confirm("Use Numbers?");
  var confUpper = confirm("Use Upper Case Characters?");
  
  for (passwd.length; passwd.length < passLength; passwd.length) {
    // Randomly adds a character from the 
    passwd += lowerChar[Math.floor(Math.random()*lowerChar.length)];

    // If user Conirms using Uppercase letters & the length of the password is 
    // not = the user requested password length then 
    // randomly generate an upperChar and add it to password array
    if (confUpper === true && passwd.length < passLength) {
      passwd += upperChar[Math.floor(Math.random()*upperChar.length)];
    }

    // If user Conirms using Numbers & the length of the password is 
    // not = the user requested password length then 
    // randomly generate an numberChar and add it to password array
    if (confNumbers === true && passwd.length < passLength) {
      passwd += numberChar[Math.floor(Math.random()*numberChar.length)];
    }

    // If user Conirms using Special Characters & the length of the password is 
    // not = the user requested password length then 
    // randomly generate a specialChar from theand add it to password string
    if (confSpecial === true && passwd.length < passLength) {
      passwd += specialChar[Math.floor(Math.random()*specialChar.length)];
    }
  }
}

function shufflePasswdStr() {
  // Convert String to array
  var arr = passwd.split('');

  // Random Sort
  arr.sort(function() {
    return 0.5 - Math.random();
  });

  // Convert Array to string
  passwd = arr.join('');
  return;
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());