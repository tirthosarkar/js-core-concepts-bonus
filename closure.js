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

function counter(owner) {
  let count = 0; // Local variable
  function increment() {
    count = count + 1; // Increment the count variable
  
    console.log('value of count:',owner, count); // Output: 0, 1, 2, ...
  }
  return increment; 
}

const rahimCounter = counter('Rahim');
rahimCounter();
rahimCounter();
rahimCounter();
rahimCounter();
const karimCounter = counter('Karim');
karimCounter();
karimCounter();
karimCounter();
rahimCounter();
rahimCounter();
rahimCounter();

// const count1 = counter();
// count1(); // Output: 0
// count1();