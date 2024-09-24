// variable
// variable do the work is one kind of value
// student details

// var name = "Mamun";
// var age = 29;
// var cgpa = 4.92;
// var lang = ["Bengali","Hindi","English"];

// console.log(age);


// object
// Object is an one kind of variable
// Object is contain multiple value
// We can multiple valu stored use by object


//It is a single object
//var student1 = {
    //Those are call property
    // Must be use clone (:)
    // Do not use equal sign (=)
    // We are use first property and provide her velue
//     name : "Mizan",
//     age : 27,
//     cgpa : 5.00,
//     lang : ["Bengali","Hindi","English"]
// }

// var student2 = {
//     name : "Abdullah",
//     age : 29,
//     cgpa : 4.00,
//     lang : ["Bengali","Hindi","English"]
// }

// var student3 = {
//     name : "Abul Hossain",
//     age : 28,
//     cgpa : 3.90,
//     lang : ["Bengali","Hindi","English"]
// }

// console.log(student1);
// console.log(student2.age);


//We are create property template and use more
//Adding a constructor
// How to create and use Constructor

//Constructor is a spessial function it use can be template
// Must use constructor name is a capital letter

//It is a multiple object
// function Student(name,age,cgpa,lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
// }

// var student1 = new Student("Mamun",29,3.81,["Bengali","Hindi","English"]);
// var student2 = new Student("Anisul Islam",27,3.92,["Bengali","Portuguese","English"]);
// var student3 = new Student("Linkon",37,3.8,["Bengali","Nepalese","English"]);

//console.log(student1);
//console.log(student2.lang);


// How to add a function inside a constructor?

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Mamun",29,3.81,["Bengali","Hindi","English"]);
var student2 = new Student("Anisul Islam",27,3.92,["Bengali","Portuguese","English"]);
var student3 = new Student("Linkon",37,3.8,["Bengali","Nepalese","English"]);

student1.display();
student2.display();
student3.display();
