const languages = {
    js : "javascript",
    cpp : "c++",
    swift : "swift by the apple",
    rb : "ruby"
}

for (const key in languages) {
//    console.log(langu/ages[key]); // all values will be displayed
    // console.log(key)  // all the keys will be displays
}

const arr = [1,3,4,5,67,8]
for (const key in arr) {
    // console.log(`${key} = ${arr[key]}`);  // give all the keys and value pairs
    }


const map = new Map()
map.set("key1","banana")
map.set("key2","grapes")
map.set("key3", "watermalon")

// console.log(map);

for (const key in map) {
   
        console.log(key);  // nothing will print , map is not worked in for-in loop
    
}

