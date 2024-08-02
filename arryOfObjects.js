let arr=[{user:"vinay",greet:"kaise ho"},
    {user:"aashutosh",greet:"chal nikal bhosdike"}]




    let [{user},{user:name2}]=arr;  /// name print karna ho bas toh 
    console.log(user)
    console.log(name2)   /// print the name vinay here 
//aconsole.log(arr[0])
for(let i in arr){
    console.log(arr[i])// all pairs
   // console.log(i)// just 012
}
for(let i of arr){
    console.log(i) // full arr of objefcts
}


 