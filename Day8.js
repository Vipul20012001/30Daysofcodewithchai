//Use template literals to create a astring that inclued variable name and age of the person
let name1="Vipul Kumar";
let age="23";
let text= `He's is often called ${name1} of age ${age}`;
console.log(text);
let text1= `He's is often called ${name1} \nHe if of age ${age}`;
console.log(text1);

// Destructuring of extract the fisrt and secound elemetns from an array of number and log them to console


//Array Destructuring
const vechile=['Tigor', 'TATA', 'midvar'];
const [model1,company1,mod]=vechile;
console.log(model1,company1,mod);


//Object Destructring
const book1={
    title:"atomic habits",
    author:"James Clear",
    year:2018,
    auttile: function()
    {
        console.log(this.title+this.author);
    },
    yeartila:function()
    {
        console.log(this.year+this.title)
    },
    yearchnge:function(utr)
    {
        this.year=utr
    }
};

mybook(book1)
function mybook({title,author,year})
{
    console.log(title,author,year);
}

//WAP spread operator to create a new array that includes all elements of an existing array plus new additions
let lt1=[1,2,3,4];
let lt2=[6,7,8,9];
let comlt=[...lt1,...lt2];
console.log(lt1,lt2,comlt);
let[t1,t2,...lt3]=comlt;
console.log(t1,t2,lt3);


//WAP to using rest operator in function to accept an arbirary number of argument 

function sum(a,b,...c)
{
    let total=0;
    total+=a;
    total+=b;
    for (i=0;i<c.length;i++)
    {
        total+=c[i]
    }
    return total
}
console.log(sum(1,2,3,5,3,4,32,43,2));

//Default perameter in javascript

function sum1(a,b=5)
{
    return a*b;
}
console.log(sum1(10));


//Enchncced Object Literals

name1="Vipul";
let age1="23";
let Nation="Indian";
let full="";
let grt=function (a,b)
{
    console.log(this.name1,this.age1);
    this.full=this.name +" Kumar"
}
var person={name1,age1,Nation,full,grt};
console.log(person);
console.log(person.full);
person.grt(1,2);
console.log(person.full);



