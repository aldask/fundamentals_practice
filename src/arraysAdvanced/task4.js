/*
Create a file task4.js in src/arrayAdvanced. Create a function which counts people by name and creates a map (object)

Function has one argument - objects array

Each object in array - can have any field set, but will have two fields: age, and name

Function creates a map (object) where the key is name and value is number of people having such name

And returns created map (object) 

E.g.

Calling function with an argument: [{name: 'Tomas', age: 15}, {name: 'Erika', age: 22}, {name: 'Tomas', age: 17}, {name: 'Audrius', age: 34}, {name: 'Erika', age: 42}, {name: 'Tomas', age: 19}]

Function returns a map (or objects) where the key is name and value amount of people with such name: {Tomas: 3', Erika: 2, Audrius: 1}
*/
const counts = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let name = arr[i].name;
        if(name )
    }
};

counts([{name: 'Tomas', age: 15}, {name: 'Erika', age: 22}, {name: 'Tomas', age: 17}, {name: 'Audrius', age: 34}, {name: 'Erika', age: 42}, {name: 'Tomas', age: 19}]);