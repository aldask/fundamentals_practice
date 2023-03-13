/*
Create a file task3.js in src/tsFunctions. Put the solution in this file of the task bellow

Create a function that takes in a string and returns a new string with all of the vowels removed

Make sure function, variables have types defined

E.g. calling function: removeVowels('Hello world!'); The result should be: Hll wrld!
*/
var deleteVowels = function (txt) {
    return txt.replace(/[aeiouAEIOU]/gi, '');
    //const vowels: string[] = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    //const divided: string[] = txt.split('');
    //for (let i = 0; i < divided.length; i++){
    //}
};
console.log(deleteVowels("Hello world"));
