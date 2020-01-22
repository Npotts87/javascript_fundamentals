function printVal(){
    console.log("The value of a is currently: ", a);
    console.log("The value of b is currently: ", b);
    console.log("The value of c is currently: ", c);
}
var a = 7;
var b = 87;
var c = -13;
a += 5;
a *= 30;
b *= a;
c += a;
c -= b;
printVal();
a /= 3;
b /= a;
c /= c;
printVal();
a *= 27;
b *= 13;
c *= 13;
printVal();

//------------------------------------------------
function printNumber(haha){
    console.log(haha);
    console.log(50);
}
printNumber(49);
printNumber(48);
printNumber(47);

//------------------------------------------------
function printArrays(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
var arrOne = [1,2,3,4,5];
var arrTwo = [10,20,30,40,50];
var arrThree = [100,200,300,400,500];
var listEnd = [-6,-60,-600];
printArrays(arrOne);
printArrays(arrTwo);
printArrays(arrThree);
printArrays(listEnd);
printArrays(listEnd);

//------------------------------------------------
function tip(bill){
    console.log("Including tip the total bill comes to $", bill * 1.2);
    return bill * 1.2;
}
var thaiFood = 150;
var group = 4;
var total = tip(thaiFood);
console.log("Including tip, each person pays $", total/4);

var x = [1,3,5];
console.log(x[2]);