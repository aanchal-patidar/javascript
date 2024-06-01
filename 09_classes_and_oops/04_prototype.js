const myName = "Aacnhal        ";
// console.log(myName.length);


String.prototype.trueLength = function(){
    // console.log(`${this}`);  // Aanchal with spaces
    console.log(`${this.trim().length}`); 
}
myName.trueLength();  // original length // 7


let myHeroes = ["thor","spiderman"]
let herosPower = {
    thor: "hammer",
    spiderman : "sling",
    getpower : function(){
        console.log(`power is ${this.spiderman}`);
    }    
}

Object.prototype.payal=function(){   // this applies to all objects - arrays , objects  and functions
    console.log(`payal is present in all the objects`);
}


// herosPower.payal();
// myHeroes.payal();
Array.prototype.hero = function(){
    console.log(`this is in array `);
}
myHeroes.hero();   //this is in array 
// herosPower.hero();   // it is not possible to get array  method inside functions

// inheritance

const user = {
    name : "Aanchal",
    email : 'aanchal@gmail.com'
}
const teacher = {
    makeVedio : true
}

const teachingSupport = {
    isAvail : true
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime : true,
    __proto__ : teacher
}

teacher.__proto__= user  
console.log(teacher.name);  // teacher inherited user properties

Object.setPrototypeOf(teachingSupport,teacher) 

// console.log(teachingSupport.makeAssignment); // it is showing undefined because teaching support inherited teacher prperties only
// console.log(TASupport.makeVedio);  // TASupport inherited teacher


