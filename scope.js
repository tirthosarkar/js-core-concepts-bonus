let pi = 3.14159; // Global variable
add(2,5); // Output: 5.64159

function calculateArea(radius) {
  let area = pi * radius * radius; // Local variable
  return area;
}

function add(a, b) {
  const factor = 0.5;
  const result = a + b * factor + pi; // Local variable
  const total = doubleIt(result); // Call to another function
  return total;
  const value = addTwo(total); // Call to another function  

  function addTwo(num) {
    num = num + pi; // Local variable
    return num + 2;
  }

  return result;
}
add(5, 10); // Output: 5.64159
// console.log(add(factor, pi)); // Output: 5.64159


const multiply = (x, y) => {
  console.log(result); // Output: 5.64159
  //TDZ: temporal dead zone, result is not accessible here because it is declared after this line.
  const result = x * y; // Local variable
  return result;
}
multiply(3, 4); // Output: 12

if (true) { 

}

while (true) {

}

const age = 21;
console.log(age); // Output: 21