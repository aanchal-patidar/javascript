const books = [
    {
        title : "book1",
        genre : "fiction",
        publish : 1981,
        edition : 2004
    },
    {
        title : "book2",
        genre : "Non-fiction",
        publish : 1982,
        edition : 2008
    },
    {
        title : "book3",
        genre : "History",
        publish : 1999,
        edition : 2007
    },
    {
        title : "book4",
        genre : "Non-fiction",
        publish : 1989,
        edition : 2010
    },
    {
        title : "book5",
        genre : "History",
        publish : 1986,
        edition : 1996
    }
]

// const myBook = books.filter((b) => (b.edition < 1900))
// console.log(myBook);    // []


const myBookGenre = books.filter((g) => (g.title == "book4"))
// console.log(myBookGenre);

const arr1 = [1,3,4,5,6,7,8,932,5,6,89]

const mul = arr1.map((num) => (num*2))  // if we use carly braces then we have to use return keyword 
// map return the value and store it.
// console.log(mul); // entire array multiply with 2 

// we can also use multiple methods in single statement
const arr2 = [33,43,53,63,73,83,93]

const newArr2 = arr2.map((num)=> (num*2))
                    .map((num) => (num+1))
                    .filter((num) => (num >= 150))
console.log(newArr2);  //[ 167, 187 ]


const number = [1,2,3,4,5,6,7]
const total = number.reduce((acc,curr)=> {
    return acc + curr
},0)
console.log(total);   //28

