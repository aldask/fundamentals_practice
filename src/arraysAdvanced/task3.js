/*
Create a file task3.js in src/arrayAdvanced. Create a function which returns an array of adult people names from people array

Function has one argument - objects array

Each object in array - can have any field set, but will have two fields: age, and name

Function selects adult people age >= 18

And returns an array of selected people names

E.g.

Calling function with an argument: [{name: 'Tomas', age: 15}, {name: 'Erika', age: 22}, {name: 'Saulius', age: 17}, {name: 'Audrius', age: 34}]

Function returns an array of adult people names: ['Erika', 'Audrius']
*/
const names = (arr) => {
    let firstName = arr.filter(firstName => firstName.age >= 18);
    let newArr = firstName.map(firstName => firstName.name);

    console.log(newArr);
}
names([{name: 'Tomas', age: 15}, {name: 'Erika', age: 22}, {name: 'Saulius', age: 17}, {name: 'Audrius', age: 34}]);