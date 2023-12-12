//docuemnt.addEventListerner that ensures script run

document.addEventListener("DOMContentLoaded", function () {
  // Complete the Numbers class below
  // the constructor has already been provided
  class Numbers {
    constructor(data) {
      //data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = str.split(",").map((number) => number * 1);
      } else {
        this.data = data;
      }
    }
    count() {
      return this.data.length;
      //return the count of numbers in data
    }
    printNumbers() {
      const ulElement = document.createElement("ol"); //Creates the unordered list element, and data goes through the forEach for loop to create list items
      this.data.forEach((number, index) => {
        const liElement = document.createElement("li"); //Creates new li element
        liElement.textContent = `Index ${index}: ${number}`;
        ulElement.appendChild(liElement); //Appends data to li node
      });
      const container = document.getElementById("numList"); //Appends ul to the container labeled 'numList' and appends to HTML id in <div> tag in side ,body> element by retrieving id element
      container.appendChild(ulElement); //Appends ulElement
      //print the numbers in data//add tick marks
    }
    odds() {
      return this.data.filter((number) => number % 2 !== 0);
      //return the odd numbers in data
    }
    evens() {
      return this.data.filter((number) => number % 2 === 0);
      //return the even numbers in data
    }
    sum() {
      return this.data.reduce((acc, number) => acc + number, 0);
      //return the sum of the numbers
    }
    product() {
      return this.data.reduce((acc, number) => acc * number, 1);
      //return the product of the numbers
    }
    greaterThan(target) {
      return this.data.filter((number) => number > target);
      //return the numbers greater than the target
    }
    howMany(target) {
      return this.data.filter((number) => number === target).length;
      //return the count of a given number
    }
  }

//Addition of setInterval form randum number generation and clearInterval to stop count after 10 outputs
manipulateList() {
let counter = 0;
const intervalId = setInterval(() => {
const radomNum = Math.floor(Math.random() * 100) + 1; //generates random numbers, 1 to 100
const myList = documant.getElementById('mylist');
const listItem = document.createElement('li');
listItem.textContent = 'Random Item' + randomItem;
myList.appendChild(listItem);

counter++;

if(counter === 10) {
    clearInterval(intervalId);
}
}, 1000);
}


  //JS Tag inside index.js does not work
  //Create new element to append to body
//   const scriptElement = document.createElement(`script`);
//   scriptElement.textContent =
//     "// Javascript that creates an unordered list array";
//   document.body.appendChild(scriptElement);

  //Applied style to HTML document <head> tag
  const myStyle = `list-style-type: square; color: blue; border: solid; font-weight: bolder;`;
  const styleElement = document.createElement("style");
  styleElement.textContent = `#numList {${myStyle}}`;
  document.head.appendChild(styleElement);

  //Prompt the user for a list of integers separated by commas
  const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

  //create an instance of numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); //returns count of numbers
  n1.printNumbers(); //prints the number along with their indexes
  console.log(n1.odds()); //returns odd numbers
  console.log(n1.evens()); //returns even numbers
  console.log(n1.sum()); //returns sum of numbers
  console.log(n1.product()); //returns product of numbers
  console.log(n1.greaterThan(3)); //returns numbers greater than another number
  console.log(n1.howMany(3)); //return the count of a specific number
  console.log("hello");
});
