function Person(name,age){
    let person=Object.create(obj)
    person.name=name
    person.age=age      // bada p lagake sahi nahi hora hai 
    
    return person


}
var obj={
    fn:function greet(){
        console.log("hello vinay")
    },
    dongreet(){            // aise function bhi dal sakte hein unlike upper ka jaisa
        console.log("kaisa hai re tu")
    }
}
let a=Person("Vinay",20)
 a.dongreet() // aise bhi ya toh 
console.log(a.fn)
console.log(Person.prototype)