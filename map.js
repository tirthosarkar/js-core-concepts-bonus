const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// for (const num of numbers) {
//   doubled.push(num * 2);

// }

// const doubleIt = num => num * 2;
// const doubled = numbers.map(doubleIt)


const doubled = numbers.map(num => num * 2);
const squared = numbers.map(num => num * num);
console.log(squared)

const friends = ['zaved', 'naved', 'khaled', 'sajed']