 var number = Number(prompt("Enter a number"));
// if(number>0){
//     console.log("positive");
// }   
// else{
//     console.log("Negative");
// }
// var result = number > 0 ? "Positive" : "Negative"
// console.log(result);

// number > 0 ? console.log("Positive") : console.log("Negative");

var result = number>0 ? "Positive" : number<0 ? "Negative" : "zero";
console.log(result)