//JavaScript Tasks – Type Casting & Flow Control
//Task 1 – Predict the Output
console.log("10" + 5)
//output : "105"
console.log(10 + true)
//output: 11
console.log(false + null)
// output: 0
console.log("Hello" + undefined)
//output : "Helloundefined"
console.log([1,2] + 5)
//output : "1,25"



//Task 2 - Implicit Type Casting

//1.String + Number
let a = "Age: " + 29;
console.log(typeof a); // output : "string"

//2.Boolean + Number
let b = true + 10;
console.log(typeof b); // output : "number"

//3. Array + string
let c = [1,2] + "Hello";
console.log(typeof c); // output : "string"

//4. object + string
let d = {} + 5;
console.log(typeof d);   // Output: "string"

//5. Null + Number
let e = null + 100;
console.log(typeof e); // output: "number"



//3 Task3 - Explicit Type Casting
// Converting values to Number
console.log(Number("500"));   // Output: 500
console.log(Number(true));    // Output: 1
console.log(Number(false));   // Output: 0
console.log(Number(null));    // Output: 0
console.log(Number("abc"));   // Output: NaN (Not a Number)
console.log(Number([100]));   // Output: 100


//Task 4 - Boolean Constructor

console.log(Boolean(""));            // flase
console.log(Boolean("javascript")); // true
console.log(Boolean("0"));          // true
console.log(Boolean(1));            // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true


//Task 5 - Student Pass or Fail

let mark = 45;

if (mark >= 35) {
    console.log("Result: Pass");
} else {
    console.log("Result: Fail");
}

//output : "result: pass"

//Task 6 - Voting Eligibility

let age = 20;

if (age >= 18) {
    console.log("Status: Eligible to vote");
} else {
    console.log("Status: Not Eligible to vote");
}
//output : "Status: Eligible to vote"


//Task 7 - Greatest Number
let a = 50;
let b = 80;
let c = 30;

if (a >= b && a >= c) {
    console.log("The greatest number is a: " + a);
} else if (b >= a && b >= c) {
    console.log("The greatest number is b: " + b);
} else {
    console.log("The greatest number is c: " + c);
}
 //output : "The greatest number is b: 80"


 //Task 8 -  Traffic Light

 let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal Color");
}
//output : "Stop"

//Task 9 Login System

let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Invalid Login: Incorrect Password");
    }
} else {
    console.log("Invalid Login: User not found");
}
//output : "Login Success"


//Task 10 - Time of Day Greeting

let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
} else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
} else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
} else if (hour >= 20 && hour <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Hour");
}
//output : "Afternoon"


//Bonus Challenge 
console.log(true + true)  //output : 2
console.log("5" - 2)    //output : 3
console.log("5" + 2)   //output : "52"
console.log(null + 1)  //output : 1
console.log(undefined + 1) //output : NaN
console.log(Boolean(" ")) //output : true
console.log(Number(true)) //output : 1