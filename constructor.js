function User(name){
    if(!new.target){
        return new User(name)
    }
    this.name=name
}
user2=new User("vinay")
console.log(user2.name)

user3=User("john")
console.log(user3.name)