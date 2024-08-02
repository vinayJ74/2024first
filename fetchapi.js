fetch('m.txt')
.then(function(response){
    return response.txt() 
}).then(function(data){
    console.log(data)
})