// document.querySelector("button").addEventListener("click", myFunction);


// function myFunction(){
//     alert("Hello");
// }   



//Anonymus function

// document.querySelector("button").addEventListener("click", function(){
//     alert("Hello");
// });


 var myVar = document.querySelector("h1");

// myVar.addEventListener("click",function(){
//     alert("hi");
// });

myVar.addEventListener("mouseover",function(){
    myVar.classList.add("my-style");
});

myVar.addEventListener("mouseout",function(){
    myVar.classList.remove("my-style");
});

