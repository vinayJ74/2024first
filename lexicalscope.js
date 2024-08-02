// lexical scope
const a=123 // still didn't took in from outward 
function fun1(){
    
    console.log("this is function1:"+a)
    function fun2(){
        var a=12
        console.log("this is function 2 "+a)
    }
    fun2()
}       // this is lexical scope of a -- matlab function ke bahar
fun1()

// lexical scope matlab apne andar ya fir function ke bahar function ke function ke andar nahi dhoondhega
// if also ther is defined in function2 toh uske value nahi lega ya dhoondega ya toh apne andar dekhega
// ya bahar bahar mili uyse const a=123 so 