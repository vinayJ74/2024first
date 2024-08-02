class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(this.name + "speaks")
    }
}

class Dog extends Animal{
     constructor(name){
        super(name); // super keyword points to parent class y name parent class m bhi toh pahuchana hai
    }


}

let c=new Dog("vinay")
c.speak()