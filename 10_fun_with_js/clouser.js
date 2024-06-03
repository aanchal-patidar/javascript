// laxical scoping - function inside another function

function outer(){
    let username = "Aanchal";
    // console.log(`outer ${secret}`);   // not accessible
    function  inner1(){
        let secret = "123abc"
        console.log(`inner 1 ${username}`);  // it will execute 
    }
    function  inner2(){
        console.log(`inner 2 ${username}`);  // it will execute 
        // console.log(`inside inner 2 ${secret}`);   // not accessible
    }
    inner1()
    inner2()
}
outer()
// console.log(`outer ${username}`);  // this will not execute because there is no username scope

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// closure 

function makeFunc()
{
    let name = "crome"
    function display(){
        console.log(`inner ${name}`);
    }
    return display // return the lexical scope (fucntion with its all variables)
}

const result = makeFunc()
console.log(result());