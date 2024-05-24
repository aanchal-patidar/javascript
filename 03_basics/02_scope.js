 // globle scope

if(true){
    //local scope
    let a = 10 ; 
    const b = 20;
    var c = 30;
    console.log(a); // 10
    console.log(b); //20
    console.log(c); //30
}

console.log(a)  // not possible
console.log(b)  // not possible
console.log(c)  //  30  