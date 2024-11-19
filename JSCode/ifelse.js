// if else

function checkAge(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    }
    else {
        console.log("You are not eligible to vote");
    }
}
checkAge(40);
checkAge(15);

/*-------------------------------------------------*/

// Check wether the number is positive or negative

function checkNumber(num) {
    if (num > 0) {
        console.log("Its a +ve Number");
    }
    else if (num < 0) {
        console.log("Its a -ve Number");
    }
    else {
        console.log("Number is Zero");
    }
}
checkNumber(11);
checkNumber(0);
checkNumber(-55);

/*-------------------------------------------------*/

// nested if-else
function checkGrade(score) {
    let grade;
    if (score >= 90) {
        grade = 'A';
        //console.log("Secured A Grade");
    }
    else {
        if (score >= 80) {
            grade = 'B';
        }
        else {
            if (score >= 70)
            {
            grade = 'C';
            
            }
            else 
            {
            grade = "D";
            }
        }
    }
    console.log(grade);
}
    checkGrade(95);
    checkGrade(55);
    checkGrade(84);
    checkGrade(72);

/*-------------------------------------------------*/

// browser selection --> if -elseif -> checks from the firsst top condition
let browser="Chrome";
if(browser=="Chrome"){
    console.log("Launch Chrome Browser");
}
else if(browser=="Firefox"){
    console.log("Launch FireFox Browser");
}
else if(browser=="Edge"){
    console.log("Launch Edge Browser");
}
else{
    console.log("Specify a correct browser");
}
/*-------------------------------------------------*/
 
// with switch case
let browser1="Opera";
switch(browser1)
{
    case 'Chrome':{
        console.log("Launch Chrome Browser");
        break;
    }   
    case 'Firefox':{
        console.log("Launch Firefox Browser");
        break;
    }
    case 'Edge':{
        console.log("Launch Edge Browser");
        break;
    }
    default:{
        console.log("Specify a correct browser");
        break;
    }

}   

/*-------------------------------------------------*/


