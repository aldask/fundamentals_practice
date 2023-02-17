function numbers (a, b){
    return function () {
        console.log(a + b);
    }
}

numbers(2, 3)();
