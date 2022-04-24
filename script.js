// Assignment Code

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numberChar = "0123456789";
var specialChar = "!#$%&()_-=<>?@";
var passReqs = "";
var passLength = 0;
var passFinish = "";
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);

function createPassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
function generatePassword() {
    var passLength = prompt("Length of your password?");
    if (passLength < 8 || passLength > 128) {

        alert('Password must be between 8 and 128 characters');
        return passLength;
    } 
    else {
            var userUpper = confirm('Would you like uppercase letters in your password?');
            var userLower = confirm('Would you like lowercase letters in your password?');
            var userNumber = confirm('Would you like numbers in your password?');
            var userSpecial = confirm('Would you like characters in your password?');

            if ((userUpper === false) && (userLower === false) && (userNumber === false) && (userSpecial === false)) {
                alert('At least one of the password criteria must be chosen.');
                generatePassword();
            }
            if (userUpper === true) {
                passReqs = passReqs.concat(upperCase)
            }
            if (userLower === true) {
                passReqs = passReqs.concat(lowerCase)
            }
             if (userNumber === true) {
                passReqs = passReqs.concat(numberChar)
            }
            if (userSpecial === true) {
                passReqs = passReqs.concat(specialChar)

                console.log(passReqs) }
          }
for (var i = 0; i < passLength; i++ ) {
passFinish = passFinish + passReqs.charAt( Math.floor(Math.random() * (passReqs.length)));

  console.log(passFinish)
    }
return passFinish;}
