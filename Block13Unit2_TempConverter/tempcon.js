//Program to convert Fahrenheit to Celsius

//Prompt for temperature value input

let inputFahren = prompt(
  "Enter a Farhenheit temperature for conversion to Celsius: "
);

// Check if inputFahren is a valid number and not a number - re-ask user to re-enter
if (isNaN(inputFahren)) {
  console.log("Invalid input. Please enter a valid number."); //popup request a num to be re-entered
} else {
  console.log("Input Farhenheit: ", inputFahren); //popup for user input of F temp for conversion and assigns entered number to inputFahren
  let convertedCelsius = convertToCelcius(inputFahren); //passes F-input to C calc func (line 26) and to return C conversion value to be assigned to convertedCelsius
  let output = createMessage(inputFahren, convertedCelsius); // calls createMessage func and passes inputFarhren/convertedCelcius to console.log output message to variable farhen
  console.log("Celsius: ", convertedCelsius); //displays in dev console
  console.log(output);
}

// Converts F to C
function convertToCelcius(inputFahren) {
  return (convertedCelsius = (5 / 9) * inputFahren - 32);
}

//Func creates message for output to consoel
function createMessage(inputFahren, convertedCelsius) {
  let message = "";
  const numfahren = inputFahren * 1;

  if (numfahren >= 200) {
    message = "That's as hot as the sun!";
  } else if (numfahren >= 100) {
    message = "That's as hot as Georgia!";
  } else if (numfahren >= 26) {
    message = "That's as hot as a cold cup of coffee!";
  } else if (numfahren <= 1) {
    message = "That's as hot a snowball in Antarctica!";
  }

  return `${inputFahren} degrees Farhenheit is equivialent to ${convertedCelsius} degrees Celsius. ${message}`;
}

//Func call from html file to display in browser window through btn click
function celsiusTemp() {
  document.write(convertedCelsius);
}

// Send alert popup window
// alert(
//   "You entered: " +
//     inputFahren +
//     " Farhenheit. The equivalent in Celsius is " +
//     convertedCelsius +
//     "."
// );
