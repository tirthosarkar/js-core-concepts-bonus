function outerFunction() {
  function innerFunction() {
    console.log("Hello from innerFunction!");
  }
  return innerFunction;
}