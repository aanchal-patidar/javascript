class user{
    constructor(username,pwd){
        this.username = username;
        this.pwd = pwd
    }

    logMe(){
        console.log('I am logged');
    }
}

class Teacher extends user{
    constructor(email,pwd){
        super(pwd)
        this.email = email
    }
    useContent(){
        console.log("using the content");
    }
}

const teacher1 = new Teacher("aanchal@gmail.com","123")
console.log(teacher1.useContent());

const user1 = new user("aanchal","2345")
console.log(user1.logMe());

// console.log(teacher1 instanceof user1);
console.log(teacher1 instanceof Teacher); // true
console.log(user1 instanceof Teacher);  // false


