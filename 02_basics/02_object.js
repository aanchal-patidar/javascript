/*************** Literal type object creation ******************/
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

/**************** Singleton type object Creation *********************/
//const obj = new Object()  // const obj = {}; // both are same
const obj1 = {2 : "a",3 : "b"}
const obj2 = {4:"d" , 7 : "y"}

const obj = {obj1 , obj2}

console.log(obj) // mearge two objects in one object with paranthesis but not in the proper way.

const obj3 = {...obj1,...obj2} // merge two arrays in proper ways
console.log(obj3)
const obj4 = Object.assign({},obj1,obj2) // we use cusly braces it is good practrice to use
console.log(obj4)

console.log(object.keys(details)) // It gives the keys in the form of arrays
console.log(object.values(details)) // It gives the values in the form of arrays
console.log(object.entries(details)) // It will convert every key value pair in the array form in array
console.log(details.hasOwnProperty("age")

const multiObj = [
    {
        name : "Riya",
        age : 14
    },
    {
        fullName : "Riya Patel",
        email : "riya@gmail.com"
    }
]
console.log(multiObj[1].fullName)


