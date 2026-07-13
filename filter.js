const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const friends = ['zaved', 'naved', 'khaled', 'sajed', 'nahid', 'nasib'];
const NFriends = friends.filter(frd => frd[0] === 'n');

const students = [
  {name: 'Tormuj', age:22},
  {name: 'Zaved', age:32},
  {name: 'Naved', age:42},
  {name: 'Khaled', age:52},
  {name: 'Sajaed', age:62},
  {name: 'Nahid', age:72},
  {name: 'Nasib', age:82},
]

const olderStudent = students.filter(std => std.age > 30);
console.log(olderStudent);

