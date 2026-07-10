let data;
// console.log(typeof data) // undefined

const sum = (a, b) => {
  console.log(a + b);
}
sum(4, 5) // 9
// data1 = 5; // TypeError: Assignment to constant variable.


const student = {
  name: 'Tormuj',
  age: 22
};
console.log(student.name) // Tormuj
console.log(student.marks) // undefined