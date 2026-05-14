//Task 1 — Student Registration Form
//Create a program using:
//prompt()
//variables (let, const)
//console.log()
//Requirements:
//Ask student name
//Ask department
//Ask age
//Print all details using template string
//Example Output:
//Welcome Naveen
//Department: CSE
//Age: 20

const studentName = prompt("Enter your name:");
const department = prompt("Enter your department (e.g., CSE, EEE, ECE):");
const age = prompt("Enter your age:");

const registrationDetails = `Welcome ${studentName}\nDepartment: ${department}\nAge: ${age}`;

console.log(registrationDetails);

//output :
//Welcome satham
//Department: EEE
//Age: 25

//---------------------------------------------------------------------------------------------------------------------
//Task 2 — ATM Withdrawal System
//Use:
//if else
//comparison operators
//logical operators
//Requirements:
//User balance = 10000
//Ask withdrawal amount
//If amount <= balance → "Transaction Successful"
//Else → "Insufficient Balance"
//Bonus:
//Minimum withdrawal = 100


const balance = 10000;
const minWithdrawal = 100;


let amount = Number(prompt("Enter amount to withdraw:"));


if (amount > balance) {
    console.log("Insufficient Balance");
} 
else if (amount < minWithdrawal) {
    console.log(`Transaction Failed. Minimum withdrawal is ${minWithdrawal}.`);
} 
else if (amount <= balance && amount >= minWithdrawal) {

    console.log("Transaction Successful");
    console.log(`Remaining Balance: ${balance - amount}`);
} 
else {
    console.log("Invalid input. Please enter a valid number.");
}

//output :Enter amount to withdraw:1000
//        Transaction Successful
//        Remaining Balance: 9000 

//-----------------------------------------------------------------------------------------------------------------------------


//Task 3 — Swiggy Discount Checker
//Use:
//ternary operator
//Requirements:
//If order amount > 499
//Show:
//"Free Delivery Available"
//Else:
//"Delivery Charges Applied"

const orderAmount = Number(prompt("Enter your order amount:"));

const status = (orderAmount > 499) ? "Free Delivery Available" : "Delivery Charges Applied";
console.log(status);

//output :Enter your order amount:600
//        Free Delivery Available

//----------------------------------------------------------------------------------------------------------------------------


//Task 4 — Instagram Login System
//Use:
//nested if
//Requirements:
//Correct username = "admin"
//Correct password = "1234"
//Conditions:
//If username correct → ask password
//If password correct → Login Success
//Else → Wrong Password
//Else → Invalid Username




const correctUsername = "satham";
const correctPassword = "1234";

const inputUsername = prompt("Enter Username:");


if (inputUsername === correctUsername) {
    
    const inputPassword = prompt("Enter Password:");

    if (inputPassword === correctPassword) {
        console.log("Login Success");
    } else {
        console.log("Wrong Password  GetLost!");
    }

} else {

    console.log("Invalid Username");
}

//output :Enter Username:satham
//        Enter Password:1234
//        Login Success

//-------------------------------------------------------------------------------------------------------------------------------

//Task 5 — Traffic Signal System
//Use:
//switch statement
//Requirements:
//Input:
//red / yellow / green
//Output:
//STOP
//READY
//GO


const signal = prompt("Enter signal color (red/yellow/green):").toLowerCase();

switch (signal) {
    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal Color");
}

//output :Enter signal color (red/yellow/green):green
//        GO

//-------------------------------------------------------------------------------------------------------------------------------

//Task 6 — Employee Salary Calculator
//Use:
//function
//parameters
//return
//Requirements:
//Create function salaryCalculation
//Basic salary + bonus
//Return total salary
//Example:
//salaryCalculation(25000,5000)
//Output:
//30000


function salaryCalculation(basicSalary, bonus) {
    const total = basicSalary + bonus;
    return total;
}
const result = salaryCalculation(25000, 5000);
console.log(result);

//output :30000

//-----------------------------------------------------------------------------------------------------------------------------


//Task 7 — E-Commerce Cart Total
//Use:
//Array
//for loop
//Requirements:
//Store product prices inside array:
//[100,200,300,400]
//Find:
//Total price
//Average price

const prices = [100, 200, 300, 400];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total += prices[i]; 
}
const average = total / prices.length;
console.log(`Total Price: ${total}`);
console.log(`Average Price: ${average}`);

//output : Total Price: 1000
//         Average Price: 250

//----------------------------------------------------------------------------------------------------------------------------------


//Task 8 — WhatsApp Contact Book
//Use:
//Object
//for in loop
//Requirements:
//Store:
//name
//phone
//status
//Print all details dynamically.

const contact = {
    name: "SATHAM HUSSAIN",
    phone: "+91 xxxxx xxxxx",
    status: "At the gym "
};
console.log("--- Contact Details ---");

for (let key in contact) {

    console.log(`${key.toUpperCase()}: ${contact[key]}`);
}

//output :--- Contact Details ---
//         NAME: SATHAM HUSSAIN
//         PHONE: +91 xxxxx xxxxx
//         STATUS: At the gym


//---------------------------------------------------------------------------------------------------------------------


//Task 9 — Movie Ticket Booking
//Use:
//function
//callback function
//Requirements:
//Create:
//bookTicket()
//payment()
//After booking complete,
//callback payment function automatically.

function payment() {
    console.log("Processing payment... Payment Successful! ");
    console.log("Your tickets have been sent to your email.");
}
function bookTicket(movieName, callback) {
    console.log(`Booking ticket for: ${movieName}...`);
    console.log("Seat confirmed!");

    callback(); 
}
bookTicket("jamesbond: NoTime TO Die", payment);

//output :Booking ticket for: jamesbond: NoTime TO Die...
//         Seat confirmed! 
//         Processing payment... Payment Successful! 
//         Your tickets have been sent to your email.


//----------------------------------------------------------------------------------------------------------------------


//Task 10 — Food Delivery Time Tracker
//Use:
//Generator Function
//Requirements:
//Show order stages one by one:
//Order Confirmed
//Preparing Food
//Out for Delivery
//Delivered


function* trackDelivery() {
    yield "Order Confirmed ";
    yield "Preparing Food ";
    yield "Out for Delivery ";
    yield "Delivered ";
}
const deliveryStatus = trackDelivery();
console.log(deliveryStatus.next().value); 
console.log(deliveryStatus.next().value); 
console.log(deliveryStatus.next().value); 
console.log(deliveryStatus.next().value); 

//output :Order Confirmed
//         Preparing Food 
//         Out for Delivery 
//         Delivered

//--------------------------------------xxxxxxxxxxxxxxxxxxxxxxxxxxx------------------------------------------------------------
