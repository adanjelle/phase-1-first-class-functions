// index.js

// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
  callback(); // Calling the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
  // Define a named function
  function namedFunction() {
      console.log("This is a named function");
  }
  return namedFunction; // Return the named function
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
  // Return an anonymous function directly
  return function() {
      console.log("This is an anonymous function");
  };
}

// Example usage:
function callbackFunction() {
  console.log("Callback function called");
}

// Calling receivesAFunction with callbackFunction
receivesAFunction(callbackFunction);

// Calling returnsANamedFunction and storing the returned function
const namedFunc = returnsANamedFunction();
namedFunc(); // Calling the named function

// Calling returnsAnAnonymousFunction and storing the returned function
const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc(); // Calling the anonymous function
