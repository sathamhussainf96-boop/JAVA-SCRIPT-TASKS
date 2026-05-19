// Task 1. API Task - User Names Uppercase
// API:
// https://jsonplaceholder.typicode.com/users
// Fetch all users.
// Use map()
// Convert all usernames to UPPERCASE.
// Print new array.

async function fetchAndUppercaseUsernames() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const uppercaseUsernames = users.map(user => {
      return user.username.toUpperCase();
    });
    console.log("Uppercase Usernames:", uppercaseUsernames);

  } catch (error) {
    console.error("Oops, something went wrong fetching the data:", error);
  }
}

fetchAndUppercaseUsernames();

// output : UpperCase Usernames: [ 'BRET', 'ANTONETTE', 'Samantha', 'Karianne', 'Kamren', 'Leopoldo_Corkery', 'Elwyn.Skiles', 'Maxime_Nienow', 'Delphine', 'Moriah.Stanton' ]

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Task 2. API Task - Expensive Products
// API:
// https://fakestoreapi.com/products
// Fetch products.
// Use filter()
// Print products price greater than 100.

async function fetchExpensiveProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    
    const products = await response.json();
    const expensiveProducts = products.filter(product => {
      return product.price > 100; 
    });
    console.log("Products over $100:", expensiveProducts);

  } catch (error) {
    console.error("Uh oh! Could not fetch the products:", error);
  }
}
fetchExpensiveProducts();

//output : Products over $100: [ { id: 1, title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', price: 109.95, description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', category

//----------------------------------------------------------------------------------------------------------------------------------------------------

// Task 3. Date Concept Task - Digital Clock
// Create one Date object.
// Print:
// current hours
// current minutes
// current seconds


const now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;
const digitalClockString = `${hours} : ${minutes} : ${seconds}`;
console.log(digitalClockString);

//output : 17 : 45 : 30 (example output, actual output will vary based on current time)
//-----------------------------------------------------------------------------------------------------------------------------------------------

// 4. String Concept Task - Username Checker
// Create one string:
// "   Naveen Kumar   "
// Remove spaces using trim().
// Convert into uppercase.
// Check string includes "KUMAR".
// Print final output.


const Username = "   Naveen Kumar   ";
const trimmedUsername = Username.trim();

const uppercaseUsername = trimmedUsername.toUpperCase();

const hasKumar = uppercaseUsername.includes("KUMAR");

console.log("Original String: '" + Username + "'");
console.log("Cleaned & Uppercased: '" + uppercaseUsername + "'");
console.log("Does it include 'KUMAR'?:", hasKumar);

//output : Original String: '   Naveen Kumar   '
// Cleaned & Uppercased: 'NAVEEN KUMAR'
// Does it include 'KUMAR'?: true

//--------------------------------------------------------------------------------------------------------------------------------------------------


// 5. Array Concept Task - Student Rank System
// Create one array:
// [450, 300, 700, 200, 900]
// Sort marks high to low.
// Print top 3 marks only using slice().


const studentMarks = [450, 300, 700, 200, 900];
const sortedMarks = studentMarks.sort((a, b) => {
  return b - a; 
});
const topThreeMarks = sortedMarks.slice(0, 3);
console.log("All Marks :", sortedMarks);
console.log("Top 3  Marks:", topThreeMarks);


//output : All Marks : [ 900, 700, 450, 300, 200 ]
// Top 3  Marks: [ 900, 700, 450 ]