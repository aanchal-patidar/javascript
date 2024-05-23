const myDate = new Date();
console.log(myDate);

console.log(myDate.getDate());
console.log(myDate.getMonth());
console.log (myDate.toDateString()) // give the readable format like Mon 23 Jan 2024 ...
console.log(myDate.toLocaleString()); // give normal format like 11-04-2023
console.log(myDate.getTime());
console.log(typeof(myDate)); // object

let createMyDate = new Date("04-08-2024"); // dd-mm-yyyy
// let createMyDate = new Date(2023,4,1,12,4);// y,m,d,h,m,s,ms
// let createMyDate = new Date(2023,12,30); // yyyy,mm,dd

let currDate = Date.now(); // current date in milisecond
let createTime = Math.floor(createMyDate.getTime()); // it is also in miliseconds so we can easily compare with dates 
console.log(currDate);
console.log(createTime);



