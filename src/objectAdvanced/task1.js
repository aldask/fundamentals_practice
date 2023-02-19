const obj = {
    fieldTitle: "Title",
    value: 533
}

const ssss = (arg) => {
    for (let key in arg){
        let value = arg[key];
        console.log(`${key}: ${arg[key]}`);
        if(typeof value === "object" && value !== null){
            ssss(value);
        } 
    }
    ///console.log(testObj);
}

ssss(obj);

const obj2 = {
    name: "Aldas",
    surname: "Kasputis"
}

ssss(obj2);


const printObjectFields = (obj) => { // Define an arrow function that takes an object as a parameter
    for (const key in obj) { // Loop through each key in the object
      const value = obj[key]; // Get the value of the current key
      if (typeof value === 'object' && value !== null) { // Check if the value is an object (but not null)
        printObjectFields(value); // Recursively call the function with the nested object
      } else { // If the value is not an object (or is null)
        console.log(`field title: ${key}, value: ${value}`); // Print the field title and value as a string
      }
    }
  };


