/*Function has two arguments

First: array of objects

Second: an object for replacement 

Each object in array and in second function argument - can have any field set, but will have a field id 

Function replaces an object in array with second argument object if field id values are equal

If array doesn’t have an object with id value like second function argument - object is pushed into the array

And returns an updated array as a result

E.g. 

Calling function with first argument - array: [{id: 4, name: 'Lecturer'}, {id: 3, title: 'devMentor'}, {id: 5}]  

Second argument - object: {id: 3}

Function returns an updated array: [{id: 4, name: 'Lecturer'}, {id: 3}, {id: 5}]
*/

const camelize = word => {
    let result = "";
    result = word.split("-");
    console.log(result.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join(""));
}

camelize("background-color") == 'backgroundColor';
///camelize("list-style-image") == 'listStyleImage';
////camelize("-webkit-transition") == 'WebkitTransition';

/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)
*/

const filterRange = (arr, a, b) => {
    return console.log(arr.filter(item => item >= a && item <= b));
}

let smth = [5, 3, 8, 1];

let filtered = filterRange(smth, 1, 4);

/*
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/
const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++){
        let newValue = arr[i];

        if(a < newValue && b > newValue ){
            arr.splice(i, 1);
            i--;
        }
    }
}

let v2 = [5, 3, 8, 1];
console.log("old");
console.log(v2);

filterRangeInPlace(v2, 1, 4);
console.log("new");
console.log(v2);





let sort = [5, 2, 1, -10, 8];
console.log("test");
console.log(sort.sort((a, b) => b - a));

// ... your code to sort it in decreasing order

//alert( arr ); // 8, 5, 2, 1, -10


/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/


let html = ["HTML", "JavaScript", "CSS"];
const copySorted = (arr) => {
    return arr.slice().sort();
}

let sorted = copySorted(html);

console.log(sorted);


/*Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

Usage example:

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.*/

const Calculator = () => {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    };

    this.calculate = function(str) {
        let newArr = str.split(" ");
        let a = +split[0];
        let op = split[1];
        let b = +split[2];
        if (!this.methods[op] || NaN(a) || NaN(b)){
            return NaN;
        }
        return this.methods[op](a, b);
    }
};
/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

console.log( names ); // John, Pete, Mary*/


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

































const nArr = [
    {id: 4, name: 'Lecturer'},
    {id: 3, title: 'devMentor'},
    {id: 5}
];

const replace = (arr, a) => {
    let index = arr.findIndex(user => user.id === a.id);
    if(!index !== -1){
        arr.splice(index, 1, a)
    } else {
        arr.push(a);
    }
    return console.log(arr);
}
console.log("aaaaaaa");
replace(nArr, {id: 3});



