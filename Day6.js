//WAP to areate an array of number fcrom 1-5 and log the array and console
number=[];
for (i=1;i<=5;i++)
{
    number.push(i)
}
console.log(number);
console.log(number[0]);
console.log(number[number.length - 1]);


//Using all the basic methords of push,pop, shift,unshift
console.log("Pushing 6")
number.push(6)
console.log(number)

console.log("number.pop")
number.pop()
console.log(number)

console.log("number of shift")
number.shift(3)
console.log(number)

console.log("number unshift")
number.unshift(0)
console.log(number)


// Array Methord(Intermediatee)

console.log("using map method to create a a new array" );
function myFunction(num)
{
    return num*2;
}
console.log(number.map(myFunction));

console.log("Using filter method us")
function checknum(num)
{
    return num<=3;
}
console.log(number.filter(checknum));

console.log("Using reduce method us")
function getsum(total,num)
{
    return total+Math.round(num)
}
console.log(number.reduce(getsum,0))


// Iterating using for loop
console.log("Iteration using for loop");
for (i=0;i<number.length;i++)
{
    console.log(number[i])
}

// Iteration using for each loop

console.log("Iteration using for each loop");
number.forEach(funcr);
function funcr(item,index)
{
    console.log(item,index);
}


// Creating a multidimenstion array and console.the entire array
let multd=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

let multd1=[]
i=0
while (i<25)
{
    let ant=[]
    var p=i+5;
    while (i<p)
    {
        ant.push(i)
        i+=1
    }
    multd1.push(ant);
}
console.log(multd)
for (i=0;i<multd.length;i++)
{
    console.log(multd[i])
}

console.log(multd1)
for (i=0;i<multd1.length;i++)
    {
        console.log(multd1[i])
    }

console.log(multd[1][2])