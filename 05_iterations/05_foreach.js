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