const programming  = ["cpp","java","r" ,"rb"]

// declariing the function  of multiple ways


// programming.forEach(function(val){
//     console.log(val);
// })

// programming.forEach((item) => {
//     console.log(item);
// })


// function len(value){
//     console.log(value);
// }
// programming.forEach(len)


// we can pass three argument to the function - value , index and whole array , these are optional
programming.forEach((item,index,arr) => {
    console.log(item , index ,arr);
})

// we can pass multiple objecs in an array

const languages = [
    {
        name : "ruby",
        languageFileNmae : "ruby"
    },
    {
        name : "java",
        languageFileNmae : "java"
    },
    {
        name : "js",
        languageFileNmae : "javascript"
    }
]
 languages.forEach((item) => {
    console.log(item.name);      //ruby
                                // java
                                // js
 });


//  const pr = programming.forEach((item) => {
//     return item;
//  })

//  console.log(pr);  // undefined 
 // foreach does not return any value 

 const arr = [1,2,3,4,5,6,7,7,8]

//  const filteredArr = arr.filter((num) => (num > 4))
//  console.log(filteredArr);   // [5,6,7,7,8]

// we also do the same example with foreachloop

const newArr = []
const newArr1 = arr.forEach((item) => {
    if(item > 4)
        newArr.push(item);
})
console.log(newArr1);  // [5,6,7,7,8]

