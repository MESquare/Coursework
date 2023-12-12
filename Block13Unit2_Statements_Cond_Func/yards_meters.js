// Your JavaScript code here
let inputYards = prompt(
  `Enter a number; we will convert that number from yards to meters`
);

// Check if inputYards is a valid number
if (isNaN(inputYards)) {
  console.log("Invalid input. Please enter a valid number.");
  // You might want to handle this case appropriately, e.g., ask the user to enter the input again.
} else {
  // Rest of your code
  console.log("Input Yards: ", inputYards);
  let convertedMeters = convertToMeters(inputYards);
  let output = createMessage(inputYards, convertedMeters);
  console.log("Converted Meters: ", convertedMeters);
  console.log(output);
}

function convertToMeters(yards) {
  // Convert yards to meters
  return yards * 0.9144;
}

function createMessage(yards, meters) {
  let message = "";
  const numYards = yards * 1;

  if (numYards === 1760) {
    message = "That's as long as a mile!";
  } else if (numYards === 100) {
    message = "That's as long as a football field!";
  } else if (numYards === 26) {
    message = "That's as long as a tennis court!";
  } else if (numYards === 1) {
    message = "That's as long as a washing machine!";
  }

  return `${yards} yards is ${meters} meters. ${message}`;
}
