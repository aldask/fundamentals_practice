/*
Create an interface for a car that has a make, model, and year

Create a function with one argument: array of cars

Function returns the oldest car make and model (combined in one string) as a result
*/
interface Car {
    make: string,
    model: string,
    year: number
};

const testFunc = (arr: Car[]): string => {
    let oldestOne: Car = arr[0];
    for (let i = 0; i < arr.length; i++){
        if(arr[i].year < oldestOne.year) {
            oldestOne = arr[i];
        }
    }
    return `${oldestOne.make} ${oldestOne.model} ${oldestOne.year}`;
};

const cars: Car[] = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2010 },
    { make: "Ford", model: "Mustang", year: 2005 },
    { make: "Chevrolet", model: "Camaro", year: 2022 },
    { make: "Nissan", model: "Altima", year: 2018 }
];

console.log(testFunc(cars));
