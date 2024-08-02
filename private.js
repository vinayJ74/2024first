class Bank {
    #balance=0;    // private variable, also used static 

    deposit(amount){
        this.#balance+=amount
    }
withdraw(amount){
    if(this.balance>amount){
        console.log(this.#balance-amount)
        
    }
    else{
        console.log("not enought funds")
    }
    this.#balance-=amount
}
balance(){
    console.log(this.#balance)
}

}
let use= new Bank()
 use.deposit(600)
 use.withdraw(500)

 
 use.balance()

