function d(a,b){
    try {
        if (b==0){
            throw new Error("can't divide")
        }
        else{
            console.log(a/b)
        }
    }
    catch(err){
        console.log(err.message)
    }

}
d(10,-0)
