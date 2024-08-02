function func(age){
    console.log(this.fname,age)
}

var obj={
    fname:"vinay",
    fn:function func(age){
        console.log(this.fname,age)
    }
}
obj.fn()

var obj2={
    fname:"joshi" // now we need to get into the obj2 fname
}
obj.fn.call(obj2,22) // fn y wala out of the object hai toh obj.karke nahi call kiya
func.call(obj,12)
func.apply(obj,[12])  /// y inside function wala hai 

var a=func.bind(obj2,23) // bind function bna leta hai 
console.log(a)