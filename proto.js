// prototype is a way to make a refrence object 
// other way is  __proto__   isko use karne ke liye pehle se hona jaruri hota hai object ka khud nahi banata 

var obj={
    name:"vinay",
    age:22
}


var obj3={
    fname:"joshi"
}
obj3.__proto__ = obj;
console.log(obj3.name) // agar obj3 mein nahi mila toh uske refrence mein dhooodega
obj2=Object.create(obj) // refrence object bna lega if obj2 doesn't exist toh ek empty object ban lega
console.log(obj2.name)
console.log(obj2)

var o=Object.create() // khaali use nahi kar sakte kuch parametre dena hi hoga
 