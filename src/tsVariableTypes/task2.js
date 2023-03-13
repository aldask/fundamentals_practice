/*
Note: all variable and array types should be defined

Create an array of strings with 3 random words inside

Create an empty array of numbers

Iterate through words array and push the length of word into the numbers array

Print to the console word lengths array
*/
var word = ["truck", "car", "license"];
var numbers = [];
for (var i = 0; i < word.length; i++) {
    var words = word[i];
    numbers.push(words.length);
}
console.log(numbers);
