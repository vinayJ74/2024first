// map mein keys numerical value bhi hoti hai unlike objects mein keval string
let map=new Map([[1,'one'],["fnane","vinay"],["whole number",[1,2,23,44]]]);
console.log(map)
console.log(map.get(1))  // .get operator

var map2=new Map;
map2.set("name","joshi")  // .set operator
console.log(map2)
var k=map2.values() // similar hi hota hai Object.keys(jos) mein
for(var j of k){  //
    console.log(j)
}