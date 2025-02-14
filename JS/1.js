// find the sum of two number

// const f = (a,b) => a+b
// const output = f(1,2)
// console.log(output)


// Write a JavaScript program to find the maximum number in an array. 

// const getMax = (array) => Math.max(...array)
// const output = getMax([1,2,3,4,5,6,7,8,9,10])
// console.log(output)

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

// const isPalindrome = (str) => {
//     return  str.split('').reverse().join('') === str
// }

// console.log(isPalindrome('madam')) // true
// console.log(isPalindrome('hello')) // false

//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

// const reverse = (str) => str.split('').reverse().join('');
// console.log(reverse('hello'))

// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers

// const getEvenDigit = (array) => array.filter((arr) => arr % 2 === 0)
// console.log(getEvenDigit([0,1,2,3,4,5,6,7,8,9,10]))

// Write a JavaScript program to calculate the factorial of a given number. 

// const factorial = (n) => {
//   if (n === 1) return 1;
//   else{
//     return n * factorial(n-1);
//   }
// };

// console.log(factorial(5))
// console.log(factorial(10))

// Write a JavaScript function to check if a given number is prime. 

// const isNumberisPrime = (num) => {
//   if (num < 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//     return true;
//   }
// };

// console.log(isNumberisPrime(13))
// console.log(isNumberisPrime(6))
// console.log(isNumberisPrime(17))
// console.log(isNumberisPrime(-1))

// Write a JavaScript program to find the largest element in a nested array. 

const nestedArray = [1, [2, 3, [4, 5], 6], [7, 8], 9];