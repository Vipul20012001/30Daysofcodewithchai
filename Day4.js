// Write a program to print from 1 to 10 using for loop 
for (let i=1; i<=10;i++)
    {
        console.log(i);
    } 
console.log("**************************************************");

//WAP to print multiplication table of using 5 using for loop
for (let i=1; i<=10;i++)
    {
        console.log(i*5);
    } 
console.log("**************************************************");

// WAP to calculate the sum of the nubmer from 1 to 10 
var a=1
sm=0
while (a<=10)
{
    sm+=a;
    a+=1;
}
console.log(sm);
console.log("**************************************************");

// WAP to print number from 10 to 1 using while loop

a=10
while (a>=1)
{
    console.log(a);
    a-=1
}
console.log("**************************************************");
//WAP 1 to 5 using do while

a=1
do
{
    console.log(a);
    a+=1;
}
while(a<=5);
console.log("**************************************************");

//WAP to factorial of a number using do while loop
var a=1
fact=1
while (a<=5)
{
    fact*=a
    a+=1
}
console.log(fact)

console.log("**************************************************");

//WAP to Nested loops 
a=1
while (a<=5)
{
    let i=0
    var S=""
    while (i<a)
    {
        S+="* "
        i+=1
    }
    console.log(S)
    a+=1
}
console.log("**************************************************");

a=1
while (a<=10)
{
    if (a==5)
    {
        a+=1
        continue
    }
    console.log(a)
    a+=1
}
console.log("**************************************************");

a=1
while (a<=10)
{
    if (a==7)
    {
        break;
    }
    console.log(a)
    a+=1
}


