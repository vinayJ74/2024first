function fun1() {
    console.log("hello world")
    function fun2(){
        console.log("calling function 2")
    }
    fun2()// function ke andar function fun2 ke bahar fun1 ke andar
}
fun1()