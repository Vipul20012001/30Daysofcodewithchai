// Understanding Promises
//Create a promise that resovesw with a messafe after 2 secound wimeout and log the messafe to console
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This message is printed after 2 minutes.");
      },2000);
    setTimeout(() => {
      reject(new Error("This is an error message after 2 seconds."));
    }, 2000);
  });

message="Hello man"
promise
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);
    });

promise
    .then((mt) => {
      console.log(mt);
    })
    .catch((error) => {
      console.error(error);
    });


// Fetching the data from the sever in specifc machine 

function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched data from server 1.");
      }, 1000);
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Fetched data from server 2.");
      }, 1500);
      return ("completes fetchData 2")
    });
  }
message=""
// Chain the Promises
  fetchData1()
    .then((message1) => {
      console.log(message1);
      return fetchData2();
    })
    .then((message3) => {
      console.log(message3);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });


//Async function to waits for a promise to resolve then lofs the resolved value.

function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully.");
      }, 2000);
    });
  }
//Handles the rejected a promise using try-catch and logs the eoor message
async function logResolvedValue() {
    try {
      const result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Call the async function
  logResolvedValue();


//fetch API to get data from a public API and log the response datat to consle using promies
function fetchData4() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example public API
  
    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log('Response data:', data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  // Call the function to fetch and log data
  fetchData4();

//Use the fetch API to get data froma public API and log the repose data to console using async/await 

  async function fetchData5() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example public API
  
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
// Call the async function to fetch and log data
  fetchData5();




// Promise.all to wait for multiple promises to resolve and logg their values .
function fD1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from server 1");
      }, 1000);
    });
  }
  
  function fD2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from server 2");
      }, 1500);
    });
  }
  
  function fD3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from server 3");
      }, 2000);
    });
  }
  
  // Using Promise.all to wait for all promises to resolve
  Promise.all([fD1(), fD2(), fD3()])
    .then((values) => {
      console.log("All data fetched:");
      values.forEach((value, index) => {
        console.log(`Data ${index + 1}: ${value}`);
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });

// Using Promise.race to wait for all promises to resolve the chekc the console the values
Promise.race([fD1(), fD2(), fD3()])
    .then((values) =>{
        console.log("All data fetched:");
        console.log(values);
    })
    .catch((error =>
    {
        console.error("An error occured:",error);
    }
    ))