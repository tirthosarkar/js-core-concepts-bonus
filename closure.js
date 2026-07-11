function outerFunction() {
  function innerFunction() {
    console.log("Hello from innerFunction!");
  }
  return innerFunction;
}
const outer = outerFunction();
console.log('in the outside:', outer); // Output: [Function: innerFunction]
outer(); // Output: Hello from innerFunction!