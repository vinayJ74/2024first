// var btn=document.querySelector("button")
// btn.addEventListener("click",function(){
//     document.querySelector("p").style.color="blue"
//       document.querySelector("p").textContent="you have changed the color"

// })
// one thing saare selectors ko top mein rakhe taanki baar baar inside the function
// document.querySelector

// create a page with 2 images and a button when the button is clicked swap images

// alert("no one needs to be set")

 

// var form=document.querySelector("form")
// var inp1=document.querySelector("#inp1")
// var inp2=document.querySelector("#inp2")
// var h=document.querySelector("h1")
// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     if(inp2.value=="" || inp1.value==""){
//         h.textContent="all fields must be filles";
//         h.style.color="red"}
// })

//2nd way to do the same is 

// var form=document.querySelector("form")
// var inps=document.querySelectorAll('input[type="text"]');
// var h=document.querySelector("h1")
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     inps.forEach(function(inp){
//         if(inp.value==""){
//             document.querySelector("h1").textContent="fill all the inputs"
//         }
//     })
    
// })
// //input[i].value.trim()-- y karta hai pehle or aakhri ke blank ko hata tahai


//3>>>
// var c;
// var add=document.querySelector("#add")
// var rem=document.querySelector("#remove")
// var list=document.querySelector("ul")
// var inp=document.querySelector("input")
// add.addEventListener('click',function(){
//     c=document.createElement("li")
//     c.textContent=inp.value;
//     list.appendChild(c) // append child mein ""ke saath nahi lete
//     inp.value=""


// })
// rem.addEventListener("click",function(){
//     list.removeChild(c)
// })

//4>>
// var inp=document.querySelector("input")
// var btn=document.querySelector("button")
// var c= 0;
 
//     btn.addEventListener("click",function(){
      
//         c=c+1
//         inp.value=c; 
       
       

// })

//doosra tareeka is with setInterval,clearInterval;







 

