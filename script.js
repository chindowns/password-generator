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

// Ask how many characters you want to use between 8 and 128
var numChar = 0;

// Check if the character count is between 8 and 128 characters
while (numChar < 8 || numChar > 128) {
  numChar = prompt("Please enter the number of characters you want for your password. Please select a number between 8 and 128.");
}

// Ask to check at least 3 of the 4 types of characters to use 
var n

// Verify at least 3 of the 4 characters were selected.

 
// Verify that the total number of characters is less 128


// Generate New Pasword and display it to the screen.


}

// Add event listener to generate button
generateBtn.addEventListener("click"","  writePassword);
