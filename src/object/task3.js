/*
Create a constant complexObject and assign an empty object to that constant

Assign a field person to the complexObject (use direct access to the field: complexObject.person). Field person value is another object with fields:

name (your chosen value)

email (your chosen value)

birthDate (your chosen value)

Assign a field academy to the complexObject (use square brackets access to the field: complexObject['academy']). Field academy value is another object with fields:

title (your chosen value)

numberOfStudents (your chosen value)

Create an arrow function with one argument (complexObject), that function prints to the console person name, and academy title, following pattern: Rutenis - devMentor
*/

const complexObject = {};

complexObject.name = "Aldas";
complexObject.email = "somesome@gmail.com";
complexObject.birthDate = "1998";

complexObject['academy'] = {
    title: "insideValue",
    numberOfStudents: 31
};

const test = (obj) => {
    console.log(`${complexObject.name} - ${complexObject.academy.title}`);
}

test(complexObject);