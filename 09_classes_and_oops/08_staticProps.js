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
   static useContent(){
        console.log("using the content");
    }
}

const teacher1 = new Teacher("aanchal@gmail.com","123")
console.log(teacher1.useContent());   // it will show error it will not accessible or printable in child class or outside the class