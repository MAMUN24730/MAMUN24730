const input = document.querySelector("input");

input.addEventListeren("blur", function (e) {
    //console.log(e.target.value);
    input.value = e.target.value.toUpperCase();
});



//input.addEventListener("blur", function(){
//    input.style.backgroundColor = "transparent";
//    input.style.padding = "0rem";
//});

//input.addEventListener("focus", function(){
    //console.log("focus is occured");
    // input.style.backgroundColor = "Orange";
    // input.style.padding = "2rem";
//});

// input.addEventListener("focusin", function(){
//     console.log("focusin is occured");
// });

// input.addEventListener("focusout", function(){
//     console.log("focusout is occured");
// });

