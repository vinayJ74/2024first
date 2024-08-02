// it's like ki object ke andar kya kya ho raha hai 
// writable , ennumrable, configurable
// ennumerable key nahi dikhata if false jo Object.defineProperty(obj,"name",{})
let obj = {
    name: "vinay",
    "age": 22

}
console.log(obj)
let desc = Object.getOwnPropertyDescriptors(obj, "name")
console.log(desc)

let newdesc=Object.defineProperty(obj,"name",{
    value:"joshivinay",
    writable:false, // not able to change the vlaue 
    //enumerable:false,  this doesn;t let come name:vinay in output 
    configurable:false

})
console.log(obj.name)
obj.name="changeitvinay"
console.log(obj)

delete obj.age // this will delete 

for (let i of Object.keys(obj)){  /// aise hota hai 
    console.log(i)

}
for( let key in obj){
    console.log(obj[key])  // saare values 
}
 

  