/*Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/

const user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
///////////////////

const isEmpty = (obj) => {
    for(let key in obj){
        return false;
    } 
    return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false
///////////////////

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

 let sum = 0;
 for (let key in salaries){
    sum += salaries[key];
 }

 console.log(sum);


 ///////
  
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  const multiplyNumeric = (obj) => {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
          obj[key] *= 2;
        }
      }
    }
  console.log(multiplyNumeric(menu));


  /*Create a file task1.js in src/object. Put the solution in this file of the task bellow

Create a constant human and assign an object to that constant

The object has fields (with your chosen initial values):

firstName (string value)

lastName (string value)

age (number value)

isDeveloper (boolean value)

Create an arrow function printHuman which accepts an object and prints to the console object fields following pattern: firstName lastName (age) is developer

E.g. if we call that function with a human object, which has fields (Rutenis, Turcinas, 33, false), the console will have printed line: Rutenis Turcinas (30) is not a developer*/



const human = {
    firstName: "Mike",
    lastName: "Smurf",
    age: 22,
    isDeveloper: true
}

const printHuman = ({firstName, lastName, age, isDeveloper}) => {
    const txt = isDeveloper ? "is" : "is not";
    console.log(`${firstName} ${lastName} ${age} ${txt} a developer`);
};

printHuman(human);