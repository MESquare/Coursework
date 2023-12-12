//Secure pin is 1413

//Incoprparated borrowed code

//Declaring varables

let x = 7;
let y = 6;

//Function to open the container attribute

function togglePopup() {
  var popupContainer = document.getElementById("container");
  if (
    popupContainer.style.display === "none" ||
    popupContainer.style.display === ""
  ) {
    popupContainer.style.display = "flex";
  } else {
    popupContainer.style.display = "none";
  }
}

//Function comparing calculated pin from a series of expressions and changing the resultants to string varables

function validatePin() {
  var enteredPin = document.getElementById("pin").value;

  // Calculated results in four operations

  var num1 = x - y;
  var num2 = 2 + 2;
  var num3 = 1 * 1;
  var num4 = 6 / 2;

  // Convert to expected pin entery to corresponding string equivalent

  var expectedPin1 = num1.toString();
  var expectedPin2 = num2.toString();
  var expectedPin3 = num3.toString();
  var expectedPin4 = num4.toString();

  // Concatenating the results for calculations

  var expectedPin = expectedPin1 + expectedPin2 + expectedPin3 + expectedPin4;

  // Taking the last four digits if computations would have been a decimal resultant
  //expectedPin = expectedPin.slice(-4);

  // Comparing the enteredPin variable with the expectedPin variable to see that the string are equal to each other
  //Alert popup window opens if input is correct - proceeds to next openValidAccessWindow fuctiono for execution
  //Else, alert popup window opens if input is incorrect, and redirects user to try again

  if (enteredPin === expectedPin) {
    alert('PIN is valid! Opening "Secure Vault Inside" window.');
    openValidAccessWindow();
  } else {
    alert("Invalid PIN. Please try again.");
  }
}

//New browser window opens and informs user of their entered pin, as it relates to the expectedPin variable

function openValidAccessWindow() {
  window.open(
    "securevaultinside.html",
    "Secure Vault Inside",
    "width=700,height=500"
  );

  //not working
  if (enteredPin === expectedPin) {
    result.textContent = "You entered" + enteredPin + "as your pin";
  } else {
    result.textContent = "The combination is: " + expectedPin;
  }
}
