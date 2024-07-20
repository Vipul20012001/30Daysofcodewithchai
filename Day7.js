//WAP create a object and access it 

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
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

// Object Methods
book1.auttile();
console.log(book1.year);
book1.yearchnge(2016);
console.log(book1.year);

// Different names the boosknested object
const libdta={
    lib1:{n1:"Banglore",books:["book1","book2","book3","book4","book5"]},
    lib2:{n1:"Delhi",books:["book1","book2","book3","book4","book5"]},
    lib3:{n1:"Patna",books:["book1","book2","book3","book4","book5"]},
    lib4:{n1:"Chennai",books:["book1","book2","book3","book4","book5"]},
    lib5:{n1:"Pune",books:["book1","book2","book3","book4","book5"]}
};
console.log(libdta.lib1.n1)
console.log(libdta.lib1.books)

for (let key in book1)
{
    console.log(key,book1[key]);
}

frt=[Object.keys(book1),Object.values(book1)];
for (i=0;i<frt.length;i++)
{
    console.log(frt[i][0],frt[i][1]);
}


