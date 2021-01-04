

// Assignment code here
const generateElement = document.getElementById('generate')
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

// Character Codes from net-comber.com/charset.html
const uppercaseCharCodes = arrayRandomCharCodes(65, 90)
const lowercaseCharCodes = arrayRandomCharCodes(97, 122)
const numberCharCodes = arrayRandomCharCodes(48, 57)
const symbolsCharCodes = arrayRandomCharCodes(33, 47)


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)



form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})


//Generate password function
  // 1. Initialize password variables
  // 2. Filter out unchecked types
  // 3. Loop over length call generator function for each type
  // 4. Add final password to the password variable and return it above
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {

  let charCodes = lowercaseCharCodes
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolsCharCodes)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
  
  
}


function arrayRandomCharCodes(low, high){
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


//Intro Prompt
var passwordConfirm = window.confirm('Would you like to create a strong password that no one could guess?');

if (passwordConfirm) {
  generatePassword();
} else {
  window.alert('You really should try to use a stronger password instead of using your address or "Password", whatever, guess you want to get hacked!');
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordDisplay;

}


// Add event listener to generate button
generateBtn.addEventListener("submit", writePassword);

function syncCharacterAmount(sync){
  const value = sync.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}


