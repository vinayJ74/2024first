let obj={
    name:"vinay",
    yearofborn:10/23/1000
}
console.log(obj.name)
console.log(obj["name"])

let vin={
    "name":"hello world",// can also be written as string this object jaise upper hamne dekha
    "address":"ter baap ko bhej"
}
console.log(vin.name)



let jos={
    'last name':"joshi",
    fun:()=>{                       /// function can also be there
    console.log("tera baap seedhe maut") // use of this agar console m koi variable access karna chah raha hota toh 
    }
}
jos.fun()
console.log(jos["last name"])  

jos.name="item"// naya key pair dalne ke liye
console.log(jos.key="lawde")// object mein aise bhi nested tarike se bhi bana sakte hein oj=bject


let a="key2"// key 2 ko key bana diya a varibale leke and a ko value dedi jo key mein jaayegi
jos.key3="kya re"
jos[a]="tt shutdown"
console.log(jos.key3)
console.log(jos.key2)
console.warn("starting form heere")

for (let i in jos){
    console.log(i)  /// saare keys 
    console.log(jos[i])// saare values
}
//console.log(jos)

for (let i of Object.values(jos)&& Object.keys(jos)){  /// Object.keys(jos)
    console.log(i)
}

