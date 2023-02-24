/*
Create a file task2.js in src/object. Put the solution in this file of the task bellow

Create a constant academy and assign an object to that constant

The object has following fields:

title: 'devMentor'

course: 'fundamentals'

mentorship: true

Print to the console academy title using direct access: academy.title

Print to the console academy course using square brackets: academy['course']

Create a constant propertyName and assign an initial value: mentorship

Print to the console academy mentorship using square brackets with constant propertyName

Delete field course from the object academy

Print field course to the console (verify, that i'’s undefined after delete)
*/

const academy = {
    title: "Big Academy",
    course: "fundamentals",
    mentorship: true,
};

//console.log(academy.title);
//console.log(academy['course']);

const propertyName = "mentorship";
//console.log(propertyName);
//console.log(academy[propertyName]);

delete academy.course;
console.log(academy.courese);
console.log(academy);
