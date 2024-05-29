const promiseOne = new Promise((resolve,reject)=> {
    // console.log("promise One ");
    resolve()
}) 
promiseOne.then(()=>{
    // console.log("after then");
})


new Promise((resolve,rejecte)=>{
    // console.log("Promise two");
    resolve()
}).then(()=> {
    // console.log("after then console");
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve ({username : "aanchal",id : 123})
    },1000)
})
promiseThree.then((user)=>{
    // console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
        setTimeout(() => {
            error = false
            if(!error){
                resolve ({username : "aanchalpatidar",id : 123})
            }else{
                reject("ERROR : Somthing went wrong")
            }
                 
        }, 1000);
})

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((user)=>{
//     console.log(user);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("succefully resolved or rejected");
// })


// async function consumePromiseFive(){
//     try {
//         const resolve = await promiseFour
//         console.log(resolve);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function consumePromisesix(){
//     try {
//         const response = await fetch('https://api.github.com/users/aanchal-patidar')
//         const jsonformat = await response.json()
//         console.log(jsonformat);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromisesix()

fetch('https://api.github.com/users/aanchal-patidar')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log("E : error in fatching the data");
})
