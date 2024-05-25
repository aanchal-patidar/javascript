
// for (let i = 0; i < 10; i++) {
//     console.log(i);    
// }


// const arr = [10,20,30,40]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// Nested loop
for (let i = 0; i <10; i++) {
    for (let j = 0; j < 10; j++) {
        if(j == 5)
            continue;   // it  will skip the iteration  of 5
    console.log(`${i}   ${j}`);
    }
    
}
// for (let i = 0; i <10; i++) {
//     for (let j = 0; j < 10; j++) {
//         if(j == 5)
//             break;   // it  will break from the 5
//     console.log(`${i}   ${j}`);
//     }
    
// }