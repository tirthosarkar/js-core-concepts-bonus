//double equals (==) operator in JavaScript is used to compare two values for equality, but it performs type coercion if the types of the values are different. This means that it will convert one or both values to a common type before making the comparison.

console.log(2 == 2); // true
console.log(2 == '2'); // true //coverts string '2' to number 2 before comparison. returns true.
console.log(2 == 3); // false
console.log(2 == true); // false
console.log(2 == false); // false
console.log(2 == 3); // false
console.log(2 == '1'); // false
console.log(true == 1); // true // true is converted to number 1 before comparison. returns true.
console.log(false == 0); // true // false is converted to number 0 before comparison. returns true.
console.log(null == undefined); // true // null and undefined are loosely equal.
console.log(null == 0); // false // null is converted to 0, but 0 is not equal to 0 in this context.
console.log(undefined == 0); // false // undefined is converted to NaN, and NaN is not equal to 0.
console.log(NaN == NaN); // false // NaN is never equal to anything, including itself.
console.log(NaN == 0); // false // NaN is converted to 0, but 0 is not equal to 0 in this context.