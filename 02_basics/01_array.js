const arr1 = [1,3,4,56,6,7];
console.log(arr1);


// const arr = new Array(1,2,4); // another declaration of an array
console.log(arr1[2]);
console.log(arr1.includes(4));
console.log(arr1.length);
console.log(arr1.indexOf(56));
console.log(arr1.push(23));
console.log(arr1.push(45));
console.log(arr1.pop());
console.log(arr1.shift());
console.log(arr1.unshift(21));

const arr2 = arr1.join();
console.log(arr2); // it will join and convert nthe arrayt into string format

console.log(arr1.slice(1,3)); // it will return the index 1 and 2 not include 3rd index ,and it will not change original array
console.log(arr1.splice(1,3)); // it will return the index 1 and 3 index ,and it will change original array


const marvel = ["iron","thor"];
const bc = ["Bat","spider"];

// const all = marvel.push(bc);
// console.log(all); // it will not give us proper output.//array inside array

// const all1= marvel.concat(bc);
// console.log(all1); // it will give proper output in single array or merge the array

// const all3 = [...arr1,...arr2]  // spead the elements of the arrays
// console.log(all3);


// if we have array inside multiple array then we use flat method

const all4 = [2,4,5,7,[3,6,8,9],4,6,[8,6,9,[2,3,5,[6,5,8]]]];
console.log(all4.flat(Infinity));  // infinity shows the depth of the array we want to in single line array


console.log(Array.isArray("Aanchal")); // false
console.log(Array.from("Aanchal")); // per character spread by indexing

let score1 = 23
let score2 = 45
let score3 = 34

console.log(Array.of(score1,score2,score3)); // it will retiuren an array including all elements which we passed

