//  
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    
      // prompts the user for a password length between 12 and 128 characters
      var passwordLength = prompt("How many characters would you like your password to be must be? Your password must be at least 12 characters and less than 128?");
    
      // if statement checks if password length is between 12 and 128 characters 
      // if not, it alerts the user (password must be between 8 and 128 characters); 
      // the return exits the function
      if (passwordLength < 12 || passwordLength > 128) {
     alert("Password must be between 8 and 128 characters!");
     return;
      }
    
      // prompts for user to select for different character types
      // the confirms are used to store the user's response
      // uses boolean values (true or false)/yes or no on the form
      var includeLowercase = confirm("Would you like to include lowercase letters?");
      var includeUppercase = confirm("Would you like to include uppercase letters?");
      var includeNumbers = confirm("Would you like to include numbers?");
      var includeSpecialCharacters = confirm("Would you like to include special characters?");
    
      // checks if user has selected at least one the different character types
      // if not, it alerts the user (must select at least one character type)
      if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
     alert("You must select at least one character type!");
     return;
      }
    
      // Create arrays for each character type
      var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      var numbers = "0123456789".split("");
      var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("");
    
      // created an array for each selected character types
      var selectedCharacters = [];
    
      // added selected character types to the selectedCharacters array
      if (includeLowercase) {
     selectedCharacters = selectedCharacters.concat(lowercase);
      }
      if (includeUppercase) {
     selectedCharacters = selectedCharacters.concat(uppercase);
      }
      if (includeNumbers) {
     selectedCharacters = selectedCharacters.concat(numbers);
      }
      if (includeSpecialCharacters) {
     selectedCharacters = selectedCharacters.concat(specialCharacters);
      }
    
      // Create empty array for password
      var password = [];
    
      // Loop through selectedCharacters array and add random characters to password array
      for (var i = 0; i < passwordLength; i++) {
     password.push(selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]);
      }
    
      // Return password as string
      return password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
