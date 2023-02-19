/*Create an arrow function with two arguments: objectA, objectB

The function returns one object which contains all fields from objectA and objectB

Use object spread fields operation*/

const func = (objectA, objectB) => {
    const a = {...objectA, ...objectB};
    console.log(a);
}

const firstOne = {
    name: "Aldas",
    surname: "Kasputis"
}
const secondOne = {
    course: "fundamentals",
}

func(firstOne, secondOne);