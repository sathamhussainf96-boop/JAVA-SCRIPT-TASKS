//Looping Statements 
// 1 printing Numbers 1 to 20 using for loop
for (let number = 1; number <= 20; number++) {
  console.log(number);
}
//output : 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20

//2. Odd Numbers
//Print all odd numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//output : 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49


//3.Print the multiplication table of 7.
const multiplier = 7;
for (let i = 1; i <= 10; i++) {
  let result = multiplier * i;
  console.log(`${multiplier} x ${i} = ${result}`);
}
//output : 7 x 1 = 7, 7 x 2 = 14, 7 x 3 = 21, 7 x 4 = 28, 7 x 5 = 35, 7 x 6 = 42, 7 x 7 = 49, 7 x 8 = 56, 7 x 9 = 63, 7 x 10 =70


//4  Reverse Counting
//Using while loop, print numbers from 20 to 1.
let counter = 20;
while (counter >= 1) {
  console.log(counter);
  
  counter--;
}

//output : 20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1

//5 Sum of Numbers
//Find the total sum of numbers from 1 to 100.
let totalSum = 0; 
for (let i = 1; i <= 100; i++) {
  totalSum += i; 
}
console.log("The total sum is:", totalSum);

//output : The total sum is: 5050

//6 6. Array Loop
//Loop through this array and print all values.
let fruits = ["apple", "banana", "orange", "grapes"];

for (let fruit of fruits) {
  console.log(fruit);
}

//output : apple, banana, orange, grapes

//7 Count Even Numbers
//Count how many even numbers are present between 1 to 50.

let evenCount = 0; 

for (let i = 1; i <= 50; i++) {
  
  if (i % 2 === 0) {
    evenCount++; 
  }
}
console.log("Total number of even numbers:", evenCount);

//output : Total number of even numbers: 25

//Functions 9
//Create a function named welcome() that prints:
//Welcome to JavaScript
function welcome() {
  console.log("Welcome to JavaScript");
}
welcome();

//output : Welcome to JavaScript

//10. Function with Parameter
//Create a function that accepts a name and prints:
//Hello Naveen

function greetUser(name) {
  console.log("Hello " + name);
}
greetUser("satham");

//output : Hello satham

//11. Add Two Numbers
//Create a function that takes 2 numbers and returns the addition.
//add(10,20)
function add(num1, num2) {
  return num1 + num2;
}
let result = add(10, 20);

console.log(result); // Output: 30

//12.12. Salary Bonus
//Create a function that adds bonus to employee salary.
//salary = 50000
//bonus = 5000

function calculateTotalSalary(salary, bonus) {
  return salary + bonus;
}
let baseSalary = 50000;
let annualBonus = 5000;

let totalPay = calculateTotalSalary(baseSalary, annualBonus);

console.log(totalPay); // Output: 55000


//13. Print all keys and values using for in loop
let student = {
    name: "Rahul",
    course: "JavaScript",
    marks: 95
};
for (let key in student) {
  console.log(key + ": " + student[key]);
}

//output : name: Rahul, course: JavaScript, marks: 95

//14. Find Largest Number
//Create a function to find the largest number between two values.
//largest(10,50)
function findLargest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
let result = findLargest(10, 50);
console.log(result); // Output: 50

//15
//Create an employee object and print:
//Employee Name
//Department
//Salary
//Salary after bonus
//Using:
//object
//function
//parameter
//console.log()

// 1. Create the Employee Object
let employee = {
    name: "SATHAM HUSSAIN",
    department: " softwareEngineering",
    salary: 50000
};

function displayEmployeeDetails(emp, bonusAmount) {
    let finalSalary = emp.salary + bonusAmount;

    console.log("Employee Name: " + emp.name);
    console.log("Department: " + emp.department);
    console.log("Salary: " + emp.salary);
    console.log("Salary after bonus: " + finalSalary);
}
displayEmployeeDetails(employee, 7000);

//output : Employee Name: SATHAM HUSSAIN, Department:  softwareEngineering, Salary: 50000, Salary after bonus: 57000