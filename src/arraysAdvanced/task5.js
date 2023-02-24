/*
Create a file task5.js in src/arrayAdvanced. Create a function that clean-ups an array by removing duplicates

Function has one argument - strings array

That array might have repititeve strings

Function returns an array with removed all duplicates

E.g.

Calling function with an argument: ['devMentor', 'cool', 'academy', 'devMentor']

Function returns an array: ['devMentor', 'cool', 'academy']
*/

const duplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index );
};

console.log(duplicates(['devMentor', 'cool', 'academy', 'devMentor']));

//Write a function that takes an array of strings as input and returns a new array containing only the strings that are longer than 5 characters.



//Write a function that takes an array of numbers as input and returns a new array containing only the numbers that are greater than or equal to 10.

//Write a function that takes an array of objects as input and returns a new array containing only the objects that have a specific property and value. For example, the function could take an array of objects representing people, and return only the objects representing people who are over the age of 30.

//For each task, you can use the filter() method to iterate over the input array and return a new array containing only the elements that meet the specified condition.

