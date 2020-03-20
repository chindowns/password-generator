// Assignment Code
var generateBtn = document.querySelector("#generate");

// Special Character Assignment and Possible Password Characters
var specialChar = ["~"," !"," @"," #"," $"," %"," ^"," &"," *"," ("," )"," -"," _"," ="," +"," {"," }"];
var lowercase = ["a"," b"," c"," d"," e"," f"," g"," h"," i"," j"," k"," l"," m"," n"," o"," p"," q"," r"," s"," t"," u"," v"," x"," y"," z"];
var uppercase = ["A"," B"," C"," D"," E"," F"," G"," H"," I"," J"," K"," L"," M"," N"," O"," P"," Q"," R"," S"," T"," U"," V"," X"," Y"," Z"];
var num= ["0"," 1"," 2"," 3"," 4"," 5"," 6"," 7"," 8"," 9"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Setting the variables we want to track
var passLength = 0;
var specialChar = true;
var numbers = true;
var upperCase = true;
var options = true;

// // Timeout function for alerting cancelation of the process
// var canelled;
// var arg = "";

// function cancelTimeout(arg) {
//   cancelled = setTimeout(cancelAlert(arg), 3000);
// }

// function cancelAlert(arg) {
//   alert(arg);
// }

// Set the length of your password.  It must be at least 8 characters and no more than 128.
function askPassLength() {
  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Set the length of your randomly generated password.\nIt has to be between 8 and 128.");
    console.log(passLength);

    if (passLength === null) { 
      alert("You cancelled the generation of your secure password.");
      break;
    }
         
    else if (passLength < 8 || passLength > 128) {
      passLength = prompt("You must enter a number between 8 and 128!");
    }
  }
}

function getOptions() {
  // hides the box and generate button to display the options.
  document.getElementById("password").style.display = "none";
  document.getElementById("generate").style.display = "none";

  
}


// Check if the character count is between 8 and 128 characters


// Ask how many special characters to include 
// var numSpecialChar = prompt("How many special characters would you like to include?");
// var numNumbers = prompt("How many numbers would you like to include?");
// var numUpperCase = prompt("How many upper case letters would you like to use?");

// Verify at least 3 of the 4 character options were selected.

 
// Verify that the total number of characters is less 128


// Generate New Pasword and display it to the screen.
function generatePassword() {
  // askPassLength();
}

// Add event listener to generate button
// generateBtn.addEventListener("click" ','  writePassword);

// document.getElementById("generate").addEventListener("click", generatePassword());


