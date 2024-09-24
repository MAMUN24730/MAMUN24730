/*
var i = 1;
while(i <= 100){
    document.write(" " + i);
    i = i + 1
}

*/

/*

// 1+2+3+.....+10

var i = 1;
var sum = 0;

while(i <= 10){
    sum = sum + i;
    i = i + 1;
}

document.write(sum);
document.write("<h1>end</h1>");
*/
                                                                
// 2 + 4 + 6 + 8 + ...... + 100
/*
var i = 2;
var sum = 0;

while(i <= 100){
    sum = sum + i;
    i = i + 2;
}

document.write(sum);
document.write("<h1>end</h1>");
*/

var i = 1;
var sum = 0;
while(i <= 50){
    if(i % 3 == 0 && i % 5 == 0){
        document.write("  "+i);
        sum = sum + i;
    }
    i = i + 1;
}
document.write(" sum =  " + sum);
document.write("<h1>end</h1>");