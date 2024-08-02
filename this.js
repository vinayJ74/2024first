let obj={
    name1:"vinay",
    fun:function(){ // arrow function se nahi hota
        console.log(this.name1)//this matlab object obj.name1 karta toh bhi print hota
        console.log(obj.name1) // direct name nahi hota  // 
    }
       
}
obj.fun();