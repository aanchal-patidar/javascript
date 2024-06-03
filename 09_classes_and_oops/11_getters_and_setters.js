
// 1. Getter and setter by using class
class user{
    constructor(username,email,pwd){
        this.username  = username;
        this.pwd = pwd
        this.email = email
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get pwd(){
        return this._pwd.toUpperCase()
    }
    set pwd(value){
        this._pwd = value
    }
}

const user1 = new user("Aanchal",'a@gmail.com',"123")
console.log(user1.email);       // RangeError: Maximum call stack size exceeded
                                // if we use same variable name in constructor and get, set method then we get above error
                                // variable name should be differnt in constructor and get,set method


//2. Getter and setter method by using defineProperty
function contact(name1,mob){
    this._name1  = name1
    this._mob = mob

    Object.defineProperty(this,"mob",{
        get: function(){
            return this._mob
        },
        set: function(value){
            this._mob = value
        }
    })
}

const comm = new contact("Aanchal","27685465865")
console.log(comm.mob);


//3. Getters and setters method by using object
const fruit = {
    _name: "mango",
    _taste : "sweet",

    get name(){
        return this._name
    },
    set name(value){
        this._name = value
    },
    get taste(){
        return this._taste
    },
    set taste(value){
        this._taste = value
    }
}

const kingOfFruits = Object.create(fruit)
console.log(kingOfFruits.taste);

