Guided Practice

For this guided practice, we will be linking our javascript file to an HTML document and building some basic user interactivity. We will make a yards-to-meters converter using functions, the window prompt() method, and our browser's dev console.

1. Anywhere you would like, create two files: yards_meters.html and yards_meters.js.

2. In your yards_meters.html create html, head and body tags, and link your yards_meters.js file in the head of the document.
Show Solution

<html>
  <head>
    <script src='yards_meters.js'></script>
  </head>
  <body>
  </body>
</html>

Now, move to your yards_meters.js file. Let us start by prompting our user for some yards we want to convert to meters.

3. Create a variable using the let keyword (so we can reassign it) called inputYards. We will now use a browser window method, prompt()

Links to an external site.. Set your inputYards variable equal to our window prompt() method. Pass the prompt a string asking our user for a yard amount to convert. If you would like, console log your inputYards variable. Open your index.html file using live server, and you should be greeted with a prompt.
Show Solution

let inputYards = prompt('enter a number, we will convert that number from yards to meters');
console.log("Input Yards: ", inputYards)

We are now storing a yard amount in memory. Great! Let us put this data to use.

4. Above your window prompt, define a function called convertToMeters, which takes yards as an argument. We need this function to do some math for us. The conversion rate from yards to meters is 0.9144. So, let us have our function return the yards (passed in) multiplied by 0.9144.
Show Solution

function convertToMeters(yards){
  return yards * 0.9144;
}

5. Now, go back to after your last line of code and invoke this function, passing it our inputYards variable. Store the result of the function call in a variable called convertedMeters. (Remember to use let so it is reassignable.)

If you like, you can log this value to view it in the console.
Show Solution

let inputYards = prompt('enter a number, we will convert that number from yards to meters');
let convertedMeters = convertToMeters(inputYards);
console.log("Converted Meters: ", convertedMeters)

We now have two variables available to us: inputYards and convertedMeters. Let us use these variables in a new function we will call createMessage.

6. After your last function definition, define a new function called createMessage. It needs to take two arguments, yards and meters, and use if statements to determine what message to return based on the input values. 

Inside the function body, create a variable called message using let, as we will be reassigning its value in our if statement. Next create a variable called numYards (using const) and set it equal to the yards passed into the function multiplied by 1. We have multiplying by 1 to make sure it is a number. 
Show Solution

function createMessage(yards, meters){
  let message = '';
  const numYards = yards * 1;
}

7. We can now write our if statement logic! Use the === operator to check the following conditions:

    If our numYards variable is strictly equal to 1760, reassign the message variable to "That is as long as a mile"
    If our numYards variable is strictly equal to 100, reassign the message variable to "That is as long as a football field"
    If our numYards variable is strictly equal to 26, reassign the message variable to "That is as long as a tennis court!"
    Come up with a few of your own.

Show Solution

function createMessage(yards, meters){
  let message = '';
  const numYards = yards * 1;
  
  if(numYards === 1760) {
    message = 'Thats as long as a mile!'
  } else if(numYards === 100) {
    message = 'Thats as long as a football field!';
  } else if(numYards === 26) {
    message = 'Thats as long as a tennis court!';
  } else if(numYards === 1) {
    message = 'Thats as long as a washing machine!';
  }


}

 8. Lastly, after your if statements, return a larger message using template literals

Links to an external site., declaring how many meters we have converted to yards and the message from our message variable.
Show Solution

function createMessage(yards, meters){
  let message = '';
  const numYards = yards * 1;
  
  if(numYards === 1760) {
    message = 'Thats as long as a mile!'
  } else if(numYards === 100) {
    message = 'Thats as long as a football field!';
  } else if(numYards === 26) {
    message = 'Thats as long as a tennis court!';
  } else if(numYards === 1) {
    message = 'Thats as long as a washing machine!';
  }

  return `${yards} yards is ${ meters} meters. ${message}`;
}

 9. Move back down to your prompts and invoke this function, passing it your convertedMeters and inputYards variables. Store the result of the function call in a variable called output, and console.log it.
Show Solution

let inputYards = prompt('enter a number, we will convert that number from yards to meters');
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters);
console.log(output);

Try it out!

If you open your HTML file in the browser, you should be met with a prompt. Type in a number value, open the browser's dev console, and observe what is there. You should have a message logged with the correct conversion rate applied. Congratulations! We have already built some browser interactivity with HTML and Javascript.

With the remaining time, try to write a few more prompts AFTER your last prompts. This way, you can get a sense of the logic flow in your JavaScript file. Remember we used let to reassign the inputYards, convertedMeters, and output variables.

Next, try and use the rand() function to replace the role of the window prompt() in your JavaScript file. 

It could be something like:
Show Solution

let inputYards = prompt('enter a number, we will convert that number from yards to meters');
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters);
console.log(output);

inputYards = prompt('Lets try again! enter a number, we will convert that number from yards to meters');
convertedMeters = convertToMeters(inputYards);
output = createMessage(inputYards, convertedMeters);
console.log(output);

let randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

randomYards = rand(88); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

Show Full Solution

function convertToMeters(yards){
  return yards * 0.9144;
}

function createMessage(yards, meters){
  let message = '';
  const numYards = yards * 1;
  
  if(numYards === 1760) {
    message = 'Thats as long as a mile!'
  } else if(numYards === 100) {
    message = 'Thats as long as a football field!';
  } else if(numYards === 26) {
    message = 'Thats as long as a tennis court!';
  } else if(numYards === 1) {
    message = 'Thats as long as a washing machine!';
  }

  return `${yards} yards is ${ meters} meters. ${message}`;
}

function rand(limit){
  return Math.round(Math.random()*limit);
}

let inputYards = prompt('enter a number, we will convert that number from yards to meters');
let convertedMeters = convertToMeters(inputYards);
let output = createMessage(inputYards, convertedMeters);
console.log(output);

inputYards = prompt('Lets try again! enter a number, we will convert that number from yards to meters');
convertedMeters = convertToMeters(inputYards);
output = createMessage(inputYards, convertedMeters);
console.log(output);

let randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);

randomYards = rand(100); 
convertedMeters = convertToMeters(randomYards);
output = createMessage(randomYards, convertedMeters);
console.log(output);