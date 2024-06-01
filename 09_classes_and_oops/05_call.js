function setusername(userName){
    this.userName = userName;

}

function user(userName,email,password){
    // setusername(userName)  // directly this fucntion can not get the value of another function
    setusername.call(this,userName);  // call keyword give the refernce to the another user and this this keyword holds the returned value
    this.email = email
    this.password = password
}

const details = new user("Aanchal","aanch@gmail.com",'1234')
console.log(details);