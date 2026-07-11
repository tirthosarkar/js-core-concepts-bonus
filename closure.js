function outerFunction() {
  function innerFunction() {
    console.log("Hello from innerFunction!");
  }
  return innerFunction;
}
const outer = outerFunction();
// result(); // Output: [Function: innerFunction]
// console.log('in the outside:', outer); // Output: [Function: innerFunction]
outer(); // Output: Hello from innerFunction!

function counter() {
  let count = 0; // Local variable
  function increment() {
    console.log('value of count:', count); // Output: 0, 1, 2, ...
  }
  return increment;
}
const count1 = counter();
count1(); // Output: 0
count1();