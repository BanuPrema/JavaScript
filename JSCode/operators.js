// if --> need to pass the boolean condition
//else
// switch
/*-------------------------------------------------*/

// 6 am to 12 pm --> Good morning
//12 pm to 3 pm --> Good Afternoon
// 3pm to 7 pm --> Good evening
// else --> Good night

//let hour=10;  --> harcoded
const d = new Date();
let hour = d.getHours(); // Get the hours
if(hour>=6 && hour<12) {
    console.log("Good morning");
    console.log("Second Good Morning")
}
else if(hour>=12 && hour<15) console.log("Good afternoon");
else if(hour>=15 && hour<19) console.log("Good evening");
else console.log("Good night");
/*-------------------------------------------------*/

// Greatest of Three Numbers
let a=50;
let b=22;
let c=115;

if(a>b && a>c) console.log("A is the Greatest");
else if(b>c) console.log("B is the Greatest");
else console.log("C is the Greatest");
/*-------------------------------------------------*/


//Switch Case 
var role="admin"; // Jumps directly to line no 41
//let role="admin";
switch(role){
    case 'guest':
        console.log("Guest User");
    break;
    case 'admin':
        console.log("Admin User");
    break;
    case 'hr':
        console.log("HR User");
    break;
    default:
        console.log("No Such User");
    break;
}
/*-------------------------------------------------*/

// with if else
var role="hr";
if(role==='guest') console.log("Guest user");
else if(role==='admin') console.log("Admin User");
else if(role==='hr') console.log("HR User")
else console.log("No such User");

/*-------------------------------------------------*/

