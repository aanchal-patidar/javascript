const obj1 = {
    name : "Aanchal",
    age : 22,
    email : "aanchal@gmail.com",
    greeetingMsg :  function(){
         console.log(`${this.name} welcome to js`)
        // console.log(this);

    }

}
// obj1.greeetingMsg()
console.log(this);
obj1.name = "Arvi"
obj1.greeetingMsg()

// const welcome = function(){
//     console.log(this); 
// }


// arrow function
const welcome = () =>{
    console.log(this); 
}
welcome()

// another way of declaring the arrow function if we have single statement
const func1 = (num1 , num2) => (num1 + num2)
console.log(func1(2,4));  // 6

//if we want to return any object 
const func2 = () => ({name : "Payal"})
console.log(func2()); //{ name: 'Payal' }


// IIFE(Immediate invoked function expression)

(() => {
    console.log("Hii , How Are You ? ");
})();

//++++++++++++++++++++++++ Note ++++++++++++++++++++++++++++++
// we can declare multiple iif fucntions but we need to add semicolon at the end of the function
// we use IIFE function bcz of globle variable functions variables can be pollute sometimes to resolve it we use IIFE

(function func3() {
    console.log(" How Are You Doing ? ");
})()



/*******************************************************************************/

// this referse in  object act as an "current context" it prints whole object
// this referse in globle scope and print the empty object
// this referse in function as an globle it prints somthing which is relevent to the funtion
// this referse in the  arrow fucntion it print the empty object

// +++++++++++++++++++++++++ Note ++++++++++++++++++++++++++++++++++++++
// globle scope in the node environment is different and in browser is different 
// in node => It represent empty object
// in brower => it represent window object(global obj)


/*******************************************************************************/