//Null line - attempting Github push procedures on this code copy

//Create an array [] to house date
//This array contains three column headings - name, price, and location
//Each object literial {} host the data withint aht object in a single memory location
//Array is not scalable

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

//Calling HTML element an dapplying width and margin properties
const app = document.getElementById("app");
app.style.width = "80%";
app.style.margin = "0 auto"; //top and btm margins set at zero, and left/right set at auto

//Creates a new paragraph element and appends it as a child element to parent 'app' on HTML page
const averagePriceElement = document.createElement("p");
averagePriceElement.id = "averagePrice";
averagePriceElement.textContent = "The average starting price is";
app.appendChild(averagePriceElement);

//Creates table elements that will be the child of the HTML element
const table = document.createElement("table");
table.className = "table table-bordered"; //sets class attribute to the tables styling - in this case, border
app.appendChild(table); //appends table to HTML div

//Appends table header element 'thread' (child  to parent) table
const thead = document.createElement("thead");
table.appendChild(thead);

//Appends table row (tr) to table header (thread) - child to parent
const tr = document.createElement("tr");
thead.appendChild(tr);

//Creates th (table header cell) elements for each .innerHTML column - name, occupation, & price, and appends child th to parent thread
const thName = document.createElement("th");
thName.innerHTML = "Name";
tr.appendChild(thName);//Name of freelancer

const thOccupation = document.createElement("th");
thOccupation.innerHTML = "Occupation";
tr.appendChild(thOccupation);//Type of occupation

const thStartingPrice = document.createElement ("th");
thStartingPrice.innerHTML = "Starting Price";
tr.appendChild(thStartingPrice);//The price

//Appends table body to parent table
const tbody = document.createElement("tbody");
table.appendChild(tbody);

//Funciton adds rows (td) and cells (td) to parent table body
const displayFreelancer = (freelancer) => {
    const trbody = document.createElement("tr");
    tbody.appendChild(trbody); //creates new table row for each freelancer

    const tdName = document.createElement("td");
    tdName.innerHTML = freelancer.name; //sets text content
    trbody.appendChild(tdName); //creates individual cell for freelancer.name and appends to parent trBody

    const tdOccupation = document.createElement("td");
    tdOccupation.innerHTML =freelancer.occupation; //sets text content
    trbody.appendChild(tdOccupation); //creates individual cell for freelancer.occupation and appends to parent trBody

    const tdStartingPrice = document.createElement("td");
    tdStartingPrice.innerHTML = freelancer.price; //sets text content
    trbody.appendChild(tdStartingPrice); //creates individual cell for freelancer.price and appends to parent trBody

};

//Function defines variable updateAveragePrice and updates the HTML textContent property as a string, and uses string interpolation (${}), which allows th evariable value to be inserted into the string. 

//const averageStartingPrice = "$30" ; //Declared as a string, but not calcualted from an average of all freelancers, but could be.

const updateAveragePrice = () => { //Updates HTML paragraph tag
    averagePriceElement.textContent = `The average starting price is $${averageStartingPrice}`;
}

//Declare averageStartingPrice
let averageStartingPrice = 0;

//Function defines and adds freelancer array data structure
//Cannot get Math.truc to work
const addFreelancer = () => {
    const newFreelancer = freelancers.pop(); //Removes and returns elements from the freelancers array, and that freelancer is assigned to newFreelancer variable
    displayFreelancer(newFreelancer);//Function passes as an arguement the previously assigned freelancer and adds a new row to the table

    averageStartingPrice = (averageStartingPrice + (freelancers.length + 1) + newFreelancer.price) / (freelancers.length + 2); //Taking an average formula (average = (Sum of observations - existing listed freelancer + the last)/(Observations divided by the total number of freelancers + 2)

    updateAveragePrice(); // Calls updateAveragePrice function and displays the updated average price 

};

//A for loop that initally interates three time (i<3), starting at i=0, and adds a new freelancer to the webpage structure, as well as passes to the function addFreelancer to recalculate the average price
for (let i = 0; i < 3; i++) {
    addFreelancer();
}

//setInterval adds a new freelancer every 3 seconds
setInterval(addFreelancer, 3000);












