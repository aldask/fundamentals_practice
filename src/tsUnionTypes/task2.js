/*
Create a file task2.js in src/tsUnionTypes. Put the solution in this file of the task bellow

Create a function with optional string type argument

If an argument was passed - function returns a number of uppercase letters in that string

If an argument wasn’t passed - function returns null value

E.g. calling function: countUppercase('devMentor'); The result should be: 1
*/
var counter = function (txt) {
    if (txt) {
        var count = 0;
        for (var i = 0; i < txt.length; i++) {
            if (txt[i] === txt[i].toUpperCase()) {
                count++;
            }
        }
        return count;
    }
    else {
        return null;
    }
};
console.log(counter());
console.log(counter("tEst"));
console.log(counter("tESt"));
