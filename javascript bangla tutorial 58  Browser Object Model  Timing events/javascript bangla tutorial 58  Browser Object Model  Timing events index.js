// Js BOM
// Js Timing events methods
// SetTimeOut(), setInterval()



// setTimeout(()=>{
//     console.log("Assalamualaiqum");
// }, 2000);

// setTimeout(display, 2000);

// function display() {
//     console.log("display function");
// }


// const saveButton = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveButton.addEventListener("click", saveUser);

// function saveUser(){
//     message.textContent = "user registration successfull";

//     setTimeout(() => {
//         message.textContent = "";
//     }, 2000);
// }


const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click", displayCount);
function displayCount() {
    let count = 1;
    message.textContent = count;

    setInterval(() => {
        count++;
        message.textContent = count;
    }, 1000);
}