let pi = 3.14159; // Global variable

function calculateArea(radius) {
  let area = pi * radius * radius; // Local variable
  return area;
}

function add(a, b) {
  const factor = 0.5;
  const result = a + b * factor+pi; // Local variable
  return result;
}
add(5, 10); // Output: 5.64159
console.log(add(factor, pi)); // Output: 5.64159