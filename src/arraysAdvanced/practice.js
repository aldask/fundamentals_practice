//Write a function that takes an array of numbers and returns the sum of all even numbers in the array.

const randomArr = [5, 6, 1, 9, 4, 8];

const sum = (arr) => {
    let result = arr.reduce((sum, current) => sum + current);
    console.log(result);
}
sum(randomArr);

//Write a function that takes an array of strings and returns a new array with all the strings in uppercase.

const randomLetter = ["Test1", "tEsT2", "teSt3" ];

const bigLetters = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].toUpperCase());
    }
    console.log(newArr);
}
bigLetters(randomLetter);

//Write a function that takes an array of numbers and returns a new array with all the numbers doubled.

const double = (x2) => {
    let doubleArr = [];
    x2.forEach(element => {
        let doubled = element * 2;
        doubleArr.push(doubled);
    });
    console.log(doubleArr);
}
double(randomArr);

//Write a function that takes a string and a letter, and returns the number of times the letter appears in the string.
const letterTest = ["Test kiek tiek teikia" ];
const letterRepeat = (arr, l) => {
    let newArr = arr.toString();
    newArr.split('');
    let count = 0;
    for (let i = 0; i < newArr.length; i++){
        if(l.toLowerCase() === newArr[i].toLowerCase()){
            count++;
        }
    }
    console.log(count);
}
letterRepeat(letterTest, "t");

//Write a function that takes a number and returns a string that contains "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5. For all other numbers, the function should return the number as a string.
const fizz = (num) => {
    if(num % 3 === 0 && num % 5 === 0){
        return "FizzBuzz";
    } else if(num % 3 === 0){
        return "Fizz";
    } else if(num % 5 === 0){
        return "Buzz";
    } else {
        return num.toString();
    }
    //console.log(count);
}
console.log(fizz(25));


//Write a function that takes an array of strings and returns the longest string in the array.
const stringTest = ["Array", "help", "nice"];

const biggestString = (arr) => {
    let newVar = '';
    for(let i = 0; i < arr.length; i++){
        if(newVar.length < arr[i].length){
            newVar = arr[i];
        }
    }
    return newVar;
}
console.log(biggestString(stringTest));


//Write a function that takes an array of objects with name and age properties, and returns an array of names of people who are older than 18.
const people = [
    { name: 'Alice', age: 28 },
    { name: 'Bob', age: 32 },
    { name: 'Charlie', age: 20 },
    { name: 'Oleg', age: 16 },
    { name: 'David', age: 45 }
];

const olderThan18 = (arr) => {
    let older = arr.filter(older => older.age > 18);
    let newArr = older.map(older => older.name);

    console.log(newArr);
}
olderThan18(people);

///Write a function that takes a number and returns true if it is a prime number, and false otherwise.

const prime = (num) => {
    if(1 % num === 0){
        return num, true;
    } else return num, false;


}
console.log(prime(1));


//Write a function that takes a string and returns a new string with all vowels removed.

const randomArr1 = "Test, atsas asofdiskdf, wrtt";
const vowels = (arr) => {
    let split = arr.split('');
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for(let i = 0; i < split.length; i++){
        if(vowels.includes(split[i])){
            split.splice(i, 1);
            i--;
        }
    }
    return console.log(split.join(''));
}
vowels(randomArr1);

/*
Write a function that takes an array of numbers and returns the second highest number in the array.
*/

const secondBiggest = (arr) => {
    const sorterArr = arr.sort((a, b) => b - a);
    const secondLargest = sorterArr[1];
    return console.log(secondLargest);
}
secondBiggest(randomArr);

//Write a function that takes an array of numbers and returns the sum of all the positive numbers in the array.

const positiveSum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            sum += arr[i];
        }
    }
    console.log("test");
    return console.log(sum);
}
positiveSum(randomArr);

//Write a function that takes an array of objects and returns an array of objects sorted by a specified property (e.g. age, name, date).

const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 20 }
];

const sortUsers = (arr, x) => {
    return arr.sort((a, b) => {
        if(a[x] < b[x]){
            return 1;
        } else if(a[x] > b[x]){
            return -1;
        } else {
            return 0;
        }
    });
}

console.log(sortUsers(users, "id"));
//Write a function that takes two arrays and returns a new array with elements that are in both of the input arrays.

const intersect = (arr1, arr2) => {
    return arr1.filter(elem => arr2.includes(elem));
};

console.log(intersect(users, randomArr1));

//Write a function that takes an array of objects and returns the object with the highest value for a specified property (e.g. age, salary, rating).

//const highestValue = (arr, value) => {
  //  return arr.filter(obj => Math.max(obj.value));
//};
console.log('test');
//console.log(highestValue(users, "age"));

//Write a function that takes an array of objects and a property name, and returns a new array of objects sorted by that property in ascending order.

const sss = (aa, propName) => {
    let sort = aa.sort((a, b) => {
        if(a[propName] < b[propName]){
            return -1;
        } else if (a[propName] > b[propName]){
            return 1;
        } else {
            return 0;
        }
    })
    return sort;
};

console.log(sss(users, "age"));

//Write a function that takes an array of objects and a property name, and returns the object with the lowest value for that property.

const lowestValue = (arr, propName) => {
    let lovestValue = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i][propName] < lovestValue){
            lovestValue = arr[i];
        }
    }
    return lovestValue;
};

console.log(lowestValue(users, "age"));