//DOM manipulation of the foolowing 

//Changing the content of the HTML element
var byid=document.getElementById('heading1');
byid.style.color='red';

//Changing the style proties of the HTML elemtn
var paragr=document.getElementById('Para1');
var count=0
var count1=0
var but1=document.getElementById('but1');

//Adding the new element to the HTML page
but1.addEventListener("click",function(){
count+=1
if (count%2==0)
{
    paragr.textContent="This is a great element changing by using external javascript";
}
else
paragr.textContent="Changed to original text";
});

//Adding the element and using the event listner to make the followin the add and remove the element fron HTML page
var count1=0;
var but2=document.getElementById("but2");
but2.addEventListener('click',function(){
    count1+=1;
    if (count1 % 2==0)
    {
        paragr.style.backgroundColor='yellow';
    }
    else
    {
        paragr.style.backgroundColor="white";
    }
});

addDivButton.addEventListener("click", function() {
    var newDiv = document.createElement("div"); 
    newDiv.textContent = "This is a new div"; 
    newDiv.style.border = "1px solid black"; 
    newDiv.style.padding = "10px";
    newDiv.style.marginTop = "10px";
    document.body.appendChild(newDiv); 
});

addListButton.addEventListener("click", function() {
    var newList = document.createElement("ul");
    newList.className="ul";
    for (var i = 1; i <= 5; i++) { 
        var listItem = document.createElement("li"); 
        listItem.textContent = "List item " + i; 
        newList.appendChild(listItem); 
    }

    document.body.appendChild(newList);
});


//Revogint the Element from HTML page using event listner button
var rembut =document.getElementById("rembut");
rembut.addEventListener("click",function()
{
    but2.remove();
});

//Removing the Element from the specific HTML element using for loop and even listner and array properties to make it ;
removeButton=document.getElementById("removebut")
removeButton.addEventListener("click", function() {
    var dynamicElements = document.querySelectorAll(".ul");
    if (dynamicElements.length > 0) {
        var lastElement = dynamicElements[dynamicElements.length - 1];
        lastElement.remove(); // Remove the last dynamic element
    }
});