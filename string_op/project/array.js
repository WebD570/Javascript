/*const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

const result = arr1.concat(arr2);

console.log(result);*/

/*const arr1 = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [6, 7, 8, 9, 1, 2];

const combined = [...arr1, ...arr2];
const uniqueValues = [...new Set(combined)];

console.log(uniqueValues); */

const arr1 = [1, 3, 6, 2, 5, 4, 8, 7, 9, 1, 2, 3, 4, 5, 6, 6, 7];
const uniqueValues = [...new Set(arr1)];
const result = uniqueValues.sort((a, b) => a - b);
console.log(result); 


