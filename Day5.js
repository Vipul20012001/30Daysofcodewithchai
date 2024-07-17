//WAP to a function if number is even or odd and log the result to console
function checkoddeven(p1){
    if (p1%2==0)
        console.log("Even number");
    else
        console.log("Odd number");
}
var a =10;
checkoddeven(a);

//WAP to function to calculate the square of a number and return the result 
var a= 5;
function squarenumber(p1)
{
    return p1*p1
}
console.log(squarenumber(a));

//WAP to expression to fudn the maximum of two number and log the result to console
const maxima = function(p1, p2){
    if (p1>p2)
        return p1
    else
        return p2
}
console.log(maxima(2,5));

//WAP to concation the string the return 
const concat = function(p1,p2){
    return p1+p2
}
console.log(concat("Vipul", "Kumar"));

//Arrow function to calculate the sum of two number and return result
const sumi = (a,b)=> a+b;
console.log(sumi(5,6));

//Arrow the function to chekc if staing contains a specific chracter in return the boolean 
 const isther = (char, sentence)=> sentence.includes(char) ? true : false; 
 console.log(isther("a","aimgappplicable"));

// Function that two parameeter and regturn therir product
 function pro(a,b=5)
 {
    return a*b
 }
 console.log(pro(9));

//WAP to returns a greeting message provide value for th age

function greet(name,age=18)
{
    return "Hello "+name+" You are of age " +age;
}
console.log(greet("Vipul"));

//Higher order function 
function hiorder(func,n)
{
    for ( i=1; i<n;i++)
    {
        console.log(func("Vipul",18+i));
    }
}
hiorder(greet,5)


//WAP higher order function that takes two function ansd a caleu applies the function and then appliese hta 
function hiorder3(func1, func2,value)
{
    sq=func1(value)
    console.log(func2(sq,value))
}
hiorder3(squarenumber,sumi,5)


