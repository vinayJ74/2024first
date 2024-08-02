class Animal{
    constructor (name){
        this.name=name;
    
    }
    static greet(){  
        console.log("chal chal ke dikha"+this.name)

    }

}
 
let a="vinay"
//console.log(a.greet())  // object access nahi kar sakta
Animal.greet(a) // but class acess kar sakta hai   

