/*
Create a constant a with type any and initial value 'devMentor'

Assign constant value to variable b type string using type assertion as

Assign constant value to variable c type string using angle-bracket syntax
*/

const a: any = "devMentor";
const b = a as string;
const c = <string>"test";

console.log(b);
console.log(c);