// class user{
//     constructor(username,email,pwd)
//     {
//         this.username = username;
//         this.email = email;
//         this.pwd = pwd;
//     }
//     encryptPassword(){
//         return`${this.pwd}abc`
//     }
//     changeUseranme(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const detail1 = new user("Aanchal","aanchal@gmail.com","123");
// console.log(detail1);

// const encPwd = detail1.encryptPassword();
// console.log(encPwd);   //123abc

// console.log(detail1.changeUseranme());  //AANCHAL


// Behind the scene
function user1(username,email,pwd){
    this.username = username;
     this.email = email;
    this.pwd = pwd;
}

user1.prototype.encryptPassword = function(){
    return`${this.pwd}abc`
}

user1.prototype.changeuser = function(){
    return`${this.username.toUpperCase()}`
}

const userdetail = new user1("Payal","payal@gmail.com","123")
console.log(userdetail.encryptPassword());
console.log(userdetail.changeuser());