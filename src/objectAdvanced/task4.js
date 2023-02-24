/*Create an arrow function with arguments:

obj (type object)

field (type string)

value (any type)

The function returns a new object with all fields of obj and field: value

E.g. calling function: fn({name: 'Rutenis', surname: 'Turcinas', age: 33}, 'surname', 'lecturer');

Expected result would be an object: {surname: 'lecturer', name 'Rutenis', age: 33}*/

const a = (obj, field, value) => {
    return {
        ...obj,
        [field]: value
    }
}
const test1 = {
    name: "Aldas",
    surname: "Kasputis",
    age: 999
};

const newTest = a(test1, "job", "pro");