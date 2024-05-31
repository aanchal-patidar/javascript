// object literal

const user = {
    username : 'Aanchal',
    isLoggedIn : true,
    loggedOut : false,
    greetings : ()=> {
        // console.log(`greeting to the ${this.username}`);
        console.log(this);              //this keyword is not work in arrow functionit will not print all information about this object
    }

}
// console.log(this);              // print empty object becasue it is available in the node environment
// console.log(user.username);
// console.log(user.greetings());

// using constructor literral
function Myfunction(usernamne,isLoggedIn)
{
    this.username = usernamne
    this.isLoggedIn = isLoggedIn
    return this;

}

// new keyword is create  new instance for different parameters
const details1 = new Myfunction("Aanchal",true)
const details2 = new Myfunction("Payal",false)
console.log(details1);
console.log(details2);
