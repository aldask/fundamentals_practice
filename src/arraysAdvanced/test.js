//Write a function that takes an array of objects and a property name, and returns the object with the lowest value for that property.
const users = [
    { id: 1, name: "Aaa", age: 25 },
    { id: 1, name: "Aab", age: 25 },
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 }
];

const lowestValue = (arr, propName) => {
    let lovestValue = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][propName] < lovestValue[propName]){
            lovestValue = arr[i];
        }
    }
    return lovestValue;
};

console.log(lowestValue(users, "name"));

const biggestValue = (arr, propName) => {
    let lovestValue = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][propName] > lovestValue[propName]){
            lovestValue = arr[i];
        }
    }
    return lovestValue;
};
console.log(biggestValue(users, "name"));