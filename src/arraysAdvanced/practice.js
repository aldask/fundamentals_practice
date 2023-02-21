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
    newArr.forEach(element => {
        if(element === l){
            let count;
            count++;
        };
    });
    console.log(count);
}
letterRepeat(letterTest);

/*
Write a function that takes a number and returns a string that contains "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5. For all other numbers, the function should return the number as a string.

Write a function that takes an array of strings and returns the longest string in the array.

Write a function that takes an array of objects with name and age properties, and returns an array of names of people who are older than 18.

Write a function that takes a number and returns true if it is a prime number, and false otherwise.

Write a function that takes a string and returns a new string with all vowels removed.

Write a function that takes an array of numbers and returns the second highest number in the array.
*/
