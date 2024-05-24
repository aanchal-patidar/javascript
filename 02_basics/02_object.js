
const sym = Symbol("MySymbol")
// we have to define sym in square braces to treat as an symbol otherwise it will treat string`
const details = {
    name : "Aanchal",
    [sym] : "My key1",    
    "full Name" : "Aanchal Patidar",
    age : 22,
    id : 1,
    email: "aanchalpatidar@gmail.com"
}
console.log(details.id);  // not to prefer accessing the data of the object
console.log(details["email"]);
console.log(details["fullName"]); // always prefer to use this method to access the data because of below example
// console.log(details.full name); // this is not possible

// console.log(details.sym); // this is the not the correct way to access symbols
//correct way
console.log(details[sym]);

details.email = "aanchal@google.com";
console.log(details.email);

// Object.freeze(details);
// details.email = "aanchal@microsift.com";
// console.log(details.email);   // it will not change bcz we lock the object

details.greeting = function(){
    console.log("welcome to learn js");
}

console.log(details.greeting()); // it will return the output
console.log(details.greeting); // it will return the function

details.greetingtwo = function(){
    console.log(`welcome to learn js ${this["full Name"]}`);  // this refers to the ciurrent object
}
console.log(details.greeting()); 



