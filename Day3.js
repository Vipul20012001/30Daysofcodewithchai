//Write a program to check if number is positive, negative, or zero and log the result the condole
var a=-14;
if (a<0)
{
    console.log("Negative");
}
else if (a==0)
{
    console.log("Zero");
}
else
console.log("Positive");

//WAP to person elegiblity to vote
var age=10;
if (age<18)
{
    console.log("Not Eligible to vote");
}
else
{
    console.log("Eligible to vote");

}

//WAP find the largest of three number using nested statement

var a=10;
var b=13;
var c=14;

if (a>b && a>c)
    {
        console.log(a+"is the largest number");
    }
else if (b>a && b>a)
    {
        console.log(c+"is the largest number");
    }
else if (c>b && c>a)
    {
            console.log(c+"is the largest number");
    }

// WAP to switch case to determine the day fo gthe week on number(1-7)
var day=3
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number");
}


// Grade for the program and console log 

var grade=98;
let gd= ((grade/10)>>>0)*10;
switch (gd){
    case 90:
        console.log("Grade A")
        break;
    case 80:
        console.log("Grade B")
        break;
    case 70:
        console.log("Grade C")
        break;
    case 60:
        console.log("Grade D")
        break;
    default:
        console.log("Grade E")
        break;
}

//WAP odd or even using ternary operator 
var num1=4
console.log(num1%2==1 ?'Odd Number' : "Even Number");

// WAP for leap year

var year=2000;
year%4==0 ? year%100==0 ? year%400==0 ? console.log("leap year"): console.log("Not Leap year") : console.log("Leap Year") : console.log("Not A leap year");




