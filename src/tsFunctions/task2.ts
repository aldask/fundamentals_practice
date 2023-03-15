/*Create a file task2.js in src/tsFunctions. Put the solution in this file of the task bellow

Create a function called sumSquares that takes in an array of numbers and returns the sum of the squares of each number

Make sure function, variables have types defined

E.g. calling function: sumSquares([4, 3, 5]); The result should be: 50
*/

const sumSquares = (arr: number[]): number => {
    const square = arr.map(num => num * num);
    return square.reduce((first, second) => first + second, 0);
}

console.log(sumSquares([4, 3, 5]));