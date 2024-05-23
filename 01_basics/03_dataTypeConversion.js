let score = 1;


//conversion of other to number
/* 
"33" => 33
"33abc" => NaN
"boolean" => true - 1/ false - 0
null => 0
undefined => NaN
*/
console.log(score)
console.log(typeof(score))
// let stringtoNum = Number(score);



/*
converson of other datatype to string
33 => "33"
null => null
undefined => undefined
 */
// let otherToString = String(score);
// console.log(otherToString)


/*
Conversion in boolean
1=> true
0=> false
""=> false
"abhd" => true
*/
let otherToboolean = Boolean(score);
// console.log(otherToboolean)


//*************************** operations ****************************************/


let a = 2
let c = "3"
let b = 3

let sum = a+b+c
console.log(sum);

/* 2+"3" => 23 
    "2"+3 => 23
    2+3+"7" =>57
    "3"+5+5 => 355
    "3"+"7"=> 37
    
    Arithmatic operations
    add => 2+3
    sun => 2-3
    mul => 2*3
    div => 4/3
    mod => 3%3


*/
str1 = "Aanchal"
str2 = "Patidar"

let S = str1+str2 
console.log(S)