var x=10;
//console.log(x);
function number(){

    var y =20;
}
console.log(x);

//Redeclaration and Reinitializing is allowed in JS
var browser ="chrome"; // here declaring and initializing the browser variable
var browser ="firefox";
browser="edge"; // difference between the ln 11 and 12 - not declaring 
                //only the reinitializing the browser variable
console.log(browser); // browser takes the recent value

//Declaring and not assigning any value to the variable
var g;
console.log(g); // JS assign directly the undefined value to the var keyword
g="New Code";
console.log(g);

// Issues with var
var m1= "hey Banu"; // this m1 variable cannot be used since it is redeclared and reinitialized in the line 26
                    // so modern java uses let to overcome this issue 
var p1=5;
if(p1>2){
    var m1="hey Prema"; // here m1 got redeclared and reinitialized
}
console.log(m1);

// let variable: It is always block scoped


let m11= "hey Banu"; 
let p11=5;
if(p11>2){
let m12="hey Prema"; 
//console.log(m12);

}
//console.log(m12); // m12 variable value will be printed only when it is used in block.
                    // so line no 38 will print the value
console.log(m11);

// Update the let variable. let variable cannot be redeclared , it can be reintialised
//let len = 4;
//let len =5; 
// Above two line gives the error as len has already been declared, where as with var it is possible

// No redeclaration is allowed, only reintialisation is possible
let len=4;
len=5;
console.log(len);


//Const;  Maintain week days, months, year, const string
const msg= "hey all";
// msg="hey everyone"; // Error is Assignment to constant variable.
console.log(msg); 


const weeks = 52;
console.log("Days in a year:"+ 52*7 + "days");

