const typeCheck = (value) => {
    typeof value === "boolean" ?
        console.log("Variable is boolean: " + value) :
        typeof value === "number" ?
        console.log("Variable is a number. Its square is: " + value * value) :
        typeof value === "string" ?
        console.log("Variable is a string: " + value) :
        console.log("Variable type is: " + typeof value);
}

typeCheck(55);