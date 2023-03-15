/*Create a file task2.js in src/tsFunctions. Put the solution in this file of the task bellow

Create a function called sumSquares that takes in an array of numbers and returns the sum of the squares of each number

Make sure function, variables have types defined

E.g. calling function: sumSquares([4, 3, 5]); The result should be: 50
*/
var sumSquares = function (arr) {
    var square = arr.map(function (num) { return num * num; });
    return square.reduce(function (first, second) { return first + second; }, 0);
};
console.log(sumSquares([4, 3, 5]));
