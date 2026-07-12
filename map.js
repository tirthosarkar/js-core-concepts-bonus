const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// for (const num of numbers) {
//   doubled.push(num * 2);

// }

// const doubleIt = num => num * 2;
// const doubled = numbers.map(doubleIt)


const doubled = numbers.map(num => num * 2);
const squared = numbers.map(num => num * num);

const friends = ['zaved', 'naved', 'khaled', 'sajed']
const firstLetters = friends.atmap(frd => frd[0]);

const products = [
  { name: 'laptop', price: 45000 },
  { name: 'phone', price: 15000 },
  { name: 'tablet', price: 25000 },
  
];

const prices = products.map(product => product.price);
console.log(firstLetters)




