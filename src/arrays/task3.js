/*
Create an arrow function with one array of numbers argument

The function returns the smallest number in array. 

Initialize a new array of 10 elements. Generate 10 random numbers

Print generated array

Call the function passing generated array and print result to the console

E.g. 

const array = [12, 4. 5, 8, 7]

The answer is 4
*/

const findSmallest = (num) => {
    return Math.min(...num);
};

const random = [];

for(let i = 0; i < 10; i++){
    random.push(Math.floor(Math.random()*100));
}

console.log(findSmallest(random));