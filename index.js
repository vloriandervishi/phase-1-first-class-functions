// function receivesAFunction(spyFunction) {
//   spyFunction();
// }
//first class functioin
/**
 * Returns a named function that logs a greeting message to the console.
 * @returns {Function} - The named function that logs a greeting message.
 */
function returnsANamedFunction() {
  function namedFunction() {
    console.log("Hello from the named function!");
  }

  return namedFunction;
}

// Let's test our function
let myNamedFunction = returnsANamedFunction();

// When we call myNamedFunction...
myNamedFunction(); // 'Hello from the named function!' should be logged to the console.

/**
 * Returns an anonymous function.
 * @returns {Function} An anonymous function.
 */
function returnsAnAnonymousFunction() {
  // Returns a no-op anonymous function
  return function () {};
}
