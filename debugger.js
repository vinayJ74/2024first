function fun(){
    debugger;
    for (let i=0;i<5;i++){
        console.log(i)
    } 
}
let x = 10;
let y = 20;

function sum(a, b) {
    debugger; // Execution will pause here pata karna ho kidhar error aara hai .. 
    return a + b;
}

let result = sum(x, y);
console.log(result); // Output: 30
