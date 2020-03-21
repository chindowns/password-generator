// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialArr = ["~", "!", "@", "#", "$", "%<^", "&", "*", "(", ")", "-", "_", "+", "<", ">"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  // Ask for password length
  event.preventDefault();
  var useSpecial = document.getElementById("special").checked;
  var useNumbers = document.getElementById("numbers").checked;
  var useUpper = document.getElementById("upper").checked;
  var requestLength = document.getElementById("password-length").value;

  // Validate the length of the password
  while (requestLength < 8 || requestLength > 128) {
    alert("You must enter a number between 8 and 128!");
    return;
  }
  
  // Hides the beginning instruction block on the application display and shows the password block
  document.getElementById("begin").style.display = "none";
  document.getElementById("password").style.display = "block";

  // Create the password from the user requested arrays
  var passwd = ""
  
  for (passwd.length; passwd.length < requestLength; passwd.length) {
    // Randomly adds a character from the 
    passwd += lowerArr[Math.floor(Math.random()*lowerArr.length)];

    // If user Conirms using Uppercase letters & the length of the password is 
    // not = the user requested password length then 
    // randomly generate an upperArr and add it to password array
    if (useUpper === true && passwd.length < requestLength) {
      passwd += upperArr[Math.floor(Math.random()*upperArr.length)];
    }

    // If user Conirms using Numbers & the length of the password is 
    // not = the user requested password length then 
    // randomly generate an numberArr and add it to password array
    if (useNumbers === true && passwd.length < requestLength) {
      passwd += numberArr[Math.floor(Math.random()*numberArr.length)];
    }

    // If user Conirms using Special Characters & the length of the password is 
    // not = the user requested password length then 
    // randomly generate a specialArr from theand add it to password string
    if (useSpecial === true && passwd.length < requestLength) {
      passwd += specialArr[Math.floor(Math.random()*specialArr.length)];
    }
  }
  
  // Shuffle password string to ensure the characters are in a random order
  // Convert String to array
  var arr = passwd.split('');

  // Random Sort
  arr.sort(function() {
    return 0.5 - Math.random();
  });

  // Convert Array to string
  passwd = arr.join('');

  return passwd;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);