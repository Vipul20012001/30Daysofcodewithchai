// Error Handling 
// Basic Error Handling with Try-Catch
// Write a function that intentinally thows an error and used a try-catch block to handle the error and log ans 
//appropriate message to console
 function ans(x)
 {
    throw new Error("This is a custom error message.");
 }
 try{
    console.log(ans());
    } catch(error){
        console.error("An error occurred:", error);
    }


// Create a function that divide two number and thows an error if the 
//denolmeter divided by 0 .
function div(x,y)
{
    if (y==0)
    {
        throw new Error("Divide by Zero");
    }
    else
    {
        return x/y;
    }
}
try{
    res=div(10,0);
    console.log(res)
} catch(error){
    console.error("An error occurred:", error);
}

//Script that includes a try catch block and a finally block Lof message in try catch and finally execution flow


function throwError1() {
    throw new Error("This is a custom error message.");
  }
  
  try {
    console.log("Entering try block.");
    throwError1(); 
    console.log("This message will not be logged because an error is thrown.");
  } catch (error) {
    console.log("Entering catch block.");
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Entering finally block.");
    console.log("This will always be logged, regardless of whether an error occurred.");
  }
  
  console.log("Execution continues after try...catch...finally block.");


  // Custom Error Objects 
  // Createa a custom error class that extends the built-in Error class.
  // Throw an instance of this custom error in a function and handle it using a try-catch block

  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'Write a proper code man You are dumb';
    }
  }
  
  // Function that throws an instance of CustomError
  function throwCustomError() {
    throw new CustomError("This is a custom error message from CustomError.");
  }
  
  // Script with try, catch, and finally blocks
  try {
    console.log("Entering try block.");
    throwCustomError(); // This will throw an instance of CustomError
    console.log("This message will not be logged because an error is thrown.");
  } catch (error) {
    if (error instanceof CustomError) {
      console.log("Entering catch block for CustomError.");
      console.error("A custom error occurred:", error.message);
    } else {
      console.log("Entering catch block for other errors.");
      console.error("An error occurred:", error.message);
    }
  }



// Write a function that validates user inpyt and throws a custom error if the number validaton fails Hnadle the custom error using try-catch block

function checstr(frt)
{
    if (frt.length == 0)
    {
        throw new CustomError("String is empty enter the another output")
    }
    else{
        return "validated"
    }

}

try{
    res1=checstr("")
    console.log(res)
} catch(error){
    console.error(error.message)
}


// Create promise that randomly resolve or reject use .catch()
// handle the rejection within appropriate messge to console

function randomPromise() {
    return new Promise((resolve, reject) => {
      const randomValue = Math.random();
        if (randomValue > 0.5) {
          resolve("Promise resolved successfully.");
        } else {
          reject(new Error("Promise rejected due to random value."));
        }
    });
  }
// Using Proimse randomly resolve or rject use .cat to handle the rehejction log an appropritae message to console.
  randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });


// Use try catc with an async fucntonk to handle error froma promise the ranmle resve or reject, and lof the error message
  async function handleRandomPromise() {
    try {
      const message = await randomPromise();
      console.log(message);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  handleRandomPromise();


//  Use the fetch API to request data from an incalid URL and handle the error usein.catch()
console.log("Fetching data from the invalid API and conforting the error using simple try and catch")
const apiUrl = 'https://jsonplaceholder.typicode.com/pots/1'; // Example public API

  try {
    const response = fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = response.json();
    console.log('Response data:', data);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }

console.log("Fetching data from the invalid API and conforting the error using simple async and await with try and catch")

async function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/poss/1'; // Example public API
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log('Response data:', data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }
fetchData()

