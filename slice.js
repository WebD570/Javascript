
const numbers = [1,2,3,4,5]
let text = "Hello delhi";
console.log(text.split(""));
console.log(text.indexOf("delhi"));

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position