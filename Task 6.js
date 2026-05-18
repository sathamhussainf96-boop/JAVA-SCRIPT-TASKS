 // 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array


const presentStudents = ["Ranjith", "Kumar", "Satham"];
const absentStudents = ["Hussain", "Ramu"];
const allStudents = [...presentStudents, ...absentStudents];

allStudents.push("Jasima");

console.log(allStudents);

//output : [ 'Ranjith', 'Kumar', 'Satham', 'Hussain', 'Ramu', 'Jasima' ]

//-----------------------------------------------------------------------------------------------------------------------------------------------

// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object


const mobileDetails1 = {
  brand: "Oppo",
  model: "F33 Pro 5G",
  price: 27000
};

const chargerDetails1 = {
  chargerType: "USB-C Fast Charger",
  wattage: "20W"
};


const finalCartItem = {
  ...mobileDetails1, 
  ...chargerDetails1, 
  deliveryDate: "2026-05-20"
};

console.log(finalCartItem);

//output : { brand: 'Oppo', 
//           model: 'F33 Pro 5G', 
//           price: 27000, 
//          chargerType: 'USB-C Fast Charger',
//          wattage: '20W', 
//          deliveryDate: '2026-05-20' }


//-----------------------------------------------------------------------------------------------------------------------------------------------

// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item


function orderFood(...items) {
  
  console.log(`Total items ordered: ${items.length}`);
  
  console.log(`First item: ${items[0]}`);
  

  console.log(`Last item: ${items[items.length - 1]}`);
}

orderFood("Mutton Briyani", "Chicken 65", "Chicken Tikka Masala", "Ice Cream");

//output : Total items ordered: 4
//         First item: Mutton Briyani
//         Last item: Ice Cream

//------------------------------------------------------------------------------------------------------------------------------------------------


// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees

const employees = [
  { name: "SATHAM", department: "Python developer", salary: 42000 },
  { name: "Kumar", department: "HR", salary: 75000 },
  { name: "Manoj", department: "Manager", salary:800000},
  { name: "Michle", department: "Back End Developer", salary: 52000 },
  { name: "Priya", department: "Front End Developer", salary: 48000 },
  { name: "Nishar", department: "UIUX", salary: 48000 },
  { name: "Ranjith", department: "FullStack developer", salary: 34000 }
];

const highEarners = employees.filter(emp => emp.salary > 50000);

console.log(highEarners);

//output:
//  [
//  { name: 'Kumar', department: 'HR', salary: 75000 },
//  { name: 'Michle', department: 'Back End Developer', salary: 52000 }
//  ]
 


//---------------------------------------------------------------------------------------------------------------------------------------------


// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total


const scores = [150, 230, 95, 420, 110];

const totalScore = scores.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); 

console.log(`Final Total Score: ${totalScore}`);


// output:   Final Total Score: 1005