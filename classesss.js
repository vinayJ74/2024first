class Student
{ constructor(name,age){
    this.name=name;
    this.age=age;
}
greet(){
    console.log(`hello ${this.name}`)
}

}
let a= new Student("vinay",17)
a.greet()
console.log(a)

class User{
    constructor(name,rollno){
        this.name=name;
        this.rollno=rollno
    }
     greet(){        // function inside class is methods without the function keyword
        console.log("say hi ") 

    }
}

let b=new User("vinay joshi",21); // agar isko khaali bhi chodenge toh bhi kuch anhi hoga
b.greet()
console.log(b)

console.log(typeof User)
console.log( User.prototype.greet)