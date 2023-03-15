;
var testFunc = function (arr) {
    var oldestOne = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].year < oldestOne.year) {
            oldestOne = arr[i];
        }
    }
    return "".concat(oldestOne.make, " ").concat(oldestOne.model, " ").concat(oldestOne.year);
};
var cars = [
    { make: "Toyota", model: "Corolla", year: 2015 },
    { make: "Honda", model: "Civic", year: 2010 },
    { make: "Ford", model: "Mustang", year: 2005 },
    { make: "Chevrolet", model: "Camaro", year: 2022 },
    { make: "Nissan", model: "Altima", year: 2018 }
];
console.log(testFunc(cars));
