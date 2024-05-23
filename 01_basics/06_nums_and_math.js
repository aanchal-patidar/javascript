const num = 300

console.log(num);

const num1 = new Number(200);
console.log(num1);

console.log(num1.toFixed(1)); // after decimal point digits
console.log(num1.toString().length); // converted into string and perform all operation like string

const num2 = 234.6908978;
console.log(num2.toPrecision(3)); // for precise value give number of digits like 235

const num3 = 10000000;
console.log(num3.toLocaleString('en-IN')); // separated by comma according to indian standard

// **************************** Math **********************************
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.max(4,7,9,34));
consol.log(Math.min(2,65,78,43,9))
console.log(Math.floor(4.987));
console.log(Math.ceil(4.987));
console.log(Math.round(4.987));

console.log(Math.random()); // any random value between 0 and 1
console.log(Math.floor(Math.random()*10)+1); // any random integer value greater then 1 like 3,6,5 etc.

const min  = 10;
const max = 20;

// for set the max and min range for random number generation
console.log(Math.floor(Math.random()*(max-min+1))+min); // we generate random numbers between 10 and 20.

