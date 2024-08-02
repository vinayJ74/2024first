// set mein other datatypes bhi le sakte hein but in cpp only one type of datatype is ther in it


let arr=[233,4,6,6,6,7,7]
let s=new Set(arr)
console.log(s)
s.add("hello") // differnt types of datatype le sakta hai 
let length=0;
for (let i of s){ // iterable hai 
   ++length
}
console.log(length)
 /// 