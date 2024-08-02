var state={name:"vinay",age:18,address:"hdiihd"};
var copy={...state};  
copy.name="joshi";
// console.log(copy);
var {name,age}=state;
var {name,...game}=copy; // jo baad m aaya uska naam print hoga
// object m key likhana jaruri hai destructuing m but array m nahi kuch bhi naam likh sakte hein 
console.log(game)
console.log(name)


var arr=[1,3,4,5,6];
var [f,...three]=arr;
console.log(three)
 

const arr1=()=>{
   console.log(" fat arrow function ");
}

const inst=(val)=>{  // ek hi parameter toh hata sakte hein  1 mein hata sakte hein 2 mein nahi
    console.log(val)

}
inst (22)

const jdjd=(value,streing)=>{
    console.log("hwhisihih");
}

// if no curly bracket after arrow so no need to write return type and return keyword

const abcd=()=>"harsh" // no return aaya like map m use kar sakte hein  ;

console.log(abcd()+"vinay")

const aa=()=>  ({name:"vinay"});
// if return type we wanna give a object not directly as {} bcoz compiler will think it is body so in round brackets;
console.log(aa())



/// map and filter;

// hamesha ek naya aarray aayega

var arr=[1,3,3,7,5]
const a=arr.map(value=>{
   return value*3  // map mein return karna jaruri hota hai , aniwarya hai warna kuch hoga nahi 
})

console.log(a)
/// or what else cna we wrie if directly we wanna return something in function 

var c=arr.map(value=>value*3)  /// for single paremter no need to put ()
console.log(c)

var d=arr.map(value=>{
    if (value>5){
       return value+5;
    }
    else return value;
})

console.log(d)

var e=arr.map(value=>value>5?value+5:value)  // single line  ternary operator
console.log(e);

//map fiter m ek hi farak hai map saare bande  return karta hai filter sab nahi 
var f=arr.filter(value=>value>5)  
console.log(f);

//react framework nahi hia, technology nahi hai, language nahi hai, javascript library hai ; 2013 facebook 


