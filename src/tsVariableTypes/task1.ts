const myName: string = "John";
let age: number = 25;
let isStudent: boolean = true;
let address: string | null = null;

console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Is Student: ${isStudent}`);
console.log(`Address: ${address}`);

age = 42;
isStudent = false;
address = "main street";

console.log(`Updated Age: ${age}`);
console.log(`Updated Is Student: ${isStudent}`);
console.log(`Updated Address: ${address}`);
