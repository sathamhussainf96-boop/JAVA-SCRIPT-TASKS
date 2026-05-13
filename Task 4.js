//Task 1 — Basic Function
//Create a function called welcomeUser.
//Requirements:
//Accept name
function welcomeUser(name) {
  console.log("Welcome " + name);
}
welcomeUser("SATHAM HUSSAIN");

//output: Welcome SATHAM HUSSAIN


//Task 2 — Parameter + Return
//Create a function squareNumber.
//Requirements:
//Accept one number
//Return square value
//squareNumber(5)
//Output:25

function squareNumber(num) {
  return num * num;
}
let result = squareNumber(5);
console.log(result);  // Output: 25



// Task 3— Object Function
//Create an object:
//{
  // name : "Rahul",
   //salary : 50000
//}
//Requirements:
//Create a function:
//employeeBonus(bonus)
//Output:Rahul 55000
// 1. Create the object

let employee = {
  name: "Rahul",
  salary: 50000
};
function employeeBonus(bonus) {
  let newSalary = employee.salary + bonus;
  return employee.name + newSalary;
}
console.log(employeeBonus(5000));  // Output: Rahul 55000

// Task 4— Scope Checking
//Inside a function:
//Create var
//Create let
//Create const
//Requirements:
//Try accessing them outside block
//Observe which works and which gives error

function scopeTest() {
  if (true) {
    var greeting = "I am a var";
    let message = "I am a let";
    const secret = "I am a const";
    
    console.log(message); 
  }
  console.log(greeting); 
  try {
    console.log(message); 
  } catch (err) {
    console.log("let Error: " + err.message); 
  }
  try {
    console.log(secret);
  } catch (err) {
    console.log("const Error: " + err.message); 
  }
}

scopeTest();

//output:
// I am a let
// I am a var
// let Error: message is not defined
// const Error: secret is not defined



//Task 5— Arrow Function
//Convert this into arrow function:
//function add(a,b){
//console.log(a+b);
//}

const add = (a, b) => {
  console.log(a + b);
};
add(10, 20); // Output: 30

//Task 6- — Callback Function
//Create:
//multiply
//calculator
//Requirements:
//calculator should accept:
//callback function
//two numbers
//Example:
//calculator(multiply,5,2)

const multiply = (a, b) => a * b;
function calculator(operation, num1, num2) {
  let result = operation(num1, num2); 
  console.log(result);
}
calculator(multiply, 5, 2); // Output: 10

//Task7 — Generator Function
//Create generator function offers.
//Requirements:
//Yield:
//"50% OFF"
//"Free Delivery"
//"Cashback"
//Use:
//next()
//to print values one by one.

// 1. Define the Generator (notice the * after 'function')
function* offers() {
  yield "50% OFF";
  yield "Free Delivery";
  yield "Cashback";
}
const promo = offers();
console.log(promo.next().value); // Output: 50% OFF
console.log(promo.next().value); // Output: Free Delivery
console.log(promo.next().value); // Output: Cashback



//Task 8 Default Parameter
//Create:
//student(name,course="JavaScript")
//Requirements:
//If course not passed,
//default should become "JavaScript".

function student(name, course = "JavaScript") {
  console.log(`${name} is enrolled in ${course}`);
}

// 1. Calling with both arguments
student("SATHAM", "Python"); 
// Output: SATHAM is enrolled in Python
student("HUSSAIN"); 
//output: HUSSAIN is enrolled in JavaScript

//Task 9 — Currying
//Create currying function for multiplication.
//Example:
//multi(2)(3)(4)
//Output:24

function multi(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log(multi(2)(3)(4)); // Output: 24


//Task 10 — Spread Operator
//Merge these arrays:
//[1,2,3]
//[4,5,6]
//Final Output:
//[1,2,3,4,5,6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); 
// Output: [1, 2, 3, 4, 5, 6]

//Task11— Object Spread
//Merge two objects:
//{name:"Navi"}
//{role:"Developer"}
//Final Output:
//{
  //name:"Navi",
  //role:"Developer"
//}

const person = { name: "SATHAM" };
const job = { role: "Developer" };

const employee = { ...person, ...job };
console.log(employee); 
// Output: { name: "SATHAM", role: "Developer" }

//Task 12 — Rest Operator
//Create function:
//numbers(...num)
//Requirements:
//Print all numbers
//Print total sum
//Example:
//numbers(1,2,3,4)
//Output:[1,2,3,4] 10

function numbers(...num) {
  console.log(num);
  let sum = num.reduce((total, current) => total + current, 0);
  
  console.log(sum);
}
numbers(1, 2, 3, 4); 
// Output: 
// [1, 2, 3, 4]
// 10


// Mini Challenge 
//Create one small Student Management System using:
//function
//callback
//object
//array
//spread operator
//rest operator

//Features:
//Add student
//Print students
//Calculate marks
//Add bonus marks

let studentList = [];
const addStudent = (name, ...marks) => {
  const newStudent = { name, marks };
  studentList = [...studentList, newStudent]; 
  console.log(`Added: ${name}`);
};
const calculateTotal = (marksArray) => {
  return marksArray.reduce((sum, m) => sum + m, 0);
};
const displayReport = (callback) => {
  console.log("--- Student Report ---");
  studentList.forEach(s => {
    const total = callback(s.marks);
    console.log(`Student: ${s.name} | Total Marks: ${total}`);
  });
};
const addBonus = (bonusValue) => {
  studentList = studentList.map(s => ({
    ...s, 
    marks: s.marks.map(m => m + bonusValue)
  }));
  console.log(`Added ${bonusValue} bonus marks to everyone!`);
};


addStudent("Rahul", 80, 90, 85);
addStudent("Navi", 70, 75, 80);

displayReport(calculateTotal); 

addBonus(5); 
displayReport(calculateTotal); 

//output :
// Added: Rahul
//Added: Navi
//--- Student Report ---
//Student: Rahul | Total Marks: 255
//Student: Navi | Total Marks: 225
//Added 5 bonus marks to everyone!
//--- Student Report ---
//Student: Rahul | Total Marks: 270
//Student: Navi | Total Marks: 240



