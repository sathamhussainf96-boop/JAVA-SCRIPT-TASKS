//section 1 variables

var a =10;
a = 15;
console.log(a);

//output= 15

//2
let b = 20;
let b = 30;

//Ans = JavaScript doesn't allow you to redeclare the same variable name using let in the same scope.

// 3
const c = 50;
console.log(c);
//output =50

// 4 identify error
const x =10;
x = 20;
//Ans = JavaScript doesn't allow you to reassign a value to a constant variable. Once a value is assigned to a constant, it cannot be changed.

// 5
var p =5;
var p = 10;
console.log(p);
// output =10

// 6 
let q = 25;
q = q + 10;
console.log(q);
 // output = 35

// 7
const r  =7;
console.log(r + 3);
// output = 10

// Fill correct Keyword:

let a = 10;

// Section 2: Console Methods

// 9: which metod print normal output?
      console.log("Hello, World!");
// 10:Which method shows warning ?
      console.warn("This is a warning!");
// 11:Which method shows error?
      console.error("This is an error!");
// 12 what does this do?
       console.clear();
// Ans: The console.clear() method is used to clear the console of all previous messages and outputs.

// Section 3: Data Types:

// 13:
     let a = "hello";
     console.log(typeof a);
     // output = string

 // 14:
      let b = 100;
      console.log(typeof b);
      // output = number

// 15:
      let c = false;
      console.log(typeof c);
      // output = boolean
// 16:
     let d;
     console.log(typeof c);
     // output =  undefined 
// 17:
     //what is type of null?
        // Ans: The type of null in JavaScript is "object". 
        // This is a quirk in the language and is considered a bug, but it has been retained for backward compatibility.
// 18:
     //Convert string to number: "25"
       let num = Number("25"); // 25

// Section 4 : Arrays 

// 19.create array of 3 fruits
let fruits = ["apple", "banana", "orange"];

// 20 :
    let arr = ['a','b','c'];
    console.log(arr[1]);
    // output = b

// 21 :
     let arr = ["x","y","z"];
     console.log(arr[arr.length-1]);
     //output = z

// 22 = How to get first element?
        const fruits = ["Apple", "Banana", "Cherry"];
        const first = fruits[0];
          // output = "Apple"
// 23 :
       let arr = ["apple","banana"]
       console.log(arr.length);
       // output = 2
// 24 : add new element to array ?
        const fruits = ["Apple", "Banana"];
        fruits.push("Cherry"); 
       // Result: ["Apple", "Banana", "Cherry"]


// Section 5 : objects :

// 25 = create objects  with name & age ?
        const person = {
            name: "Satham",
            age: 29
};

// 26 : 
     let obj = {name:"Naveen"};
     console.log(obj.name);
     //output = Naveen

// 27 :
   let obj = {
      fruits : ["apple", "banana"]
   };
   console.log(obj.fruits[1]);
   //output = banana

// 28 = How to access last element inside object array?
      const users = [
       { name: "Satham", age: 29 },
       { name: "Arun", age: 27 },
       { name: "John", age: 23 }
];

     const lastUser = users.at(-1);

     console.log(lastUser.name); // "John"
     console.log(lastUser.age);  // 23

// Section 6 : Arthmetic Operators?
// 29: 
      console.log(5 + 3);
      // output = 8
// 30:
      console.log(10 % 3);
      // output = -1
// 31:
     console.log(2 ** 3);
     //output = 8
// 32:
     console.log(10 / 2);
     // output = 5

//Section 7 :Increment /Decrement

// 33:
     let a = 5;
     a++;
     console.log(a);
     //output = 6
// 34: 
     let b = 5;
     let c = b++;
     console.log (b,c);
     //output = 6,5
// 35:
     let x = 5;
     let y = ++x;
     console.log(x,y);
     // output = 6,6

// 36:
     let m = 3;
     let n = m--;
     console.log(m,n);
     // output = 2,3

//Section 8 : Comparison Operators:

//37:
    console.log(5 == "5");
    // output = true
//38:
   console.log(5 === "5");
   //output  = false
//39:
   console.log(true && false || true);
   // output = true

//Section 9: Ternary Operator:
//40:
    5 > 3 ? console.log("yes") : console.log("No");
    // output = yes
    

     
 

