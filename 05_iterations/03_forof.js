const number  = [1,3,4,55,67,88,9,89]

for (const num of number) {
    // console.log(num); // printe all the numbers
}

const greeeting = "Hello Welcome"
for (const greet of greeeting) {
    // console.log(greet);  // printe all laters
}

// map
const map = new Map()
map.set("key1","banana")
map.set("key2","grapes")
map.set("key3", "watermalon")
// console.log(map);               //Map(3) {
                                //     'key1' => 'banana',
                                //     'key2' => 'grapes',
                                //     'key3' => 'watermalon'
                                //   }
for (const [key,value] of map) {
    // console.log(key);            //[ 'key1', 'banana' ]
                                // [ 'key2', 'grapes' ]
                                // [ 'key3', 'watermalon' ]
     console.log(key , ":-" , value); 
                                // key1 :- banana
                                // key2 :- grapes
                                // key3 :- watermalon//
}

const obj = {
    game1 : "obj1",
    game2 : "obj2",
    game3 : "obj3"
}

// for (const [key,value] of obj) {
//     console.log(key , "=" , value);  // it is not possible, object is not iterable using for-of loop
// }

