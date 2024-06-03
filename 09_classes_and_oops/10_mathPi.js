// console.log(Math.PI);

let descriptor = Object.getOwnPropertyDescriptor(Math,"PI")  // to get the property of an object properties
console.log(descriptor);
// Object.defineProperty(Math,"PI",{
//     writable:true,
//     enumerable:true
// })
// const descriptor1 = Object.getOwnPropertyDescriptor(Math,"PI")  
// console.log(descriptor1);  // can not redefine the property of PI

const user = {
    name : "Aanchal",
    ischangable : false,
    
}

const des =  Object.getOwnPropertyDescriptor(user,"name")
console.log(des); 

// if want to change the properties of object's property

Object.defineProperty(user,'name',{
    writable: false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(user,'name'))
user.name = "Payal";
console.log(user.name);   // Aanchal






