// IIFEs (Immediately Invokeable Function Expressions)

(function display(){
    console.log("Welcome");
})();




(function display(message){
    console.log("message");
})('hi');


//Function Expressions

const display2 = function displayMessage(){
    console.log(" I am Mamun");
}
display2();

let display3 = function displayMessage(){
    console.log("Assalamualaiqum i am Mamun");
}
display3();


// (), {}, [], < >

