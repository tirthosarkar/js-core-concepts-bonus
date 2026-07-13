function add(num1, num2) {
  console.log('arguments:', arguments)
const args =[...arguments]
  return num1 + num2;
}

add(2, 3, 4, 5, 6);
