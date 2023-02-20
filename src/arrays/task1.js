/*Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll*/

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-roll");

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

console.log(styles.shift());

styles.unshift("Rap", "Reggae");

console.log(styles);


////////

let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // ?

/*
Create a file task1.js in src/arrays. Topics: init an array, iterate through elements, access element

Create an array with initial values set:

Any string

Some number

Boolean value

Any string

Assign this array to the constant

Iterate through array elements

Using classic loop for

Using array function forEach

After the loop - create a constant second and assign a second array element as an initial constant value

Print the constant to the console
*/

const someArr = ["RandomString", 22, true, "AnotherRandomString"];

for (let i = 0; i < someArr.length; i++){
    console.log(someArr[i]);
}

someArr.forEach(function(all){
    console.log(all);
});


const anotherArr = someArr;

console.log(anotherArr);