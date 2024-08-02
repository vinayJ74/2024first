// //tags // getelementsbytagname mein saare li select ho gaye 
// // div likhata toh div tag select hote 

// //  var a= document.getElementsByTagName("li")
// //  console.log(a)


// //  var b=document.getElementsByClassName("hero")

// //  var c= document.getElementById("hero")
// //  console.log(c)

// // y saare upper ke selectors specific hein ek hota hai jo general hai 
// // document.querySelector("button") quotes mein of course, bracket nahi kholenge y css nahi hai {}

// // var btn= document.querySelector("button")
// //.query.SelectorAll
 
 
// // if a lot of h1 tag and you write jsut the ("h1 ")then only the first one will be select hoga
  
// // 2>> Now MODIFYING ELEMENT innerHTML, textContent

// // iske baad hame pta chalega ki change karna hai uske liye select and then modify use karenge change
// // question y hai ki kab karenge change

// // a.textContent="starting.." 

// // var b=document.querySelector("h1")
// // b.textContent +="Vinay This Side"
// // console.log(b)
// // b.innerHTML+="<i>vinay this side</i>"


// // ab sab kuch kar sakte hein aisa lagega but abhi tak tumne css badalna nahi seekha 
// // Manipulating styles and Classes
// //classList, style

// var a=document.querySelector("h1")
// // a.style.color="red"    // javascript mein css nahi style hota hai = ke baad sab quote mein aayenge
// // a.style.fontFamily="helvetica"
// // a.style.fontSize="100px"
      
// // a.classList.add("makeitred")
// var h1= document.createElement("h1")
// h1.textContent="hi vinay here "
//  //h1 ko ake it red class dedi  // bas banaya hai js mein html mein add nahi kiya hia 

// // select karke  kahan par rakhaoge.appendChild()
// document.querySelector("body").appendChild(h1)
// h1.classList.add("makeitred")
// h1.style.color="red"

// var im=document.createElement("img")
// im.src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSw0Ftpel19q8SANSlLpAjmlnVLT2kCHzh1uS7WRyGnhr8dVR61"
// document.querySelector("body").appendChild(im)
// im.style.width="100%"
// im.style.height="100vh"

// document.querySelector("body").removeChild()

var btn=document.querySelector("button"); 
btn.addEventListener("dblclick",function(){
    btn.textContent="starting";  // kaise likhte hein kisi ke upper kuch .textContent
    btn.style.backgroundColor="blue"
    btn.style.color="yellow"
})
//or bahut saare  events click dblclick

btn.addEventListener("mouseover",function(){
    btn.style.color="indigo"
    btn.textContent="pakal liya"
})

btn.addEventListener("blur ",function(){
    btn.style.color="red"
    btn.textContent="chod mujhe"
})





