const  fun1 = function(){
    console.log("Hello");
    console.log("Welcome");
    console.log("to js");
}

// fun1(); // it gives the output Hello Welcome to js 


// const sum = function(num1,num2)
// {
//     let s= num1+num2;
//     console.log(s);
// }
// sum()  // undefined
// sum(2,4) // 6



const sum = function(num1,num2)
{
   return num1+num2;
}
// sum(3,4) // it will not give us output bcz we are not displying the output 
const s = sum(4,6)
// console.log(s); //10



const logInuserName = function(username){
    return `${username} has logged in`
}

// logInuserName()                     // it will not return anything

// const user = logInuserName()
// console.log(user);                // undefined has logged in

const user = logInuserName("Aanchal")
console.log(user);                  //Aanchal has logged in


/*************************** defining functions in multiple ways ****************************/

 // spread operator take multiple arguments and it will return the bunch of values in the form of arrays
const calculateCartPrice = function(...price){
    return price;
}
 
console.log(calculateCartPrice(100,300,543,345)); // [ 100, 300, 543, 345 ]

// when we pass any object in the  function and we can pass object directly as well
const customer = {
    name : "Jaya",
    age : 23,
    price : 399
}

const custDetails = function(objName)
{
    return `${objName.price} Rs of item`
}

console.log(custDetails(customer)); //399 Rs of item


// when we pass any array in the function and we can pass array direclty in the function as well
const arrayName = [234,654,76,894]

const funName = function(arr)
{
    return arr[2]
}
console.log(funName(arrayName));  // 76


