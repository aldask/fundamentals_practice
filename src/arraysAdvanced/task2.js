/*
Create a file task2.js in src/arrayAdvanced. Create a function which removes objects in array by id fields

Function has two arguments

First: array of objects

Second: array of id values

Each object in array - can have any field set, but will have a field id 

Function removes objects from the array if second argument array contains object id field value

And returns an updated array as a result

E.g.

Calling function with first argument - array: [{id: 4, name: 'Lecturer'}, {id: 3, title: 'devMentor'}, {id: 5}]  

Second argument - array: [1, 7, 3, 2, 10, 4]

Function returns an updated array: [{id: 5}]
*/
const nArr = [
    {id: 4, name: 'Lecturer'},
    {id: 3, title: 'devMentor'},
    {id: 5}
  ];
  
  const remove = (arr, a) => {
    return console.log(arr.filter(obj => !a.includes(obj.id)));
  };
  
  remove(nArr, [1, 7, 3, 2, 10, 4]);