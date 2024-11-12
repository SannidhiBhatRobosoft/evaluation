let array = [[], []];
let N = 6;
push(array[0], 1);
push(array[0], 2);
push(array[0], 3);
push(array[0], 4);
push(array[0], 5);
push(array[0], 6);
push(array[0], 7);
console.log("------------The Array---------------");
console.log(array);
pop(array[0]);
push(array[1], 7);
console.log("------------The Array---------------");
console.log(array);
pop(array[1]);
console.log("------------The Array---------------");
console.log(array);
function push(stack, ele, top) {
  if (array[0].length + array[1].length <= N - 1) {
    stack[stack.length] = ele;
  } else {
    console.log("Array is full");
  }
}
function pop(stack) {
  if (stack.length < 0) console.log("Stack is Empty");
  else {
    let x = stack.splice(stack.length - 1, 1);
    console.log(x, "Got deleted");
  }
}
