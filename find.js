const students = [
  { name: 'Tormuj', age: 22 },
  { name: 'Zaved', age: 32 },
  { name: 'Naved', age: 42 },
  { name: 'Khaled', age: 52 },
  { name: 'Sajaed', age: 62 },
  { name: 'Nahid', age: 72 },
  { name: 'Nasib', age: 82 },
];

const student = students.find(std => std.name[0] === 'N');
console.log(student)