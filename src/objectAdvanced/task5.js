/*Create a file task5.js in src/objectAdvanced. Topic: object transformation

Create an object person with fields

name (your chosen value)

surname (your chosen value)

age (your chosen value)

birthDate (your chosen value)

Create an arrow function with one argument (person)

Function returns a new object - transformed person

Field fullName is combined of person.name and person.surname

Field nickname is combined of person.surname and person.age*/

const person = {
    name: "Aldas",
    surname: "Kasputis",
    age: 9999,
    birthdate: 1998
};

const test = (arg) => {
   let modded = {
    fullname: arg.name + arg.surname,
    nickName: arg.surname + arg.age
   }
   return modded;
}

test(person);