para1=document.getElementById("para1");
but1=document.getElementById("but1");
showimg=document.getElementById("showimg");
image1=document.getElementById("image1");
//Double click which will change the disblity of the followowing 
//double click event listners
let a=0
showimg.addEventListener("dblclick",function()
{
    a+=1
    if (a%2==0)
        image1.style.display="block";
    else
        image1.style.display="none";
});

//Mouse over Event listner to change the teh background color
para1.addEventListener("mouseover",function()
{
    para1.style.backgroundColor="yellow";
});

//Mouse out Event listner to chanege the background change to white again
para1.addEventListener("mouseout",function()
{
    para1.style.backgroundColor="white";
});

//By using Keydown event listner to console log the last chracter of the folllowing
Inputfld=document.getElementById('myInput');
Inputfld.addEventListener('keydown', function handleKeydownEvent(event) {
    console.log(event.key);
});

//By using keyup event listner to console log the whole intpur field
Inputfld.addEventListener('keyup',function handleKeyupeent(event)
{
    const inputField = document.getElementById('myInput');
    console.log(inputField.value);
});

//Creating a Form to submit ir an use the data to console and log the following 
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(form);
        for (let [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);
        }
    });
});


//Creating a dropdown manu 
//by using the change event listner an change the value of the paragraph accordin gto choice
document.addEventListener('DOMContentLoaded', (event) => {
    const dropdown = document.getElementById('myDropdown');
    const paragraph = document.getElementById('myParagraph');
    dropdown.addEventListener('change', function() {
        paragraph.textContent = `You selected: ${this.value}`;
    });
});



//Adding a new element in parent HTML element 

parent=document.getElementById("Newrow");
addnewrow=document.getElementById("addnewrow");
addnewrow.addEventListener("click",function()
{
    var newDiv = document.createElement("div"); 
    newDiv.textContent = "This is a new div"; 
    newDiv.style.border = "1px solid black"; 
    newDiv.style.padding = "10px";
    newDiv.style.marginTop = "10px";
    parent.appendChild(newDiv);
});