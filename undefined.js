let data;
// console.log(typeof data) // undefined

const sum = (a, b) => {
  console.log(a, b);
}
sum(4) // 4 undefined
// data1 = 5; // TypeError: Assignment to constant variable.


const student = {
  name: 'Tormuj',
  age: 22
};
console.log(student.name) // Tormuj
// console.log(student.marks) // undefined

const arr = [1, 2, 3, 4];
// console.log(arr[0]) // 1
// console.log(arr[4]) // undefined

delete arr[1]; // delete the element at index 1
console.log(arr[1]) // undefined
