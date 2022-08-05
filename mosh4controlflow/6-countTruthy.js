const array = [0, null, undefined, "", 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

console.log("-------------------");
function cT(arr) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i]) c++;
  return c;
}
console.log(cT(array));

const arr = [0, 6666, 77777, 8888, null, undefined, "", 2, 3];
console.log(cT(arr));
