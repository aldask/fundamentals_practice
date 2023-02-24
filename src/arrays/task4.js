/*
Create an arrow function with one array of numbers argument

The function returns the average number of array elements

Initialize a new array of 10 elements. Generate 10 random numbers

Print generated array

Call the function passing generated array and print result to the console

E.g.

const array = [2, 1. 3]

The answer is 2
*/

const random = [];

for(let i = 0; i < 10; i++){
    random.push(Math.floor(Math.random()*100));
}

console.log(random);

const average = (b) => {
    let sum = 0;
    let howMany = 0;
    let final = 0;
    for (let i = 0; i < b.length; i++){
        sum += b[i];
        howMany++;
        final = sum / howMany;

    }
    return final;
}

console.log(average(random));